import { registerEnumType } from "@nestjs/graphql";

export enum ServiceLogType {
  MAINTENANCE = 1,
  RETROFIT = 2,
  UPGRADING = 3,
  TUNING = 4,
  DETAILING = 5,
  OTHER = 100
}

registerEnumType(ServiceLogType, { 
  name: 'ServiceLogType'
})