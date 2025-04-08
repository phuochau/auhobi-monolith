import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiKey } from '../entities/api-key.entity';

@Injectable()
export class ApiKeyService {
  constructor(
    @InjectRepository(ApiKey) private repo: Repository<ApiKey>
  ) {}

  async findValidKey(key: string, secret: string): Promise<ApiKey | undefined> {
    return this.repo.findOneBy({ key, secret, expired: false })
  }
}
