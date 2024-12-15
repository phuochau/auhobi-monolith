import { CarDataVehicle, Tech } from "../types/car-data-vehicle";

export namespace CarsDataHelper {
    export const BASE_URL = 'https://www.cars-data.com'
    
    export const getTechGeneralSection = (vehicle: CarDataVehicle): Tech => {
        return vehicle.tech.find(item => item.title === 'GENERAL')
    }

    export const getTechDriveSection = (vehicle: CarDataVehicle): Tech => {
        return vehicle.tech.find(item => item.title === 'DRIVE')
    }

    export const getThumbUrlFromOnlineImageUrl = (uri: string): string => {
        // https://www.cars-data.com/pictures/abarth/abarth-124-spider_3560_12.jpg
        // TO
        // https://www.cars-data.com/pictures/thumbs/350px/abarth/abarth-124-spider_3560_12.jpg
        if (!uri) {
            return undefined
        }
        const parts = uri.replace(BASE_URL, '').split('/')
        return `${BASE_URL}${[...[parts[0], parts[1], 'thumbs/350px'], ...parts.slice(2)].join('/')}`
    }
}