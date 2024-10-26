import { MigrationInterface, QueryRunner } from "typeorm";
import fs from 'fs'
import path from 'path';
import _ from "lodash";
import { VehicleBrand } from "../../modules/vehicle/entities/vehicle-brand.entity";
import { VehicleBaseModel } from "../../modules/vehicle/entities/vehicle-base-model.entity";
import { VehicleEngineFuel } from "../../modules/vehicle/entities/vehicle-engine-fuel.entity";
import { VehicleEngine } from "../../modules/vehicle/entities/vehicle-engine.entity";
import { VehicleDrive } from "../../modules/vehicle/entities/vehicle-drive.entity";
import { VehicleBody } from "../../modules/vehicle/entities/vehicle-body.entity";
import { VehicleTransmission } from "../../modules/vehicle/entities/vehicle-transmission.entity";
import { VehicleModel } from "../../modules/vehicle/entities/vehicle-model.entity";

const vehicleJsonPath = path.join(process.cwd(), 'src/migrations/data/all-vehicles-model.json')


export class ImportVehiclesJson1729904536528 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        /**
         * Info we need:
         * - Brand
         * - Model name
         * - Start year
         * - End year
         * - Base model (5 series)
         * - Size class (compact)
         * - Engine displayment (2.0, 3.0)
         * - cyclinder (4,6,8,10,12)
         * - Fuel type
         * - Transmission (4,6,8,9) (Automatic / Manual)
         * - drive (RWD, FWD, etc)
         * - 
         */
        let allVehicleModels: any[] = JSON.parse(fs.readFileSync(vehicleJsonPath, { encoding: 'utf-8' }))
        allVehicleModels = _.sortBy(allVehicleModels, ['make', 'baseModel', 'year', 'model'])

        for (let vehicle of allVehicleModels) {
            const inId = vehicle.id
            const inBrand = vehicle.make
            const inBaseModel = vehicle.basemodel
            const inModel = vehicle.model
            const inYear = vehicle.year
            const inDrive = vehicle.vclass
            const inSize = vehicle.vclass
            const inEngineId = vehicle.engid
            const inEngineName = _.get(vehicle, 'eng_dscr[0]')
            const inEngineCylinders =  vehicle.cyclinders
            const inEngineDisplacement = vehicle.displ
            const inEvMotor = vehicle.evmotor
            const inAtv = vehicle.atvtype
            const inTurbocharge = Boolean(vehicle.tcharger)
            const inSupercharger = Boolean(vehicle.scharger)

            const inFuelType = vehicle.fueltype
            const inFuelType1 = vehicle.fueltype1
            const inFuelType2 = vehicle.fueltype2
            const inFuel = [inFuelType, inFuelType1, inFuelType2].filter(item => !_.isNil(item)).join(', ')

            const inTransmission = vehicle.trany
            const inPhevblended = Boolean(vehicle.phevblended)

            const brand = await this.getOrCreateBrand(queryRunner, inBrand)
            const baseModel = await this.getOrCreateBaseModel(queryRunner, brand.id, inBaseModel)
            const drive = await this.getOrCreateDrive(queryRunner, inDrive)
            const size = await this.getOrCreateSize(queryRunner, inSize)
            const transmission = await this.getOrCreateTransmission(queryRunner, inTransmission)
            const engineFuel = await this.getOrCreateEngineFuel(queryRunner, inFuel)
            const engine = await this.getOrCreateEngine(
                queryRunner,
                inEngineId,
                inEngineName,
                engineFuel.id,
                inEngineCylinders,
                inEngineDisplacement,
                inEvMotor,
                inPhevblended,
                inAtv,
                inTurbocharge,
                inSupercharger
            )
            const model = await this.getOrCreateModel(queryRunner, inId, inModel, inYear, brand.id, baseModel.id, drive.id, engine.id, transmission.id, size.id)

            console.log(`Imported model ${brand.name} ${model.name}.`)
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const allVehicleModels: any[] = JSON.parse(fs.readFileSync(vehicleJsonPath, { encoding: 'utf-8' }))
        const repo = queryRunner.manager.getRepository<VehicleModel>(VehicleModel)
        for (let vehicle of allVehicleModels) {
            await repo.delete({ refId: vehicle.id })
        }
    }

    private async getOrCreateBrand(queryRunner: QueryRunner, brandName: string): Promise<VehicleBrand> {
        const repo = queryRunner.manager.getRepository<VehicleBrand>(VehicleBrand)
        let brand = await repo.findOneBy({ name: brandName })
        if (!brand) {
            brand = await repo.insert({ name: brandName }).then(item => _.get(item, 'raw[0]'))
        }
        return brand
    }

    private async getOrCreateBaseModel(queryRunner: QueryRunner, brandId: string, baseModelName: string): Promise<VehicleBaseModel> {
        const repo = queryRunner.manager.getRepository<VehicleBaseModel>(VehicleBaseModel)
        let baseModel = await repo.findOneBy({ name: baseModelName, brand: { id: brandId } })
        if (!baseModel) {
            baseModel = await repo.insert({ name: baseModelName, brand: { id: brandId } }).then(item => _.get(item, 'raw[0]'))
        }
        return baseModel
    }

    private async getOrCreateEngineFuel(queryRunner: QueryRunner, fuelName: string): Promise<VehicleEngineFuel> {
        const repo = queryRunner.manager.getRepository<VehicleEngineFuel>(VehicleEngineFuel)
        let fuel = await repo.findOneBy({ name: fuelName })
        if (!fuel) {
            fuel = await repo.insert({ name: fuelName }).then(item => _.get(item, 'raw[0]'))
        }
        return fuel
    }

    private async getOrCreateEngine(
        queryRunner: QueryRunner,
        refId: string,
        engineName: string,
        fuelId: string,
        cylinders: number,
        displacement: string,
        evMotor: string,
        phevBlended: boolean,
        atv: string,
        turbocharger: boolean,
        supercharger: boolean
    ): Promise<VehicleEngine> {
        const repo = queryRunner.manager.getRepository<VehicleEngine>(VehicleEngine)
        let engine = await repo.findOneBy({ refId: refId })
        if (!engine) {
            engine = await repo.insert({
                name: engineName,
                fuel: { id: fuelId },
                cylinders,
                displacement,
                evMotor,
                phevBlended,
                advancedTechnology: atv,
                turbocharger,
                supercharger
            }).then(item => _.get(item, 'raw[0]'))
        }
        return engine
    }

    private async getOrCreateDrive(queryRunner: QueryRunner, driveName: string): Promise<VehicleDrive> {
        const repo = queryRunner.manager.getRepository<VehicleDrive>(VehicleDrive)
        let drive = await repo.findOneBy({ name: driveName })
        if (!drive) {
            drive = await repo.insert({ name: driveName }).then(item => _.get(item, 'raw[0]'))
        }
        return drive
    }

    private async getOrCreateSize(queryRunner: QueryRunner, sizeName: string): Promise<VehicleBody> {
        const repo = queryRunner.manager.getRepository<VehicleBody>(VehicleBody)
        let size = await repo.findOneBy({ name: sizeName })
        if (!size) {
            size = await repo.insert({ name: sizeName }).then(item => _.get(item, 'raw[0]'))
        }
        return size
    }

    private async getOrCreateTransmission(queryRunner: QueryRunner, transmissionName: string): Promise<VehicleTransmission> {
        const repo = queryRunner.manager.getRepository<VehicleTransmission>(VehicleTransmission)
        let size = await repo.findOneBy({ name: transmissionName })
        if (!size) {
            size = await repo.insert({ name: transmissionName }).then(item => _.get(item, 'raw[0]'))
        }
        return size
    }

    private async getOrCreateModel(
        queryRunner: QueryRunner,
        refId: string,
        name: string,
        manufacturingYear: number,
        brandId: string,
        baseModelId: string,
        driveId: string,
        engineId: string,
        transmissionId: string,
        sizeId: string,
    ): Promise<VehicleModel> {
        const repo = queryRunner.manager.getRepository<VehicleModel>(VehicleModel)
        let model = await repo.findOneBy({ refId: refId })
        if (!model) {
            model = await repo.insert({
                refId,
                name,
                manufacturingYear,
                brand: { id: brandId },
                baseModel: { id: baseModelId },
                drive: { id: driveId },
                engine: { id: engineId },
                transmission: { id: transmissionId },
                size: { id: sizeId }
            }).then(item => _.get(item, 'raw[0]'))
        }
        return model
    }

}
