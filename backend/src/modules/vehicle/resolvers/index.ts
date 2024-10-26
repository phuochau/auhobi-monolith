import { VehicleBodyResolver } from "./vehicle-body.resolver";
import { VehicleBrandResolver } from "./vehicle-brand.resolver";
import { VehicleModelResolver } from "./vehicle-model.resolver";
import { VehicleBaseModelResolver } from "./vehicle-base-model.resolver";

export const Resolvers = [
    VehicleBaseModelResolver,
    VehicleBrandResolver,
    VehicleModelResolver,
    VehicleBodyResolver
]