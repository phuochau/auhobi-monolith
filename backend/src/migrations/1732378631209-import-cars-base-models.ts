import path from "path";
import { MigrationInterface, QueryRunner } from "typeorm";
import fs from 'fs'
import { CarDataBaseModel } from "./types/car-data-base-model";
import { MigrationHelpers } from "./helpers/migration-helper";
import { VehicleBaseModel } from "../modules/vehicle/entities/vehicle-base-model.entity";
import { VehicleBrand } from "../modules/vehicle/entities/vehicle-brand.entity";
import _ from "lodash";
import { VehicleModel } from "../modules/vehicle/entities/vehicle-model.entity";


const BASE_DIR = path.join(process.cwd(), '../tools/car-data-crawler/output/cars-data.com/base_models')
const BASE_MODELS_JSON = path.join(BASE_DIR, 'base_models.json')
const BASE_MODELS_IMAGES_DIR = path.join(BASE_DIR, 'images')
const REMOTE_IMAGES_SUBFOLDER = 'car-data/base-models'

export class ImportCarsBaseModels1732378631209 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const baseModels: CarDataBaseModel[] = JSON.parse(fs.readFileSync(BASE_MODELS_JSON, 'utf-8'))

        for (const baseModel of baseModels) {
            let file = await MigrationHelpers.uploadFile(queryRunner, path.join(BASE_MODELS_IMAGES_DIR, baseModel.baseModelImageUrl), REMOTE_IMAGES_SUBFOLDER)

            const brand = await this.getBrand(queryRunner, baseModel.brandName)
            const baseModelEntity = await this.getOrCreateBaseModel(queryRunner, baseModel.baseModelUrl, baseModel.baseModelName, brand.id, file.url)

            if (baseModel.subBaseModels?.length) {
                for (const subBaseModel of baseModel.subBaseModels) {
                    if (subBaseModel.baseModelImageUrl !== baseModel.baseModelImageUrl) {
                        file = await MigrationHelpers.uploadFile(queryRunner, path.join(BASE_MODELS_IMAGES_DIR, subBaseModel.baseModelImageUrl), REMOTE_IMAGES_SUBFOLDER)
                    }

                    const subBaseModelEntity = await this.getOrCreateBaseModel(queryRunner, baseModel.baseModelUrl, baseModel.baseModelName, brand.id, file.url, baseModelEntity.id)

                    if (subBaseModel.models?.length) {
                        for (const model of subBaseModel.models) {
                            const modelEntity = await this.getVehicleModel(queryRunner, model.modelName, model.modelUrl)
                            modelEntity.baseModel = subBaseModelEntity
                            await modelEntity.save()
                        }
                    }
                }
            }
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // impossible to go back now
    }

    private async getBrand(queryRunner: QueryRunner, brandName: string): Promise<VehicleBrand> {
        const repo = queryRunner.manager.getRepository<VehicleBrand>(VehicleBrand)
        return repo.findOneBy({ name: brandName })
    }

    private async getOrCreateBaseModel(queryRunner: QueryRunner, refId: string, name: string, brandId: string, image: string, parentId?: string): Promise<VehicleBaseModel> {
        const repo = queryRunner.manager.getRepository<VehicleBaseModel>(VehicleBaseModel)
        let item = await repo.findOneBy({ name: name, refId: refId })
        if (!item) {
            item = await repo.insert({
                refId: refId,
                name: name,
                brand: { id: brandId },
                image,
                parent: { id: parentId }
            }).then(item => _.get(item, 'raw[0]'))
        }
        return item
    }

    private async getVehicleModel(queryRunner: QueryRunner, modelName: string, refId: string): Promise<VehicleModel> {
        const repo = queryRunner.manager.getRepository<VehicleModel>(VehicleModel)
        return repo.findOneBy({ name: modelName, refId: refId })
    }

}
