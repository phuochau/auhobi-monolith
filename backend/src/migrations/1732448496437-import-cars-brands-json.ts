import path from "path";
import fs from 'fs'
import { MigrationInterface, QueryRunner } from "typeorm";
import _ from "lodash";
import { VehicleBrand } from "../modules/vehicle/entities/vehicle-brand.entity";
import { CarDataBrand } from "./types/car-data-brand";
import { MigrationHelpers } from "./helpers/migration-helper";

const BASE_DIR = path.join(process.cwd(), '../tools/car-data-crawler/output/cars-data.com/brands')
const BRANDS_JSON = path.join(BASE_DIR, 'brands.json')
const BRANDS_IMAGES_DIR = path.join(BASE_DIR, 'images')

export class ImportCarsBrandsJson1732448496437 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const brands: CarDataBrand[] = JSON.parse(fs.readFileSync(BRANDS_JSON, 'utf-8'))
        
        for (const brand of brands) {
            const file = await MigrationHelpers.uploadFile(queryRunner, path.join(BRANDS_IMAGES_DIR, brand.image), 'car-data/brands')
            await this.getOrCreateBrand(queryRunner, brand.name, file.url)
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // impossible to go back now
    }

    private async getOrCreateBrand(queryRunner: QueryRunner, brandName: string, brandLogo: string): Promise<VehicleBrand> {
        const repo = queryRunner.manager.getRepository<VehicleBrand>(VehicleBrand)
        let brand = await repo.findOneBy({ name: brandName })
        if (!brand) {
            brand = await repo.insert({ name: brandName, logo: brandLogo }).then(item => _.get(item, 'raw[0]'))
        }
        return brand
    }
}
