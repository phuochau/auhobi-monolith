import { chromium } from "playwright-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import fs from 'fs';
import { XMLParser } from "fast-xml-parser";
import axios from 'axios';
import { Timer } from '../lib/timer';
import path from 'path';
import _ from 'lodash'
import { CarsDataCrawler } from '../lib/cars-data.crawler';

chromium.use(StealthPlugin());

const BASE_DIR = path.join(process.cwd(), 'output/cars-data.com')
const parsedTypeXMLPath = path.join(BASE_DIR, 'parsed_type_xml_urls.json')
const parsedVehicleUrlsPath = path.join(BASE_DIR, 'parsed_vehicle_urls.json')
const failedVehicleUrlsPath = path.join(BASE_DIR, 'failed_vehicles_urls.json')

const isURLExist = (list: any[], url: any) => {
    const found = list.find(item => item.loc === url.loc)

    return found?.lastmod === url?.lastmod
}

const safeReadFile = (filepath: string, defaultValue: any): Promise<string> => {
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, { encoding: 'utf-8' }, (err, data) => {
            if (err) {
                return resolve(defaultValue)
            }

            resolve(data)
        })
    })
}


chromium.launch({ headless: true }).then(async (browser) => {
    let vehicleUrls: any = null
    let xmlIndex = 0
    const xmlParser = new XMLParser();

    const parsedTypeXmlUrls: any[] = JSON.parse(await safeReadFile(parsedTypeXMLPath, '[]'))
    const parsedVehicleUrls: any[] = JSON.parse(await safeReadFile(parsedVehicleUrlsPath, '[]'))
    const failedVehicleUrls: any[] = JSON.parse(await safeReadFile(failedVehicleUrlsPath, '[]'))
    do {
        const vehiclesPath = path.join(BASE_DIR, `vehicles${xmlIndex}.json`)
        const parsedVehicles: any[] = JSON.parse(await safeReadFile(vehiclesPath, '[]'))
        const xmlTypeUrl = CarsDataCrawler.getTypeXMLUrl(xmlIndex)

        if (parsedTypeXmlUrls.includes(xmlTypeUrl)) {
            console.log('[SKIP]', xmlTypeUrl)
            xmlIndex++
            continue
        }

        console.log('\x1b[35m', `==================== PARSING TYPE XML: ${xmlIndex} ====================`, '\x1b[0m')

        await Timer.wait(2)
        vehicleUrls = await axios.get(xmlTypeUrl).then(res => res.data)

        if (vehicleUrls) {
            const items: any[] = _.get(xmlParser.parse(vehicleUrls), 'urlset.url', [])
            console.log('\x1b[32m', `Found ${items.length} vehicle urls`, '\x1b[0m')

            for (const item of items) {
                try {
                    if (isURLExist(parsedVehicleUrls, item)) {
                        console.log('\x1b[43m', '[SKIP]', item.loc, '\x1b[0m')
                        continue
                    }
                    const vehicle = await CarsDataCrawler.crawlVehicle(browser, item.loc)
                    console.log('\x1b[32m', '[SUCCESS]', item.loc, '\x1b[0m')

                    parsedVehicles.push(vehicle)
                    parsedVehicleUrls.push({
                        loc: item.loc,
                        lastmod: item.lastmod
                    })

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
                fs.writeFileSync(vehiclesPath, JSON.stringify(parsedVehicles), { encoding: 'utf8', flag: 'w' })
                fs.writeFileSync(parsedVehicleUrlsPath, JSON.stringify(parsedVehicleUrls), { encoding: 'utf8', flag: 'w' })
                fs.writeFileSync(failedVehicleUrlsPath, JSON.stringify(failedVehicleUrls), { encoding: 'utf8', flag: 'w' })
            }

            console.log('Waiting for next fetch......')

            if (!failedVehicleUrls.length) {
                parsedTypeXmlUrls.push(xmlTypeUrl)
                fs.writeFileSync(parsedTypeXMLPath, JSON.stringify(parsedTypeXmlUrls), { encoding: 'utf8', flag: 'w' })
            }

            xmlIndex++
        } else {
            console.log('\x1b[43m', `[EMPTY] urls at:`, xmlTypeUrl, '\x1b[0m')
        }
    } while (vehicleUrls)

    browser.close()
});