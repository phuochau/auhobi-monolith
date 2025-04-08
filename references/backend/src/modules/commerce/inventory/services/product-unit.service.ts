import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import _ from 'lodash';
import { ProductType } from '../entities/product-type.entity';
import { ProductUnit } from '../entities/product-unit.entity';

@Injectable()
export class ProductUnitService {
    constructor(@InjectRepository(ProductUnit) private readonly repo: Repository<ProductUnit>) {
    }

    findBySkuOrName(sku: string, name?: string): Promise<ProductUnit> {
        if (sku) {
            return this.findBySku(sku)
        }

        return this.repo.findOneBy({ name })
    }

    findByName(name: string): Promise<ProductUnit> {
        return this.repo.findOneBy({ name })
    }

    findBySku(sku: string): Promise<ProductUnit> {
        return this.repo.findOneBy({ sku })
    }

    createOne(data: Partial<ProductUnit>): Promise<ProductUnit> {
        const order = this.repo.create(data)
        return this.repo.save(order)
    }
}
