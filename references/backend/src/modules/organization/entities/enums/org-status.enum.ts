import { registerEnumType } from "@nestjs/graphql";

export enum OrgStatus {
  ACTIVATED = 'ACTIVATED',
  UNACTIVATED = 'UNACTIVATED',
  BLOCKED = 'BLOCKED'
}

registerEnumType(OrgStatus, {
  name: 'OrgStatus',
})