import { PassportStrategy } from '@nestjs/passport'
import * as PassportCustom from 'passport-custom';
import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { ErrorCodes } from '../../../../config/error-codes';
import { AccountService } from '../services/account.service';
import { Account } from '../entities/account.entity';

const CustomStrategy = PassportCustom.Strategy;

@Injectable()
export class TokenVerifyStrategy extends PassportStrategy(CustomStrategy) {
  constructor(private authService: AuthService, private accountService: AccountService) {
    super();
  }

  async validate(req: any): Promise<Account> {
    if (req.headers?.authorization?.length) {
      try {
        const token = req.headers.authorization.replace('Bearer ', '')
        let account = await this.authService.verifyAccessToken(token)
        account = await this.accountService.findActiveAccountUserById(account.id)

        if (!account) {
          throw new NotFoundException(ErrorCodes.AUTH_ACCOUNT_NOT_FOUND)
        }
        
        return account
      } catch (err) {
        throw new ForbiddenException(ErrorCodes.AUTH_FORBIDDEN)
      }
    }
    throw new ForbiddenException(ErrorCodes.AUTH_FORBIDDEN);
  }
}