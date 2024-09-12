import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../entities/product.entity';
import _ from 'lodash';

@Injectable()
export class ProductService {
    constructor(@InjectRepository(Product) private readonly repo: Repository<Product>) {
    }

    findBySkuOrName(sku: string, name?: string): Promise<Product> {
        if (sku) {
            return this.findBySku(sku)
        }

        return this.repo.findOneBy({ name })
    }

    findByName(name: string): Promise<Product> {
        return this.repo.findOneBy({ name })
    }

    findBySku(sku: string): Promise<Product> {
        return this.repo.findOneBy({ sku })
    }

    createOne(data: Partial<Product>): Promise<Product> {
        const order = this.repo.create(data)
        return this.repo.save(order)
    }

    updateOne(product: Product, data: Partial<Product>): Promise<Product> {
        return this.repo.update({ id: product.id }, data).then(result => _.get(result, 'raw[0]', product))
    }

    saveProduct(product: Product): Promise<Product> {
        return this.repo.save(product)
    }
}
