import path from "path";
import fs from 'fs'
import { MigrationInterface, QueryRunner } from "typeorm";
import _ from "lodash";
import { VehicleBrand } from "../modules/vehicle/entities/vehicle-brand.entity";
import { MimeUtil } from "../lib/mime";
import { CloudinaryService } from "../modules/core/upload/services/cloudinary.service";
import { File } from "../modules/core/upload/entities/file.entity";
import { CloudinaryResponse } from "../modules/core/upload/types/cloudinary-response";

const BASE_DIR = path.join(process.cwd(), '../tools/car-data-crawler/output/cars-data.com/brands')
const BRANDS_JSON = path.join(BASE_DIR, 'brands.json')
const BRANDS_IMAGES_DIR = path.join(BASE_DIR, 'images')

export class ImportCarsBrandsJson1730171820945 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const cloudService = new CloudinaryService()
        const brands = JSON.parse(fs.readFileSync(BRANDS_JSON, 'utf-8'))
        
        
        for (const brand of brands) {
            const imagePath = path.join(BRANDS_IMAGES_DIR, brand.image)
            const buffer = fs.readFileSync(imagePath, null)
            const mimeType = await MimeUtil.getMimeType(imagePath)
            const response = await cloudService.uploadByBuffer(buffer, mimeType, 'car-data/brands')
            const file = await this.saveFile(queryRunner, mimeType, response)
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

    private async saveFile(queryRunner: QueryRunner, mimetype: string, response: CloudinaryResponse): Promise<File> {
        const repo = queryRunner.manager.getRepository<File>(File)
        return repo.insert({
            name: response.original_filename,
            mimetype,
            refId: response.public_id,
            url: response.url,
            secureUrl: response.secure_url
        }).then(item => _.get(item, 'raw[0]'))
    }

}
