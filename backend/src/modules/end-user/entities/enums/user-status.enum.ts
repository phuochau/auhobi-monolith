import { registerEnumType } from "@nestjs/graphql";

export enum UserStatus {
  ACTIVATED = 'ACTIVATED',
  UNACTIVATED = 'UNACTIVATED',
  BLOCKED = 'BLOCKED'
}

registerEnumType(UserStatus, { 
  name: 'UserStatus'
})