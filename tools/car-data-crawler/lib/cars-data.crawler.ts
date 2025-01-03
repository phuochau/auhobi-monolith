import { Timer } from "./timer"
import _ from "lodash"
import { ElementHandleForTag } from "playwright-core/types/structs"
import { Url } from "./url"
import { CrawlerController } from "./crawler-controller"
import { Browser, Page } from "playwright"
import { expect } from "playwright/test"
import { goto } from "./playwright"
import path from "path"
import { XMLParser } from "fast-xml-parser";
import { Option, Size, Tech } from "./models/car-data-vehicle"
import { FileUtils } from "./file-utils"
import { Http } from "./http"
import axios from "axios"
import fs from 'fs'
import { Logger } from "./logger"

enum UrlExist {
    NO,
    YES,
    HAS_CHANGE
}

export namespace CarsDataCrawler {
    export const BASE_URL = 'https://www.cars-data.com'
    export const BASE_DIR = path.join(process.cwd(), 'output/cars-data.com')

    export const VEHICLE_BASE_DIR = path.join(BASE_DIR, 'vehicles')
    export const VEHICLE_PARSED_DATA_DIR = path.join(VEHICLE_BASE_DIR, 'json')
    export const VEHICLE_PARSED_TYPE_XML_PATH = path.join(VEHICLE_BASE_DIR, 'parsed_type_xml_urls.json')
    export const VEHICLE_PARSED_URLS_PATH = path.join(VEHICLE_BASE_DIR, 'parsed_vehicle_urls.json')
    export const VEHICLE_FAILED_URLS_PATH = path.join(VEHICLE_BASE_DIR, 'failed_vehicles_urls.json')

    export const VEHICLE_DOWNLOADED_IMAGES_DIR = path.join(VEHICLE_BASE_DIR, 'images')
    export const VEHICLE_DOWNLOADED_IMAGES_COLLECTION_PATH = path.join(VEHICLE_BASE_DIR, 'downloaded_vehicle_image_collection.json')
    export const VEHICLE_DOWNLOADED_IMAGES_PATH = path.join(VEHICLE_BASE_DIR, 'downloaded_vehicle_image_urls.json')
    export const VEHICLE_DOWNLOADED_IMAGES_FAILED_PATH = path.join(VEHICLE_BASE_DIR, 'downloaded_failed_vehicle_image_urls.json')

    export const vehicleGetTypeXMLUrl = (index: number) => {
        return `${BASE_URL}/en/types-en-${index}.xml`
    }

    export const vehicleGetLocalDataPathAtTypeIndex = (xmlIndex: number) => {
        return path.join(VEHICLE_PARSED_DATA_DIR, `vehicles${xmlIndex}.json`)
    }

    export const vehicleGetLocalImagePath = (filename: string) => {
        return path.join(VEHICLE_DOWNLOADED_IMAGES_DIR, filename)
    }

    export const isURLExist = (list: any[], url: any): UrlExist => {
        const found = list.find(item => item.loc === url.loc)

        if (!found) {
            return UrlExist.NO
        }

        if (found?.lastmod === url?.lastmod) {
            return UrlExist.YES
        }
    
        return UrlExist.HAS_CHANGE
    }

    export const getUrlIndex = (list: any[], url: any): number => {
        return list.findIndex(item => item.loc === url.loc)
    }

    export const vehicleCrawAll = async(browser: Browser): Promise<void> => {
        if (!fs.existsSync(VEHICLE_PARSED_DATA_DIR)) {
            fs.mkdirSync(VEHICLE_PARSED_DATA_DIR, { recursive: true })
        }

        if (!fs.existsSync(VEHICLE_DOWNLOADED_IMAGES_DIR)) {
            fs.mkdirSync(VEHICLE_DOWNLOADED_IMAGES_DIR, { recursive: true })
        }

        let vehicleUrls: any = null
        let xmlIndex = 0
        const xmlParser = new XMLParser();

        const parsedTypeXmlUrls: any[] = JSON.parse(await FileUtils.safeReadFile(CarsDataCrawler.VEHICLE_PARSED_TYPE_XML_PATH, '[]'))
        const parsedVehicleUrls: any[] = JSON.parse(await FileUtils.safeReadFile(CarsDataCrawler.VEHICLE_PARSED_URLS_PATH, '[]'))
        do {
            const vehiclesPath = CarsDataCrawler.vehicleGetLocalDataPathAtTypeIndex(xmlIndex)
            const parsedVehicles: any[] = JSON.parse(await FileUtils.safeReadFile(vehiclesPath, '[]'))
            const xmlTypeUrl = CarsDataCrawler.vehicleGetTypeXMLUrl(xmlIndex)

            if (parsedTypeXmlUrls.includes(xmlTypeUrl)) {
                Logger.warn('[SKIP]', xmlTypeUrl)
                xmlIndex++
                vehicleUrls = true
                continue 
            }

            Logger.info('TYPE XML:', xmlIndex, xmlTypeUrl)

            await Timer.wait(2)
            vehicleUrls = await axios.get(xmlTypeUrl).then(res => res.data)

            if (vehicleUrls) {
                const items: any[] = _.get(xmlParser.parse(vehicleUrls), 'urlset.url', [])
                Logger.info(`Found ${items.length} vehicle urls`)

                let itemIndex = 0
                const failedVehicleUrls: any[] = []
                for (const item of items) {
                    try {
                        const parsedExist = isURLExist(parsedVehicleUrls, item)
                        if (parsedExist === UrlExist.YES) {
                            Logger.warn('[SKIP]', `${itemIndex}`, item.loc)
                            itemIndex++
                            continue
                        }


                        const vehicle = await CarsDataCrawler.vehicleCrawlSingleVehicle(browser, item.loc)

                        if (parsedExist === UrlExist.NO) {
                            parsedVehicles.push(vehicle)
                            parsedVehicleUrls.push(item)
                        } else {
                            const vehicleIndex = parsedVehicles.findIndex(item => item.ref === item.loc)
                            if (vehicleIndex > -1) {
                                parsedVehicles[vehicleIndex] = vehicle
                            } else {
                                parsedVehicles.push(vehicle)
                            }

                            const urlIndex = getUrlIndex(parsedVehicleUrls, item.loc)
                            if (urlIndex > -1) {
                                parsedVehicleUrls[urlIndex] = item
                            } else {
                                parsedVehicleUrls.push(item)
                            }
                        }
                        Logger.success('[SUCCESS]', `${itemIndex}`, item.loc)

                        if (isURLExist(failedVehicleUrls, item)) {
                            failedVehicleUrls.splice(failedVehicleUrls.indexOf(item), 1)
                        }

                    } catch (err) {
                        Logger.error('[ERROR]', item.loc, err)
                        if (!isURLExist(failedVehicleUrls, item)) {
                            failedVehicleUrls.push(item)
                        }
                    }

                    // Keep track at run-time
                    FileUtils.overwrite(vehiclesPath, JSON.stringify(parsedVehicles))
                    FileUtils.overwrite(CarsDataCrawler.VEHICLE_PARSED_URLS_PATH, JSON.stringify(parsedVehicleUrls))
                    FileUtils.overwrite(CarsDataCrawler.VEHICLE_FAILED_URLS_PATH, JSON.stringify(failedVehicleUrls))

                    itemIndex++
                }

                Logger.info('Waiting for next fetch......')

                if (!failedVehicleUrls.length) {
                    parsedTypeXmlUrls.push(xmlTypeUrl)
                    FileUtils.overwrite(CarsDataCrawler.VEHICLE_PARSED_TYPE_XML_PATH, JSON.stringify(parsedTypeXmlUrls))
                }

                xmlIndex++
            } else {
                Logger.warn('[EMPTY]', xmlTypeUrl)
            }
        } while (vehicleUrls)
    }

    export const vehicleCrawlSingleVehicle = async (browser: Browser, url: string): Promise<any> => {
        const basicPage = await CrawlerController.getNewPage(browser)
        const basicInfo = await vehicleCrawlBasicInfo(basicPage, url, browser)
        await basicPage.close()

        const techPage = await CrawlerController.getNewPage(browser)
        const tech: Tech[] = await CarsDataCrawler.vehicleCrawlSeparateSpecs(techPage, Url.join(url, 'tech'))
        await techPage.close()

        const optionsPage = await CrawlerController.getNewPage(browser)
        const options: Option[] = await CarsDataCrawler.vehicleCrawlSeparateSpecs(optionsPage, Url.join(url, 'options'))
        await optionsPage.close()

        const sizesPage = await CrawlerController.getNewPage(browser)
        const sizes: Size[] = await CarsDataCrawler.vehicleCrawlSeparateSpecs(sizesPage, Url.join(url, 'sizes'))
        await sizesPage.close()

        const years = CarsDataCrawler.vehicleGetManufacturingYears(tech)

        return {
            ...basicInfo,
            ...years,
            tech,
            options,
            sizes
        }
    }


    export const vehicleCrawlBasicInfo = async (page: Page, url: string, browser: Browser): Promise<any> => {
        await goto(page, url)

        await expect(page.locator('.title h1')).toBeVisible()
        const carName = (await page.locator('.title h1').textContent())?.replace('specs', '').trim()

        const brandName = (await page.locator('.title a').getAttribute('title'))?.trim()

        await expect(page.locator('.title h2')).toBeVisible()
        const carDescription = (await page.locator('.title h2').textContent())?.trim()

        const viewMoreImagesElement = page.getByText('View More images', { exact: true }).first()
        await expect(viewMoreImagesElement).toBeVisible()

        const imagesUrl = await viewMoreImagesElement.getAttribute('href')
        expect(imagesUrl).toBeTruthy()

        const imagesPage = await CrawlerController.getNewPage(browser)
        await goto(imagesPage, imagesUrl!)

        const imageRows = await page.$$('.row.img100')

        let imageUrls = []
        for (let row of imageRows) {
            let urls = await Promise.all((await row.$$('img')).map(image => image.getAttribute('src')))
            urls = urls
                .filter(url => !_.isNil(url))
                .map(url => {
                    return getOnlineImageUrlFromThumbUrl(url)
                })
            imageUrls.push(...urls)
        }

        imageUrls = _.uniq(imageUrls.sort())

        await imagesPage.close()

        return {
            name: carName,
            brandName,
            description: carDescription,
            ref: url,
            images: imageUrls
        }
    }

    const vehicleCrawlTableFeatures = async (tables: ElementHandleForTag<"table">[]) => {
        const sections: any[] = []
        for (const table of tables) {
            let rows = await table.$$('tr')

            if (rows.length > 0) {
                const sectionTitle = (await rows[0].textContent())!.trim()
                rows = rows.slice(1)

                const features: any = {}
                for (const row of rows) {
                    const cols = await row.$$('td')
                    if (cols.length === 2) {
                        let name = await cols[0].textContent()
                        const value = await cols[1].textContent()

                        if (name) {
                            if (name.endsWith(':')) {
                                name = name.substring(0, name.length - 1)
                            }
                            name = name?.trim()
                        }

                        if (name?.length) {
                            features[name] = value
                        }
                    }
                }

                sections.push({ title: sectionTitle, features })
            }
        }

        return sections
    }

    export const vehicleCrawlSeparateSpecs = async (page: Page, url: string): Promise<any> => {
        await goto(page, url)

        await expect(page.locator('.title h1')).toBeVisible()

        const container = await page.$('xpath=/html/body/main/div/div[2]/div[2]')
        expect(container).toBeTruthy()

        const tables = await container!.$$('table')
        return vehicleCrawlTableFeatures(tables)
    }

    export const vehicleGetManufacturingYears = (techs: Tech[]) => {
        let general = techs.find(opt => opt.title === 'GENERAL')

        let startYear = null
        let endYear = null

        const introduction = general?.features['Introduction']
        const end = general?.features['End']

        if (introduction) {
            startYear = parseInt(introduction.replace(/([A-z])\w+/g, '').trim())
        }

        if (end) {
            endYear = parseInt(end.replace(/([A-z])\w+/g, '').trim())
        }

        return {
            startYear,
            endYear
        }
    }

    /**
     * Download cars images
     */
    export const vehicleCrawlCarImages = async (): Promise<void> => {
        if (!fs.existsSync(VEHICLE_DOWNLOADED_IMAGES_DIR)) {
            fs.mkdirSync(VEHICLE_DOWNLOADED_IMAGES_DIR, { recursive: true })
        }

        const vehileFolder = CarsDataCrawler.VEHICLE_PARSED_DATA_DIR

        fs.readdir(vehileFolder, async (err, files) => {
            const downloadedCollections: string[] = JSON.parse(await FileUtils.safeReadFile(CarsDataCrawler.VEHICLE_DOWNLOADED_IMAGES_COLLECTION_PATH, '[]'))
            const downloadedImages: string[] = JSON.parse(await FileUtils.safeReadFile(CarsDataCrawler.VEHICLE_DOWNLOADED_IMAGES_PATH, '[]'))

            for (const filename of files) {
                const file = path.join(vehileFolder, filename)
                if (downloadedCollections.includes(file)) {
                    Logger.warn('[SKIP]', file)
                    continue
                }

                const failedImages: string[] = []

                Logger.info('============', file, '============')

                const vehicles = JSON.parse(fs.readFileSync(file, 'utf8'))

                for (const vehicle of vehicles) {
                    const imageUrls: string[] = vehicle.images || []

                    for (const url of imageUrls) {
                        if (downloadedImages.includes(url)) {
                            Logger.warn('[SKIP]', url)
                            continue
                        }

                        const filename = _.last(url.split('/'))
                        const localFilePath = CarsDataCrawler.vehicleGetLocalImagePath(filename!)
                        await Timer.wait(3)
                        const success = await Http.downloadImage(url, localFilePath)

                        if (success) {
                            Logger.success('[DOWNLOADED]', url)
                            downloadedImages.push(url)
                            if (failedImages.includes(url)) {
                                failedImages.splice(failedImages.indexOf(url), 1)
                            }
                        } else {
                            Logger.error('[ERROR]', url)
                            failedImages.push(url)
                        }

                        FileUtils.overwrite(CarsDataCrawler.VEHICLE_DOWNLOADED_IMAGES_FAILED_PATH, JSON.stringify(failedImages))
                        FileUtils.overwrite(CarsDataCrawler.VEHICLE_DOWNLOADED_IMAGES_PATH, JSON.stringify(downloadedImages))
                    }
                }

                if (!failedImages.length) {
                    downloadedCollections.push(file)
                    FileUtils.overwrite(CarsDataCrawler.VEHICLE_DOWNLOADED_IMAGES_COLLECTION_PATH, JSON.stringify(downloadedCollections))
                }
            }
        });
    }

    /**
     * Brand logos
     */
    export const BRAND_BASE_DIR = path.join(BASE_DIR, 'brands')
    export const BRAND_DATA_PATH = path.join(BRAND_BASE_DIR, 'brands.json')
    export const BRAND_IMAGES_DIR = path.join(BRAND_BASE_DIR, 'images')

    export const brandGetListUrl = (): string => {
        return `${BASE_URL}/en/car-brands-cars-logos.html`
    }

    export const brandCrawlAll = async (browser: Browser): Promise<void> => {
        if (!fs.existsSync(BRAND_IMAGES_DIR)) {
            fs.mkdirSync(BRAND_IMAGES_DIR, { recursive: true })
        }
        
        const url = brandGetListUrl()
        const page = await CrawlerController.getNewPage(browser)
        await goto(page, url)

        await expect(page.locator('.title h1')).toBeVisible()
        const brandElements = await page.$$('.models a')

        const brands: any[] = []
        if (brandElements.length) {
            for (const element of brandElements) {
                const brandName = await element.getAttribute('title')
                const brandUrl = await element.getAttribute('href')
                const imageSrc = await element.$('img').then(img => img?.getAttribute('src'))
                const filename = FileUtils.getFileName(imageSrc!)!

                Timer.wait(1)
                await Http.downloadImage(imageSrc!, path.join(BRAND_IMAGES_DIR, filename))
                
                Logger.success('[DOWNLOADED]', brandName, imageSrc)
                brands.push({
                    name: brandName,
                    image: filename,
                    url: brandUrl
                })
            }
            FileUtils.overwrite(BRAND_DATA_PATH, JSON.stringify(brands))
        }

        await page.close()
        Logger.success('DONE!!!!!!')
    }

    /**
     * Base Model
     */
    export const BASE_MODEL_BASE_DIR = path.join(BASE_DIR, 'base_models')
    export const BASE_MODEL_PARSED_URL_PATH = path.join(BASE_MODEL_BASE_DIR, 'parsed_urls.json')
    export const BASE_MODEL_DATA_PATH = path.join(BASE_MODEL_BASE_DIR, 'base_models.json')
    export const BASE_MODEL_IMAGES_DIR = path.join(BASE_MODEL_BASE_DIR, 'images')

    const baseModelCrawlVehiclesInSubModelPage = async (browser: Browser, subModelUrl: string): Promise<{ baseModelName: any, models: any[] }> => {
        const page = await CrawlerController.getNewPage(browser)
        await goto(page, subModelUrl)

        const baseModelName = (await page.locator('.title h1').textContent())?.replace('specs', '').trim()

        const modelElements = await page.$$('.types .row a')
         
        const models: any = []

        for (const element of modelElements) {
            let modelName = await element.getAttribute('title')
            if (modelName?.length) {
                modelName = modelName.replace('specs', '').trim()
            }

            const modelUrl = await element.getAttribute('href')

            Logger.info('[FOUND]', modelName, modelUrl)

            models.push({
                modelName,
                modelUrl
            })
        }

        await page.close()

        return {
            baseModelName,
            models
        }
    }

    export const baseModelCrawlAll = async (browser: Browser): Promise<void> => {
        if (!fs.existsSync(BASE_MODEL_IMAGES_DIR)) {
            fs.mkdirSync(BASE_MODEL_IMAGES_DIR, { recursive: true })
        }

        const url = brandGetListUrl()
        const brandsPage = await CrawlerController.getNewPage(browser)
        await goto(brandsPage, url)

        await expect(brandsPage.locator('.title h1')).toBeVisible()
        const brandElements = await brandsPage.$$('.models a')

        Logger.info('[FOUND]', brandElements.length, 'brands')

        const parsedUrls: string[] = JSON.parse(await FileUtils.safeReadFile(BASE_MODEL_PARSED_URL_PATH, '[]'))
        const parsedBrands: any[] = JSON.parse(await FileUtils.safeReadFile(BASE_MODEL_DATA_PATH, '[]'))

        for (const element of brandElements) {
            const brandName = await element.getAttribute('title')
            const brandUrl = await element.getAttribute('href')

            const isExist = parsedBrands.find(item => item.brandName === brandName)

            if (!Boolean(isExist)) {
                parsedBrands.push({
                    brandName,
                    brandUrl
                })
            }
        }
        await brandsPage.close()

        // Process models
        for (let brandIndex = 0; brandIndex < parsedBrands.length; brandIndex++) {
            const brand = parsedBrands[brandIndex]
            Logger.info('=========', brand.brandName, '=========')
            Logger.info('[BRAND URL]', brand.brandUrl)

            if (parsedUrls.includes(brand.brandUrl)) {
                continue
            }

            // e.g: brandUrl - https://www.cars-data.com/en/bmw
            const baseModels: any[] = await baseModelCrawlSubBaseModels(browser, brand.brandName, brand.brandUrl)

            for (let modelIndex = 0; modelIndex < baseModels.length; modelIndex++) {
                const baseModel = baseModels[modelIndex]
                // e.g: modelUrl - https://www.cars-data.com/en/bmw/5-series
                
                Logger.info('[BASE MODEL URL]', baseModel.baseModelUrl)
                const initialSubBaseModels: any[] = await baseModelCrawlSubBaseModels(browser, brand.brandName, baseModel.baseModelUrl!)

                const subBaseModels: any[] = []

                for (let subModelIndex = 0; subModelIndex < initialSubBaseModels.length; subModelIndex++) {
                    const subBaseModel = initialSubBaseModels[subModelIndex]
                    // e.g: subModelUrl - https://www.cars-data.com/en/bmw-5-series-2020/4654
                    const subModelUrl = subBaseModel.baseModelUrl

                    Logger.info('[SUB BASE MODEL URL]', subModelUrl)

                    const subModelPage = await CrawlerController.getNewPage(browser)
                    await goto(subModelPage, subModelUrl)

                    // check if there are years element
                    const yearElements = await subModelPage.$$('.types .typesallyears')
                    if (yearElements.length) {
                        const yearUrls: string[] = []
                        for (const yearElement of yearElements) {
                            const yearUrl = await yearElement.getAttribute('href')
                            if (yearUrl) {
                                yearUrls.push(yearUrl)
                            }
                        }

                        await subModelPage.close()
                        const models = []
                        for (const yearUrl of yearUrls) {
                            const result = await baseModelCrawlVehiclesInSubModelPage(browser, yearUrl)
                            models.push(...result.models)
                        }

                        initialSubBaseModels[subModelIndex].models = models
                        subBaseModels.push(initialSubBaseModels[subModelIndex])

                    } else {
                        const result = await baseModelCrawlVehiclesInSubModelPage(browser, subModelUrl)
                        initialSubBaseModels[subModelIndex].models = result.models
                        subBaseModels.push(initialSubBaseModels)
                        await subModelPage.close()
                    }
                }

                baseModels[modelIndex].subBaseModels = subBaseModels
                Logger.success('[COMPLETE] BASE MODEL:', baseModel.baseModelName)
            }

            parsedUrls.push(brand.brandUrl)
            parsedBrands[brandIndex].baseModels = baseModels

            FileUtils.overwrite(BASE_MODEL_DATA_PATH, JSON.stringify(parsedBrands))
            FileUtils.overwrite(BASE_MODEL_PARSED_URL_PATH, JSON.stringify(parsedUrls))
            Logger.info('[COMPLETE] BRAND', brand.brandName)
        }

        FileUtils.overwrite(BASE_MODEL_DATA_PATH, JSON.stringify(parsedBrands))
        Logger.success('DONE!!!!!!')
    }

    export const baseModelCrawlSubBaseModels = async (browser: Browser, brandName: string, parentUrl: string) => {
        // go to brand models url
        const listPage = await CrawlerController.getNewPage(browser)
        await goto(listPage, parentUrl)

        await expect(listPage.locator('section.models .row.title h1')).toBeVisible()

        const baseModelElements = await listPage.$$('section.models a:not(.google-anno)')

        const baseModels: any[] = []
        for (const baseModel of baseModelElements) {
            const baseModelUrl = await baseModel.getAttribute('href')

            let baseModelName = await baseModel.textContent()
            let startYear = undefined
            let endYear = undefined

            if (baseModelName?.length) {
                const found = baseModelName.match(/[0-9]{4} - ([0-9]{4}|present)/)
                if (found?.length) {
                    const parts = found[0].split(' - ')
                    startYear = parts[0]
                    endYear = parts[1]
                }
                baseModelName = baseModelName.replace(/\s\s+/g, ' ').trim()
            }

            const baseModelImageUrl = await baseModel.$('picture img').then(ele => ele?.getAttribute('src'))
            
            if (baseModelImageUrl) {
                const exist = Boolean(baseModels.find(item => item.baseModelUrl === baseModelUrl)) || baseModelUrl === parentUrl
                if (!exist) {
                    baseModels.push({
                        brandName,
                        baseModelName,
                        baseModelUrl,
                        baseModelImageUrl: getOnlineImageUrlFromThumbUrl(baseModelImageUrl),
                        startYear,
                        endYear
                    })
                }
            }
        }

        await listPage.close()

        return baseModels
    }

    /**
     * Utilities
     */

    export const getOnlineImageUrlFromThumbUrl = (uri: string): string => {
        const parts = uri.split('/')
        return `${BASE_URL}${[...[parts[0], parts[1]], ...parts.slice(4)].join('/')}`
    }

    export const getThumbUrlFromOnlineImageUrl = (uri: string): string => {
        // https://www.cars-data.com/pictures/abarth/abarth-124-spider_3560_12.jpg
        // TO
        // https://www.cars-data.com/pictures/thumbs/350px/abarth/abarth-124-spider_3560_12.jpg
        const parts = uri.replace(BASE_URL, '').split('/')
        return `${BASE_URL}${[...[parts[0], parts[1], 'thumbs/350px'], ...parts.slice(2)].join('/')}`
    }

}