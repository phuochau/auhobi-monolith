import path from "path";
import fs from 'fs'
import { DataSource, QueryRunner } from "typeorm";
import _ from "lodash";
import { VehicleBrand } from "../../../../modules/vehicle/entities/vehicle-brand.entity";
import { CarDataBrand } from "../../../types/car-data-brand";
import { MigrationHelpers } from "../../../helpers/migration-helper";
import { Seeder } from '@jorgebodega/typeorm-seeding'

const BASE_DIR = path.join(process.cwd(), '../tools/car-data-crawler/output/cars-data.com/brands')
const BRANDS_JSON = path.join(BASE_DIR, 'brands.json')
const BRANDS_IMAGES_DIR = path.join(BASE_DIR, 'images')

export default class ImportBrandsSeeder extends Seeder {
    async run(dataSource: DataSource): Promise<void> {
        const queryRunner = dataSource.createQueryRunner()
        const brands: CarDataBrand[] = JSON.parse(fs.readFileSync(BRANDS_JSON, 'utf-8'))
        
        for (const brand of brands) {
            const file = await MigrationHelpers.uploadFile(queryRunner, path.join(BRANDS_IMAGES_DIR, brand.image), 'car-data/brands', _.snakeCase(brand.name))
            await this.getOrCreateBrand(queryRunner, brand.url, brand.name, file.url)
            console.log(`\nImported brand ${brand.name}.`)
        }
    }

    private async getOrCreateBrand(queryRunner: QueryRunner, refId: string, brandName: string, brandLogo: string): Promise<VehicleBrand> {
        const repo = queryRunner.manager.getRepository<VehicleBrand>(VehicleBrand)
        let brand = await repo.findOneBy({ name: brandName })
        if (!brand) {
            brand = await repo.insert({ refId: refId, name: brandName, logo: brandLogo }).then(item => _.get(item, 'raw[0]'))
        }
        return brand
    }
}
