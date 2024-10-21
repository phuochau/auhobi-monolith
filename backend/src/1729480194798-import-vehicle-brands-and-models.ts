import { MigrationInterface, QueryRunner } from "typeorm";
import fs from 'fs'

export class ImportVehicleBrandsAndModels1729480194798 implements MigrationInterface {

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
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
