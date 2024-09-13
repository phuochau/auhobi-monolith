import { registerEnumType } from "@nestjs/graphql";

export enum OrgType {
  DEFAULT = 1
}

registerEnumType(OrgType, {
  name: 'OrgType',
})