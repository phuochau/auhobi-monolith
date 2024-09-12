import { PassportStrategy } from '@nestjs/passport'
import * as PassportCustom from 'passport-custom';
import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { ApiKeyService } from '../services/api-key.service';
import { ApiKey } from '../entities/api-key.entity';

const CustomStrategy = PassportCustom.Strategy;

@Injectable()
export class ApiKeyVerifierStrategy extends PassportStrategy(CustomStrategy) {
  constructor(private apiKeyService: ApiKeyService) {
    super();
  }

  async validate(req: any): Promise<ApiKey> {
    if (req.headers?.key?.length) {
      try {
        // key: abc
        // secret: abc
        const key = req.headers['key']
        const secret = req.headers['secret']
        return this.apiKeyService.findValidKey(key, secret)
      } catch (err) {
        throw new BadRequestException(err)
      }
    }
    throw new UnauthorizedException();
  }
}