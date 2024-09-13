import { VehicleBody } from "../modules/vehicle/entities/vehicle-body.entity";
import { VehicleBrand } from "../modules/vehicle/entities/vehicle-brand.entity";
import { VehicleEngine } from "../modules/vehicle/entities/vehicle-engine.entity";
import { VehicleModelBody } from "../modules/vehicle/entities/vehicle-model-body.entity";
import { VehicleModel } from "../modules/vehicle/entities/vehicle-model.entity";
import { VehicleTransmission } from "../modules/vehicle/entities/vehicle-transmission.entity";
import { MigrationInterface, QueryRunner } from "typeorm";

export class SeedSampleVehicleModels1726219773503 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const bodyRepo = queryRunner.manager.getRepository<VehicleBody>(VehicleBody)
        const body = await bodyRepo.insert({ name: 'Sedan' })

        const brandRepo = queryRunner.manager.getRepository<VehicleBrand>(VehicleBrand)
        const brand = await brandRepo.insert({ name: 'BMW', startYear: 1916 })

        const engineRepo = queryRunner.manager.getRepository<VehicleEngine>(VehicleEngine)
        const engine = await engineRepo.insert({ name: 'BMW N20' })

        const transRepo = queryRunner.manager.getRepository<VehicleTransmission>(VehicleTransmission)
        const trans = await transRepo.insert({ name: 'ZF 8HP' })

        const vehicleModelRepo = queryRunner.manager.getRepository<VehicleModel>(VehicleModel)
        const vehicleModel = vehicleModelRepo.create({
            name: '520i (F10)',
            startYear: 2010,
            endYear: 2016
        })
        vehicleModel.brand = brand.raw[0]
        vehicleModel.engines = [engine.raw[0]]
        vehicleModel.transmissions = [trans.raw[0]]

        const vehicleModelBody = new VehicleModelBody()
        vehicleModelBody.body = body.raw[0]

        const model = await vehicleModelRepo.save(vehicleModel)

        // CLI
        const preLCI = vehicleModelRepo.create({
            name: '520i (F10) - Pre-LCI',
            startYear: 2010,
            endYear: 2013
        })
        preLCI.brand = brand.raw[0]
        preLCI.engines = [engine.raw[0]]
        preLCI.transmissions = [trans.raw[0]]
        preLCI.bodies = [vehicleModelBody]
        preLCI.parent = model
        await vehicleModelRepo.save(preLCI)

        // Lci
        const lci = vehicleModelRepo.create({
            name: '520i (F10) - LCI',
            startYear: 2014,
            endYear: 2016
        })
        lci.brand = brand.raw[0]
        lci.engines = [engine.raw[0]]
        lci.transmissions = [trans.raw[0]]
        lci.bodies = [vehicleModelBody]
        lci.parent = model
        await vehicleModelRepo.save(lci)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
