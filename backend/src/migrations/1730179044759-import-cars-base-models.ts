import path from "path";
import { MigrationInterface, QueryRunner } from "typeorm";


const BASE_DIR = path.join(process.cwd(), '../tools/car-data-crawler/output/cars-data.com/base_models')
const BASE_MODELS_JSON = path.join(BASE_DIR, 'base_models.json')
const BASE_MODELS_IMAGES_DIR = path.join(BASE_DIR, 'images')

export class ImportCarsBaseModels1730179044759 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
