import { Garage, GarageDTO } from "./garage.entity"
import { GarageBeforeCreateOneHook } from "./hooks/garage-id.hooks"

export const Entities = [
    Garage
]

export const DTOs = [
    GarageDTO
]

export const Hooks = [
    GarageBeforeCreateOneHook
]