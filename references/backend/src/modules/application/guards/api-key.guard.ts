import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { parseContext } from 'src/modules/core/graphql/helpers/parseContext';

@Injectable()
export class ApiTokenGuard extends AuthGuard('custom') {
  override getRequest(context: ExecutionContext) {
    return parseContext(context)
  }
}
