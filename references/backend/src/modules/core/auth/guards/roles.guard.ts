import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../entities/decorators/roles.decorator';
import { Account } from '../entities/account.entity';
import { AccountRole } from '../entities/enums/account-role.enum';
import { getContextRequest } from '../../graphql/helpers/getContextRequest';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles: number[] = this.reflector.getAllAndOverride<number[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }

    const req = getContextRequest(context)
    const account = req?.user as Account
    if (account) {
      if (account.role === AccountRole.SUPERADMIN) {
        return true
      }
      return requiredRoles.includes(account.role)
    }

    return false
  }
}