import { Injectable } from '@nestjs/common';
import { Order } from '../entities/order.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderProduct } from '../entities/order-product.entity';
import _ from 'lodash';

@Injectable()
export class OrderService {
    constructor(@InjectRepository(Order) private readonly repo: Repository<Order>) {
    }

    softCreateOne(data: Partial<Order>): Order {
        return this.repo.create(data)
    }

    saveOrder(order: Order): Promise<Order> {
        return this.repo.save(order)
    }

    createOne(data: Partial<Order>): Promise<Order> {
        const order = this.repo.create(data)
        return this.repo.save(order)
    }
}
