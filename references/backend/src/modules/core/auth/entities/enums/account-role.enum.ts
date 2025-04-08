import { registerEnumType } from "@nestjs/graphql";

export enum AccountRole {
  USER = 1,
  ADMIN = 90,
  SUPERADMIN = 99
}

registerEnumType(AccountRole, {
  name: 'AccountRole',
});