import { registerEnumType } from "@nestjs/graphql";

export enum UserVehicleLogType {
  MAINTENANCE = 1,
  REPAIR = 2,
  DETAILING = 3,
  RETROFIT = 4,
  TUNING = 5,
  SOFTWARE = 6,
  PAPERWORK = 7,
  OTHER = 100
}

registerEnumType(UserVehicleLogType, { 
  name: 'UserVehicleLogType'
})