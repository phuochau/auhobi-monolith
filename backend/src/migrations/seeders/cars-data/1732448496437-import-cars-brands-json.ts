import path from "path";
import fs from 'fs'
import { DataSource, QueryRunner } from "typeorm";
import _ from "lodash";
import { VehicleBrand } from "../../../modules/vehicle/entities/vehicle-brand.entity";
import { CarDataBrand } from "../../types/car-data-brand";
import { MigrationHelpers } from "../../helpers/migration-helper";
import { Seeder } from '@jorgebodega/typeorm-seeding'

const BASE_DIR = path.join(process.cwd(), 'src/migrations/seeders/cars-data')
const BRANDS_JSON = path.join(BASE_DIR, 'brands.json')
const BRANDS_IMAGES_DIR = path.join(BASE_DIR, 'images')

export default class ImportCarsBrandsSeeder1732448496437 extends Seeder {
    async run(dataSource: DataSource): Promise<void> {
        const queryRunner = dataSource.createQueryRunner()
        const brands: CarDataBrand[] = JSON.parse(fs.readFileSync(BRANDS_JSON, 'utf-8'))
        
        for (const brand of brands) {
            const file = await MigrationHelpers.uploadFile(queryRunner, path.join(BRANDS_IMAGES_DIR, brand.image), 'car-data/brands')
            await this.getOrCreateBrand(queryRunner, brand.name, file.url)
        }
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
