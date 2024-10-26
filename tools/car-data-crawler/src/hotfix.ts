import fs from 'fs'
import path from 'path'
import { CarDataVehicle } from '../lib/models/car-data-vehicle'
import _ from 'lodash'

function fixBrandNames() {
    const dirpath = path.join(process.cwd(), 'output', 'cars-data.com', 'vehicles')
    const files = fs.readdirSync(dirpath)

    for (const file of files) {
        const filepath = path.join(dirpath, file)
        let vehicles: CarDataVehicle[] = JSON.parse(fs.readFileSync(filepath, 'utf-8'))
        
        vehicles = vehicles.map(item => {
            let priceHistory = item.options.find(opt => opt.title === 'NEW PRICE HISTORY')

            const features = priceHistory?.features || []
            const priceKeys: string[] = Object.keys(features).sort()

            const startYear = parseInt(_.first(priceKeys)!.replace(/([A-z])\w+/g, '').trim())
            const endYear = parseInt(_.last(priceKeys)!.replace(/([A-z])\w+/g, '').trim())


            return {
                ...item,
                startYear,
                endYear
            }
        })

        fs.writeFileSync(filepath, JSON.stringify(vehicles), { encoding: 'utf8', flag: 'w' })
    }
}

fixBrandNames()