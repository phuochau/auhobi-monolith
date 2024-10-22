import { chromium } from "playwright-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import fs from 'fs';
import { XMLParser } from "fast-xml-parser";
import axios from 'axios';
import { Timer } from '../lib/timer';
import path from 'path';
import _ from 'lodash'
import chalk from 'chalk';
import { CarsDataCrawler } from '../lib/cars-data.crawler';

chromium.use(StealthPlugin());

const BASE_DIR = path.join(process.cwd(), 'output/cars-data.com')
const parsedTypeXMLPath = path.join(BASE_DIR, 'parsed_type_xml_urls.json')
const parsedVehicleUrlsPath = path.join(BASE_DIR, 'parsed_vehicle_urls.json')
const failedVehicleUrlsPath = path.join(BASE_DIR, 'failed_vehicles_urls.json')
const vehiclesPath = path.join(BASE_DIR, 'vehicles.json')

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

    const parsedVehicles: any[] = JSON.parse(await safeReadFile(vehiclesPath, '[]'))
    do {
        const xmlTypeUrl = CarsDataCrawler.getTypeXMLUrl(xmlIndex)
        if (parsedTypeXmlUrls.includes(xmlTypeUrl)) {
            chalk.yellow('[SKIP]', xmlTypeUrl)
            xmlIndex++
            continue
        }

        chalk.blue.underline(`==================== PARSING TYPE XML: ${xmlIndex} ====================`)

        await Timer.wait(2)
        vehicleUrls = await axios.get(xmlTypeUrl).then(res => res.data)

        if (vehicleUrls) {
            const items: any[] = _.get(xmlParser.parse(vehicleUrls), 'urlset.url', [])
            chalk.green(`Found ${items.length} vehicle urls`)

            for (const item of items) {
                try {
                    if (isURLExist(parsedVehicleUrls, item)) {
                        chalk.yellow('[SKIP]', item.loc)
                        continue
                    }
                    const vehicle = await CarsDataCrawler.crawlVehicle(browser, item.loc)
                    chalk.green('[SUCCESS]', item.loc)

                    parsedVehicles.push(vehicle)
                    parsedVehicleUrls.push({
                        loc: item.loc,
                        lastmod: item.lastmod
                    })

                } catch (err) {
                    chalk.red('[ERROR] Failed to parse:', item.loc, err)
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

            parsedTypeXmlUrls.push(xmlTypeUrl)
            fs.writeFileSync(parsedTypeXMLPath, JSON.stringify(parsedTypeXmlUrls), { encoding: 'utf8', flag: 'w' })

            xmlIndex++
        } else {
            chalk.yellow(`[EMPTY] urls at:`, xmlTypeUrl)
        }
    } while (vehicleUrls)
});