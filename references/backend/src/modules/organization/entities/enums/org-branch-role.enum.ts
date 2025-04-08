import { registerEnumType } from "@nestjs/graphql";

export enum OrgBranchRole {
  VIEWER = 1,
  EDITOR = 10,
  MANAGER = 88,
  OWNER = 99
}

registerEnumType(OrgBranchRole, {
  name: 'OrgBranchRole',
})