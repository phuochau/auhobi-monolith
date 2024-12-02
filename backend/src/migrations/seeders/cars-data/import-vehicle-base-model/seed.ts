import path from "path";
import { DataSource, QueryRunner } from "typeorm";
import fs from 'fs'
import { CarDataBaseModel } from "../../../types/car-data-base-model";
import { VehicleBaseModel } from "../../../../modules/vehicle/entities/vehicle-base-model.entity";
import { VehicleBrand } from "../../../../modules/vehicle/entities/vehicle-brand.entity";
import _ from "lodash";
import { VehicleModel } from "../../../../modules/vehicle/entities/vehicle-model.entity";
import { Seeder } from "@jorgebodega/typeorm-seeding";
import { CarsDataHelper } from "../../../helpers/cars-data.helper";


const BASE_DIR = path.join(process.cwd(), '../tools/car-data-crawler/output/cars-data.com/base_models')
const BASE_MODELS_JSON = path.join(BASE_DIR, 'base_models.json')
const BASE_MODELS_IMAGES_DIR = path.join(BASE_DIR, 'images')
const REMOTE_IMAGES_SUBFOLDER = 'car-data/base-models'

export default class ImportVehicleBaseModels extends Seeder {
    async run(dataSource: DataSource): Promise<void> {
        const queryRunner = dataSource.createQueryRunner()
        const brands: any[] = JSON.parse(fs.readFileSync(BASE_MODELS_JSON, 'utf-8'))

        for (const brand of brands) {
            const baseModels: CarDataBaseModel[] = brand.baseModels
            for (const baseModel of baseModels) {
                const brand = await this.getBrand(queryRunner, baseModel.brandName)
                const baseModelEntity = await this.getOrCreateBaseModel(queryRunner, baseModel.baseModelUrl, baseModel.baseModelName, brand.id, CarsDataHelper.getThumbUrlFromOnlineImageUrl(baseModel.baseModelImageUrl))
                console.log('Imported base model:', baseModel.baseModelName, baseModel.baseModelUrl)
    
                if (baseModel.subBaseModels?.length) {
                    for (const subBaseModel of baseModel.subBaseModels) {
                        const subBaseModelEntity = await this.getOrCreateBaseModel(queryRunner, subBaseModel.baseModelUrl, subBaseModel.baseModelName, brand.id, CarsDataHelper.getThumbUrlFromOnlineImageUrl(subBaseModel.baseModelImageUrl), baseModelEntity.id)
                        console.log('Imported sub base model:', subBaseModel.baseModelName, baseModel.baseModelUrl)

                        if (subBaseModel.models?.length) {
                            for (const model of subBaseModel.models) {
                                console.log('Model url:', model.modelUrl, model)
                                const modelEntity = await this.getVehicleModel(queryRunner, model.modelUrl)
                                if (!modelEntity) {
                                    continue
                                }
                                modelEntity.baseModel = subBaseModelEntity
                                await modelEntity.save()
                            }
                        }
                    }
                }
            }
        }
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

    private async getVehicleModel(queryRunner: QueryRunner, refId: string): Promise<VehicleModel> {
        const repo = queryRunner.manager.getRepository<VehicleModel>(VehicleModel)
        return repo.findOneBy({ refId: refId })
    }

}
