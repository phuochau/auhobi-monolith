import { registerEnumType } from "@nestjs/graphql";

export enum UserVechileStatus {
  ACTIVATED = 'ACTIVATED',
  UNACTIVATED = 'UNACTIVATED',
  BLOCKED = 'BLOCKED'
}

registerEnumType(UserVechileStatus, { 
  name: 'UserVechileStatus'
})