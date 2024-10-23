import axios from 'axios'
import fs from 'fs'
import { CarsDataCrawler } from '../lib/cars-data.crawler';

function run() {
    fs.readdir(CarsDataCrawler.getLocalVehiclesFolder(), (err, files) => {
        for (const file of files) {
            console.log('\x1b[35m', '============', file ,'============','\x1b[0m')
            const vehicles = JSON.parse(fs.readFileSync(file, 'utf8'))

            for (const vehicle of vehicles) {
                const images: string[] = vehicle.images || []
                axios.get
            }
        }
    });
}

run()