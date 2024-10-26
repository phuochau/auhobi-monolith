import { VehicleBody, VehicleBodyDTO } from "./vehicle-body.entity"
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
    VehicleBody,
    VehicleTransmission,
]

export const DTOs = [
    VehicleBaseModelDTO,
    VehicleBrandDTO,
    VehicleDriveDTO,
    VehicleEngineFuelDTO,
    VehicleEngineDTO,
    VehicleModelDTO,
    VehicleBodyDTO,
    VehicleTransmissionDTO
]