import { VehicleSize, VehicleSizeDTO } from "./vehicle-size.entity"
import { VehicleBrand, VehicleBrandDTO } from "./vehicle-brand.entity"
import { VehicleEngine, VehicleEngineDTO } from "./vehicle-engine.entity"
import { VehicleModel, VehicleModelDTO } from "./vehicle-model.entity"
import { VehicleTransmission, VehicleTransmissionDTO } from "./vehicle-transmission.entity"
import { VehicleBaseModel, VehicleBaseModelDTO } from "./vehicle-base-model.entity"
import { VehicleDrive, VehicleDriveDTO } from "./vehicle-drive.entity"
import { VehicleEngineFuel, VehicleEngineFuelDTO } from "./vehicle-engine-fuel.entity"

export const Entities = [
    VehicleBaseModel,
    VehicleBrand,
    VehicleDrive,
    VehicleEngineFuel,
    VehicleEngine,
    VehicleModel,
    VehicleSize,
    VehicleTransmission,
]

export const DTOs = [
    VehicleBaseModelDTO,
    VehicleBrandDTO,
    VehicleDriveDTO,
    VehicleEngineFuelDTO,
    VehicleEngineDTO,
    VehicleModelDTO,
    VehicleSizeDTO,
    VehicleTransmissionDTO
]