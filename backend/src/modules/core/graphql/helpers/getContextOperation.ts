import { ExecutionContext } from "@nestjs/common"
import _ from "lodash"
import { getContextRequest } from "./getContextRequest"


export const getContextOperation = (context: ExecutionContext): string => {
    let operation = _.get<any, string>(context.getArgs(), '[3].operation.operation')
    if (operation?.length) {
      return operation
    }
  
    const gqlReg = getContextRequest(context)
    const bodyQuery = _.get<any, string>(gqlReg, 'body.query')
    if (bodyQuery?.length) {
      return 'query'
    }
  
    return 'mutation'
  }