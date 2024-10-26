import { VehicleBody, VehicleBodyDTO } from "./vehicle-body.entity"
import { VehicleBrand, VehicleBrandDTO } from "./vehicle-brand.entity"
import { VehicleModel, VehicleModelDTO } from "./vehicle-model.entity"
import { VehicleBaseModel, VehicleBaseModelDTO } from "./vehicle-base-model.entity"

export const Entities = [
    VehicleBaseModel,
    VehicleBrand,
    VehicleModel,
    VehicleBody
]

export const DTOs = [
    VehicleBaseModelDTO,
    VehicleBrandDTO,
    VehicleModelDTO,
    VehicleBodyDTO
]