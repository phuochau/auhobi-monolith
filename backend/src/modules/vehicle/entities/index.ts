import { VehicleBody, VehicleBodyDTO } from "./vehicle-body.entity"
import { VehicleBrand, VehicleBrandDTO } from "./vehicle-brand.entity"
import { VehicleEngine, VehicleEngineDTO } from "./vehicle-engine.entity"
import { VehicleModelBody, VehicleModelBodyDTO } from "./vehicle-model-body.entity"
import { VehicleModel, VehicleModelDTO } from "./vehicle-model.entity"
import { VehicleTransmission, VehicleTransmissionDTO } from "./vehicle-transmission.entity"

export const Entities = [
    VehicleBody,
    VehicleBrand,
    VehicleEngine,
    VehicleModelBody,
    VehicleModel,
    VehicleTransmission
]

export const DTOs = [
    VehicleBodyDTO,
    VehicleBrandDTO,
    VehicleEngineDTO,
    VehicleModelBodyDTO,
    VehicleModelDTO,
    VehicleTransmissionDTO
]