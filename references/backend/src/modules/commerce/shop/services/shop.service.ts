import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Shop } from '../entities/shop.entity';

@Injectable()
export class ShopService {
    constructor(@InjectRepository(Shop) private readonly repo: Repository<Shop>) {
    }
}
