import { ExecutionContext } from "@nestjs/common";
import { getContextRequest } from "./getContextRequest";
import { Account } from "../../auth/entities/account.entity";

export const getContextAccount = (context: ExecutionContext): Account | null => {
    const req = getContextRequest(context);
    if (req?.user) {
      return req.user
    }
    return null
  }