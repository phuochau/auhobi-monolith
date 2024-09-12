import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { getContextAccount } from '../../../graphql/helpers/getContextAccount';

export const CurrentAccount = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    return getContextAccount(context)
  },
);