import { DataSource, MigrationInterface, QueryRunner } from "typeorm";
import fs from 'fs'
import path from 'path';
import _ from "lodash";
import { CarDataVehicle } from "../../../types/car-data-vehicle";
import { CarsDataHelper } from "../../../helpers/cars-data.helper";
import { VehicleBrand } from "../../../../modules/vehicle/entities/vehicle-brand.entity";
import { VehicleModel } from "../../../../modules/vehicle/entities/vehicle-model.entity";
import { VehicleBody } from "../../../../modules/vehicle/entities/vehicle-body.entity";
import { Seeder } from "@jorgebodega/typeorm-seeding";

const BASE_DIR = path.join(process.cwd(), '../tools/car-data-crawler/output/cars-data.com/vehicles')
const JSON_DIR = path.join(BASE_DIR, 'json')

export default class ImportVehicles extends Seeder {
    async run(dataSource: DataSource): Promise<void> {
        const queryRunner = dataSource.createQueryRunner()

        const files = fs.readdirSync(JSON_DIR)

        for (const file of files) {
            const filepath = path.join(JSON_DIR, file)
            let vehicles: CarDataVehicle[] = JSON.parse(fs.readFileSync(filepath, 'utf-8'))

            for (let vehicle of vehicles) {
                const inRef = vehicle.ref
                const inBrand = vehicle.brandName
                const inBody = CarsDataHelper.getTechGeneralSection(vehicle)?.features['Body Type']
                const inModel = vehicle.name
                const inStartYear = vehicle.startYear
                const inEndYear = vehicle.endYear
                const inDrive = CarsDataHelper.getTechDriveSection(vehicle)?.features['Drive Wheel']
                const inEngine = CarsDataHelper.getTechDriveSection(vehicle)?.features['Engine/motor Type']
                const inFuel = CarsDataHelper.getTechDriveSection(vehicle)?.features['Fuel Type']
                const inTransmission = CarsDataHelper.getTechGeneralSection(vehicle)?.features['Transmission']
                const inMaxPower = CarsDataHelper.getTechDriveSection(vehicle)?.features['Power']
                const inMaxTorque = CarsDataHelper.getTechDriveSection(vehicle)?.features['Max Torque']
    
                const brand = await this.getOrCreateBrand(queryRunner, inBrand)
                const body = await this.getOrCreateBody(queryRunner, inBody)

                if (!brand.startYear || (inStartYear < brand.startYear)) {
                    brand.startYear = inStartYear
                }
                if (!brand.endYear || (inEndYear > brand.endYear)) {
                    brand.endYear = inEndYear
                }
                const brandRepo = queryRunner.manager.getRepository<VehicleBrand>(VehicleBrand)
                await brandRepo.save(brand)

                await this.getOrCreateModel(
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
                    inMaxTorque,
                    vehicle.images.map(item => CarsDataHelper.getThumbUrlFromOnlineImageUrl(item))
                )
                console.log(`\nImported car ${inBrand} ${inModel}.`)
            }
    
            console.log('\nImported file:', filepath)
        }
    }

    private async getOrCreateBrand(queryRunner: QueryRunner, brandName: string): Promise<VehicleBrand> {
        const repo = queryRunner.manager.getRepository<VehicleBrand>(VehicleBrand)
        let brand = await repo.findOneBy({ name: brandName })
        if (!brand) {
            brand = await repo.insert({ name: brandName }).then(item => _.get(item, 'raw[0]'))
            brand = await repo.findOneBy({ id: brand.id })
        }
        return brand
    }

    private async getOrCreateBody(queryRunner: QueryRunner, bodyName: string): Promise<VehicleBody> {
        const repo = queryRunner.manager.getRepository<VehicleBody>(VehicleBody)
        let body = await repo.findOneBy({ name: bodyName })
        if (!body) {
            body = await repo.insert({ name: bodyName }).then(item => _.get(item, 'raw[0]'))
            body = await repo.findOneBy({ id: body.id })
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
        maxTorque: string,
        images?: string[],
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
                maxTorque,
                images: images || []
            }).then(item => _.get(item, 'raw[0]'))
            model = await repo.findOneBy({ id: model.id })
        }
        return model
    }

}
