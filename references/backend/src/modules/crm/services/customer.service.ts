import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from '../entities/customer.entity';
import _ from 'lodash';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer) private readonly repo: Repository<Customer>
  ) {}

  async createOne(data: Partial<Customer>): Promise<Customer> {
    const customer = this.repo.create(data)
    return this.repo.save(customer)
  }

  async createOrUpdateOne(data: Partial<Customer>): Promise<Customer> {
    return this.repo.upsert(data, ['phone']).then(res => _.get(res, 'raw[0]'))
  }
}
