import { ExecutionContext } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";

export const getContextRequest = (context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);
    const gqlReq = ctx.getContext().req;
    if (gqlReq) {
      return gqlReq
    }
    return context.switchToHttp().getRequest();
}