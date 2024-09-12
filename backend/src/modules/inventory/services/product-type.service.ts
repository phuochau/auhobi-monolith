import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import _ from 'lodash';
import { ProductType } from '../entities/product-type.entity';

@Injectable()
export class ProductTypeService {
    constructor(@InjectRepository(ProductType) private readonly repo: Repository<ProductType>) {
    }

    findBySkuOrName(sku: string, name?: string): Promise<ProductType> {
        if (sku) {
            return this.findBySku(sku)
        }

        return this.repo.findOneBy({ name })
    }

    findByName(name: string): Promise<ProductType> {
        return this.repo.findOneBy({ name })
    }

    findBySku(sku: string): Promise<ProductType> {
        return this.repo.findOneBy({ sku })
    }

    createOne(data: Partial<ProductType>): Promise<ProductType> {
        const order = this.repo.create(data)
        return this.repo.save(order)
    }
}
