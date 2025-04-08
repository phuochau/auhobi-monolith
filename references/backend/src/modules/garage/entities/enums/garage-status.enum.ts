import { registerEnumType } from "@nestjs/graphql";

export enum GarageStatus {
  ACTIVATED = 'ACTIVATED',
  UNACTIVATED = 'UNACTIVATED',
  BLOCKED = 'BLOCKED'
}

registerEnumType(GarageStatus, { 
  name: 'GarageStatus'
})