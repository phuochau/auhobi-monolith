import { chromium } from "playwright-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import { XMLParser } from "fast-xml-parser";
import axios from 'axios';
import { Timer } from '../lib/timer';
import _ from 'lodash'
import { CarsDataCrawler } from '../lib/cars-data.crawler';
import { FileUtils } from "../lib/file-utils";

chromium.use(StealthPlugin());

const isURLExist = (list: any[], url: any) => {
    const found = list.find(item => item.loc === url.loc)

    return found?.lastmod === url?.lastmod
}

chromium.launch({ headless: true }).then(async (browser) => {
    let vehicleUrls: any = null
    let xmlIndex = 0
    const xmlParser = new XMLParser();

    const parsedTypeXmlUrls: any[] = JSON.parse(await FileUtils.safeReadFile(CarsDataCrawler.PARSED_TYPE_XML_PATH, '[]'))
    const parsedVehicleUrls: any[] = JSON.parse(await FileUtils.safeReadFile(CarsDataCrawler.PARSED_VEHICLE_URLS_PATH, '[]'))
    do {
        const vehiclesPath = CarsDataCrawler.getLocalVehiclesPathAtTypeIndex(xmlIndex)
        const parsedVehicles: any[] = JSON.parse(await FileUtils.safeReadFile(vehiclesPath, '[]'))
        const xmlTypeUrl = CarsDataCrawler.getTypeXMLUrl(xmlIndex)

        if (parsedTypeXmlUrls.includes(xmlTypeUrl)) {
            console.log('[SKIP]', xmlTypeUrl)
            xmlIndex++
            vehicleUrls = true
            continue 
        }

        console.log('\x1b[35m', `==================== PARSING TYPE XML: ${xmlIndex} ====================`, '\x1b[0m')

        await Timer.wait(2)
        vehicleUrls = await axios.get(xmlTypeUrl).then(res => res.data)

        if (vehicleUrls) {
            const items: any[] = _.get(xmlParser.parse(vehicleUrls), 'urlset.url', [])
            console.log('\x1b[32m', `Found ${items.length} vehicle urls`, '\x1b[0m')

            let itemIndex = 0
            const failedVehicleUrls: any[] = []
            for (const item of items) {
                try {
                    if (isURLExist(parsedVehicleUrls, item)) {
                        console.log('\x1b[43m', '[SKIP]', `${itemIndex}`, item.loc, '\x1b[0m')
                        itemIndex++
                        continue
                    }
                    const vehicle = await CarsDataCrawler.crawlVehicle(browser, item.loc)
                    console.log('\x1b[32m', '[SUCCESS]', new Date().toString(), `${itemIndex}`, item.loc, '\x1b[0m')

                    parsedVehicles.push(vehicle)
                    parsedVehicleUrls.push({
                        loc: item.loc,
                        lastmod: item.lastmod
                    })

                    if (isURLExist(failedVehicleUrls, item)) {
                        failedVehicleUrls.splice(failedVehicleUrls.indexOf(item), 1)
                    }

                } catch (err) {
                    console.log('\x1b[41m', '[ERROR] Failed to parse:', item.loc, err, '\x1b[0m')
                    if (!isURLExist(failedVehicleUrls, item)) {
                        failedVehicleUrls.push({
                            loc: item.loc,
                            lastmod: item.lastmod
                        })
                    }
                }

                // Keep track at run-time
                FileUtils.overwrite(vehiclesPath, JSON.stringify(parsedVehicles))
                FileUtils.overwrite(CarsDataCrawler.PARSED_VEHICLE_URLS_PATH, JSON.stringify(parsedVehicleUrls))
                FileUtils.overwrite(CarsDataCrawler.FAILED_VEHICLE_URLS_PATH, JSON.stringify(failedVehicleUrls))

                itemIndex++
            }

            console.log('Waiting for next fetch......')

            if (!failedVehicleUrls.length) {
                parsedTypeXmlUrls.push(xmlTypeUrl)
                FileUtils.overwrite(CarsDataCrawler.PARSED_TYPE_XML_PATH, JSON.stringify(parsedTypeXmlUrls))
            }

            xmlIndex++
        } else {
            console.log('\x1b[43m', `[EMPTY] urls at:`, xmlTypeUrl, '\x1b[0m')
        }
    } while (vehicleUrls)

    browser.close()
});