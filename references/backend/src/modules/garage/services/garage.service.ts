import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Garage } from '../entities/garage.entity';
import { GarageStatus } from '../entities/enums/garage-status.enum';

@Injectable()
export class GarageService {
  constructor(
    @InjectRepository(Garage) private repo: Repository<Garage>
  ) {}
  
  async findActiveOneById(accId: string): Promise<Garage | undefined> {
    return this.repo.findOneBy({ id: accId, status: GarageStatus.ACTIVATED })
  }
}
