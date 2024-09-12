import { Account } from "../../auth/entities/account.entity"

export type GqlContext = {
  req: {
    user?: Account
  }
}