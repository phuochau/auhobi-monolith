import { registerEnumType } from "@nestjs/graphql";

export enum ShopMemberRole {
  VIEWER = 1,
  EDITOR = 10,
  MANAGER = 88,
  OWNER = 99
}

registerEnumType(ShopMemberRole, {
  name: 'ShopMemberRole',
})