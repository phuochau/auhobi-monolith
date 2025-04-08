import { registerEnumType } from "@nestjs/graphql";

export enum AccountAuthMethod {
  EMAIL = 1,
  PHONE = 2,
  APPLE = 3,
  FACEBOOK = 4,
  GOOGLE = 5
}

registerEnumType(AccountAuthMethod, {
  name: 'AccountAuthMethod',
});