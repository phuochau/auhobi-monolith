import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { parseContext } from '../../graphql/helpers/parseContext';

@Injectable()
export class GraphQLGuard extends AuthGuard('custom') {
  override getRequest(context: ExecutionContext) {
    return parseContext(context)
  }
}
