import axios from 'axios'
import fs from 'fs'
import { CarsDataCrawler } from '../lib/cars-data.crawler';
import _ from 'lodash';
import { FileUtils } from '../lib/file-utils';
import path from 'path';
import { Timer } from '../lib/timer';

function run() {
   const vehileFolder = CarsDataCrawler.getLocalVehiclesFolder()
    fs.readdir(vehileFolder, async (err, files) => {
        const downloadedCollections: string[] = JSON.parse(await FileUtils.safeReadFile(CarsDataCrawler.DOWNLOADED_VEHICLE_IMAGES_COLLECTION_PATH, '[]'))
        const downloadedImages: string[] = JSON.parse(await FileUtils.safeReadFile(CarsDataCrawler.DOWNLOADED_VEHICLE_IMAGES_PATH, '[]'))
        const failedImages: string[] = JSON.parse(await FileUtils.safeReadFile(CarsDataCrawler.DOWNLOADED_VEHICLE_IMAGES_FAILED_PATH, '[]'))

        for (const filename of files) {
            const file = path.join(vehileFolder, filename)
            if (downloadedCollections.includes(file)) {
                console.log('\x1b[43m', '[SKIP]', file, '\x1b[0m')
                continue
            }

            console.log('\x1b[35m', '============', file ,'============','\x1b[0m')
            const vehicles = JSON.parse(fs.readFileSync(file, 'utf8'))

            for (const vehicle of vehicles) {
                const imageUrls: string[] = vehicle.images || []
                
                for (const url of imageUrls) {
                    if (downloadedImages.includes(url)) {
                        console.log('\x1b[43m', '[SKIP]', url, '\x1b[0m')
                        continue
                    }

                    const filename = _.last(url.split('/'))
                    const localFilePath = CarsDataCrawler.getLocalImagePath(filename!)
                    await Timer.wait(5)
                    const success = await CarsDataCrawler.downloadImage(url, localFilePath)

                    if (success) {
                        console.log('\x1b[32m', '[DOWNLOADED]', new Date().toString(), url, '\x1b[0m')
                        downloadedImages.push(url)
                        if (failedImages.includes(url)) {
                            failedImages.splice(failedImages.indexOf(url), 1)
                        }
                    } else {
                        console.log('\x1b[41m', '[ERROR]', url, '\x1b[0m')
                        failedImages.push(url)
                    }

                    FileUtils.overwrite(CarsDataCrawler.DOWNLOADED_VEHICLE_IMAGES_FAILED_PATH, JSON.stringify(failedImages))
                    FileUtils.overwrite(CarsDataCrawler.DOWNLOADED_VEHICLE_IMAGES_PATH, JSON.stringify(downloadedImages))
                }
            }

            downloadedCollections.push(file)
            FileUtils.overwrite(CarsDataCrawler.DOWNLOADED_VEHICLE_IMAGES_COLLECTION_PATH, JSON.stringify(downloadedCollections))
        }
    });
}

run()