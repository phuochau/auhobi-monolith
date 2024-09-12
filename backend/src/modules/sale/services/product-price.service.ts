import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductPrice } from '../entities/product-price.entity';
import _ from 'lodash';

@Injectable()
export class ProductPriceService {
    constructor(@InjectRepository(ProductPrice) private readonly repo: Repository<ProductPrice>) {
    }

    findById(id: string): Promise<ProductPrice> {
        return this.repo.findOneBy({ id })
    }

    async createOrUpdateOne(data: Partial<ProductPrice>): Promise<ProductPrice> {
      return this.repo.upsert(data, ['branchSaleChannel', 'product', 'price']).then(res => _.get(res, 'raw[0]'))
    }
}
  