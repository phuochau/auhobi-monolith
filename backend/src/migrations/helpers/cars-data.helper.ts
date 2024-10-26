import { CarDataVehicle, Tech } from "../types/car-data-vehicle";

export namespace CarsDataHelper {
    export const getTechGeneralSection = (vehicle: CarDataVehicle): Tech => {
        return vehicle.tech.find(item => item.title === 'GENERAL')
    }

    export const getTechDriveSection = (vehicle: CarDataVehicle): Tech => {
        return vehicle.tech.find(item => item.title === 'DRIVE')
    }
}