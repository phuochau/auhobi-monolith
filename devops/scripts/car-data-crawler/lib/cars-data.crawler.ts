import { Timer } from "./timer"
import _ from "lodash"
import { ElementHandleForTag } from "playwright-core/types/structs"
import { Url } from "./url"
import { CrawlerController } from "./crawler-controller"
import { Browser, Page } from "playwright"
import { expect } from "playwright/test"
import { goto } from "./playwright"
import path from "path"
import fs from 'fs'
import axios from "axios"

const DELAY_FETCH_SECONDS = 3.5

export namespace CarsDataCrawler {
    export const BASE_URL = 'https://www.cars-data.com'
    
    export const BASE_DIR = path.join(process.cwd(), 'output/cars-data.com')
    export const PARSED_TYPE_XML_PATH = path.join(BASE_DIR, 'parsed_type_xml_urls.json')
    export const PARSED_VEHICLE_URLS_PATH = path.join(BASE_DIR, 'parsed_vehicle_urls.json')
    export const FAILED_VEHICLE_URLS_PATH = path.join(BASE_DIR, 'failed_vehicles_urls.json')

    export const DOWNLOADED_VEHICLE_IMAGES_COLLECTION_PATH = path.join(BASE_DIR, 'downloaded_vehicle_image_collection.json')
    export const DOWNLOADED_VEHICLE_IMAGES_PATH = path.join(BASE_DIR, 'downloaded_vehicle_image_urls.json')
    export const DOWNLOADED_VEHICLE_IMAGES_FAILED_PATH = path.join(BASE_DIR, 'downloaded_failed_vehicle_image_urls.json')

    export const getTypeXMLUrl = (index: number) => {
        return `${BASE_URL}/en/types-el-${index}.xml`
    }

    export const getLocalVehiclesFolder = () => {
        return path.join(BASE_DIR, 'vehicles')
    }

    export const getLocalVehiclesPathAtTypeIndex = (xmlIndex: number) => {
        return path.join(getLocalVehiclesFolder(), `vehicles${xmlIndex}.json`)
    }

    export const crawlVehicle = async (browser: Browser, url: string): Promise<any> => {
        const basicPage = await CrawlerController.getNewPage(browser)
        const basicInfo = await crawlBasicInfo(basicPage, url)
        basicPage.close()

        const techPage = await CrawlerController.getNewPage(browser)
        const tech = await CarsDataCrawler.crawlSeparateSpecs(techPage, Url.join(url, 'tech'))
        techPage.close()

        const optionsPage = await CrawlerController.getNewPage(browser)
        const options = await CarsDataCrawler.crawlSeparateSpecs(optionsPage, Url.join(url, 'options'))
        optionsPage.close()

        const sizesPage = await CrawlerController.getNewPage(browser)
        const sizes = await CarsDataCrawler.crawlSeparateSpecs(sizesPage, Url.join(url, 'sizes'))
        sizesPage.close()

        return {
            ...basicInfo,
            tech,
            options,
            sizes
        }
    }
    

    export const crawlBasicInfo = async (page: Page, url: string): Promise<any> => {
        await Timer.wait(DELAY_FETCH_SECONDS)
        await goto(page, url)

        await expect(page.locator('.title h1')).toBeVisible()
        const carName = (await page.locator('.title h1').textContent())?.trim()

        await expect(page.locator('.title h2')).toBeVisible()
        const carDescription = (await page.locator('.title h2').textContent())?.trim()

        const viewMoreImagesElement = page.getByText('View More images', { exact: true }).first()
        await expect(viewMoreImagesElement).toBeVisible()

        const imagesPage = await viewMoreImagesElement.getAttribute('href')
        expect(imagesPage).toBeTruthy()

        await Timer.wait(DELAY_FETCH_SECONDS)
        await goto(page, imagesPage!)

        const imageRows = await page.$$('.row.img100')

        let imageUrls = []
        for (let row of imageRows) {
            let urls = await Promise.all((await row.$$('img')).map(image => image.getAttribute('src')))
            urls = urls
                .filter(url => !_.isNil(url))
                .map(url => {
                    const parts = url.split('/')

                    return `${BASE_URL}${[...[parts[0], parts[1]], ...parts.slice(4)].join('/')}`
                })
            imageUrls.push(...urls)
        }

        imageUrls = _.uniq(imageUrls.sort())

        return {
            name: carName,
            description: carDescription,
            ref: url,
            images: imageUrls
        }
    }

    const crawlTableFeatures = async (tables: ElementHandleForTag<"table">[]) => {
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
                        const name = await cols[0].textContent()
                        const value = await cols[1].textContent()

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

    export const crawlSeparateSpecs = async (page: Page, url: string): Promise<any> => {
        await Timer.wait(DELAY_FETCH_SECONDS)
        await goto(page, url)

        await expect(page.locator('.title h1')).toBeVisible()

        const container = await page.$('xpath=/html/body/main/div/div[2]/div[2]')
        expect(container).toBeTruthy()

        const tables = await container!.$$('table')
        return crawlTableFeatures(tables)
    }

    export const getLocalImagePath = (filename: string) => {
        return path.join(path.join(CarsDataCrawler.BASE_DIR, 'images'), filename)
    }

    export const downloadImage = async (url: string, filepath: string): Promise<boolean> => {
        const response = await axios({
          url,
          method: 'GET',
          responseType: 'stream',
        })
        return new Promise((resolve) => {
          response.data
            .pipe(fs.createWriteStream(filepath))
            .on('error', (err: any) => {
                console.error(err)
                resolve(false)
            })
            .once('close', () => resolve(true))
        })
      }
}