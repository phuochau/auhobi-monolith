import { registerEnumType } from "@nestjs/graphql";

export enum OrgRole {
  MEMBER = 1,
  MANAGER = 88,
  OWNER = 99
}

registerEnumType(OrgRole, {
  name: 'OrgRole',
})