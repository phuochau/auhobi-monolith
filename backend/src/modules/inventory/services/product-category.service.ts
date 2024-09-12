import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import _ from 'lodash';
import { ProductCategory } from '../entities/product-category.entity';

@Injectable()
export class ProductCategoryService {
    constructor(@InjectRepository(ProductCategory) private readonly repo: Repository<ProductCategory>) {
    }

    findBySkuOrName(sku: string, name?: string): Promise<ProductCategory> {
        if (sku) {
            return this.findBySku(sku)
        }

        return this.repo.findOneBy({ name })
    }

    findByName(name: string): Promise<ProductCategory> {
        return this.repo.findOneBy({ name })
    }

    findBySku(sku: string): Promise<ProductCategory> {
        return this.repo.findOneBy({ sku })
    }

    createOne(data: Partial<ProductCategory>): Promise<ProductCategory> {
        const order = this.repo.create(data)
        return this.repo.save(order)
    }
}
