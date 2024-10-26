import { CarDataVehicle } from "../types/car-data-vehicle";

export namespace CarsDataHelper {
    export const getDrive = (vehicle: CarDataVehicle): string => {
        const tech = vehicle.tech.find(item => item.title === 'DRIVE')
        return tech.features["Drive Wheel"]
    }
}