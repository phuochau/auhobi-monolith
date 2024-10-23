import { Timer } from "./timer"
import _ from "lodash"
import { ElementHandleForTag } from "playwright-core/types/structs"
import { Url } from "./url"
import { CrawlerController } from "./crawler-controller"
import { Browser, Page } from "playwright"
import { expect } from "playwright/test"

const DELAY_FETCH_SECONDS = 5

export namespace CarsDataCrawler {
    export const BASE_URL = '`https://www.cars-data.com'

    export const getTypeXMLUrl = (index: number) => {
        return `https://www.cars-data.com/en/types-el-${index}.xml`
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
        await page.goto(url)

        await expect(page.locator('.title h1')).toBeVisible()
        const carName = (await page.locator('.title h1').textContent())?.trim()

        await expect(page.locator('.title h2')).toBeVisible()
        const carDescription = (await page.locator('.title h2').textContent())?.trim()

        const viewMoreImagesElement = page.getByText('View More images', { exact: true }).first()
        await expect(viewMoreImagesElement).toBeVisible()

        const imagesPage = await viewMoreImagesElement.getAttribute('href')
        expect(imagesPage).toBeTruthy()

        await Timer.wait(DELAY_FETCH_SECONDS)
        await page.goto(imagesPage!)

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
        await page.goto(url)

        await expect(page.locator('.title h1')).toBeVisible()

        const container = await page.$('xpath=/html/body/main/div/div[2]/div[2]')
        expect(container).toBeTruthy()

        const tables = await container!.$$('table')
        return crawlTableFeatures(tables)
    }
}