import { ExecutionContext } from "@nestjs/common";
import { getContextRequest } from "./getContextRequest";


export const getContextAccount = (context: ExecutionContext) => {
    const req = getContextRequest(context);
    if (req?.user) {
      return req.user
    }
    return null
  }