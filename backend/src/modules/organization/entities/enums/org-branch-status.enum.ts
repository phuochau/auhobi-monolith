import { registerEnumType } from "@nestjs/graphql";

export enum OrgBranchStatus {
  ACTIVATED = 'ACTIVATED',
  UNACTIVATED = 'UNACTIVATED',
  BLOCKED = 'BLOCKED'
}

registerEnumType(OrgBranchStatus, {
  name: 'OrgBranchStatus',
})