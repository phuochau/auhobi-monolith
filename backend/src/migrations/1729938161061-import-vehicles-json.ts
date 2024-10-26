import { MigrationInterface, QueryRunner } from "typeorm";
import fs from 'fs'
import path from 'path';
import _ from "lodash";
import { CarDataVehicle } from "./types/car-data-vehicle";
import { CarsDataHelper } from "./helpers/cars-data.helper";
import { VehicleBrand } from "../modules/vehicle/entities/vehicle-brand.entity";
import { VehicleModel } from "../modules/vehicle/entities/vehicle-model.entity";
import { VehicleBody } from "../modules/vehicle/entities/vehicle-body.entity";

const BASE_DIR = path.join(process.cwd(), '../tools/car-data-crawler/output/cars-data.com')
const VEHICLES_DIR = path.join(BASE_DIR, 'vehicles')

export class ImportVehiclesJson1729938161061 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const files = fs.readdirSync(VEHICLES_DIR)

        for (const file of files) {
            const filepath = path.join(VEHICLES_DIR, file)
            let vehicles: CarDataVehicle[] = JSON.parse(fs.readFileSync(filepath, 'utf-8'))

            for (let vehicle of vehicles) {
                const inRef = vehicle.ref
                const inBrand = vehicle.brandName
                const inBody = CarsDataHelper.getTechGeneralSection(vehicle).features['Body Type']
                const inModel = vehicle.name
                const inStartYear = vehicle.startYear
                const inEndYear = vehicle.endYear
                const inDrive = CarsDataHelper.getTechDriveSection(vehicle).features['Drive Wheel']
                const inEngine = CarsDataHelper.getTechDriveSection(vehicle).features['Engine/motor Type']
                const inFuel = CarsDataHelper.getTechDriveSection(vehicle).features['Fuel Type']
                const inTransmission = CarsDataHelper.getTechGeneralSection(vehicle).features['Transmission']
                const inMaxPower = CarsDataHelper.getTechDriveSection(vehicle).features['Power']
                const inMaxTorque = CarsDataHelper.getTechDriveSection(vehicle).features['Max Torque']
    
                const brand = await this.getOrCreateBrand(queryRunner, inBrand)
                const body = await this.getOrCreateBody(queryRunner, inBody)
                const model = await this.getOrCreateModel(
                    queryRunner,
                    inRef,
                    inModel,
                    brand.id,
                    inStartYear,
                    inEndYear,
                    body.id,
                    inEngine,
                    inFuel,
                    inDrive,
                    inTransmission,
                    inMaxPower,
                    inMaxTorque
                )
    
                console.log(`Imported model ${inBrand} ${inModel}.`)
            }
    
            console.log('Imported file:', filepath)
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        //  impossible to go back for now
    }

    private async getOrCreateBrand(queryRunner: QueryRunner, brandName: string): Promise<VehicleBrand> {
        const repo = queryRunner.manager.getRepository<VehicleBrand>(VehicleBrand)
        let brand = await repo.findOneBy({ name: brandName })
        if (!brand) {
            brand = await repo.insert({ name: brandName }).then(item => _.get(item, 'raw[0]'))
        }
        return brand
    }

    private async getOrCreateBody(queryRunner: QueryRunner, bodyName: string): Promise<VehicleBody> {
        const repo = queryRunner.manager.getRepository<VehicleBody>(VehicleBody)
        let body = await repo.findOneBy({ name: bodyName })
        if (!body) {
            body = await repo.insert({ name: bodyName }).then(item => _.get(item, 'raw[0]'))
        }
        return body
    }

    private async getOrCreateModel(
        queryRunner: QueryRunner,
        refId: string,
        name: string,
        brandId: string,
        startYear: number,
        endYear: number,
        bodyId: string,
        engine: string,
        fuel: string,
        drive: string,
        transmission: string,
        maxPower: string,
        maxTorque: string
    ): Promise<VehicleModel> {
        const repo = queryRunner.manager.getRepository<VehicleModel>(VehicleModel)
        let model = await repo.findOneBy({ refId: refId })
        if (!model) {
            model = await repo.insert({
                refId,
                name,
                startYear,
                endYear,
                brand: { id: brandId },
                body: { id: bodyId },
                engineType: engine,
                fuelType: fuel,
                drive,
                transmission,
                maxPower,
                maxTorque
            }).then(item => _.get(item, 'raw[0]'))
        }
        return model
    }

}
