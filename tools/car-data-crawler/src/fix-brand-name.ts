import fs from 'fs'
import path from 'path'

function run() {
    const dirpath = path.join(process.cwd(), 'output', 'cars-data.com', 'vehicles')
    const files = fs.readdirSync(dirpath)

    for (const file of files) {
        const filepath = path.join(dirpath, file)
        let vehicles: any[] = JSON.parse(fs.readFileSync(filepath, 'utf-8'))
        
        vehicles = vehicles.map(item => {
            let brandName = ''

            if (item.name.includes('Abarth')) {
                brandName = 'Abarth'
            } else if (item.name.includes('Aiways')) {
                brandName = 'Aiways'
            } else if (item.name.includes('Alfa Romeo')) {
                brandName = 'Alfa Romeo'
            } else if (item.name.includes('Alpine')) {
                brandName = 'Alpine'
            } else if (item.name.includes('Asia Motors')) {
                brandName = 'Asia Motors'
            } else if (item.name.includes('Aston Martin')) {
                brandName = 'Aston Martin'
            } else if (item.name.includes('Audi')) {
                brandName = 'Audi'
            } else {
                brandName = item.name.split(' ')[0]
            }

            return {
                ...item,
                brandName
            }  
        })

        fs.writeFileSync(filepath, JSON.stringify(vehicles), { encoding: 'utf8', flag: 'w' })
    }
}

run()