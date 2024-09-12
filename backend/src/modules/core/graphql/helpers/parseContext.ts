import { ExecutionContext } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import _ from "lodash";

export const parseContext = (context: ExecutionContext) => {
  const ctx = GqlExecutionContext.create(context);
  const gqlReq = ctx.getContext().req;
  if (gqlReq) {
    const query = ctx.getArgs();
    if (query?.variables || query?.input) {
      gqlReq.body = query?.variables || query?.input;
    }
    return gqlReq;
  }
  return context.switchToHttp().getRequest();
}