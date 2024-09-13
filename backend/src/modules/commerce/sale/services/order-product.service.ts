import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderProduct } from '../entities/order-product.entity';

@Injectable()
export class OrderProductService {
    constructor(@InjectRepository(OrderProduct) private readonly repo: Repository<OrderProduct>) {
    }

    softCreateOne(data: Partial<OrderProduct>): OrderProduct {
        return this.repo.create(data)
    }

    createOne(data: Partial<OrderProduct>): Promise<OrderProduct> {
        const order = this.repo.create(data)
        return this.repo.save(order)
    }
}
