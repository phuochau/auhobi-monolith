import { VehicleBodyResolver } from "./vehicle-body.resolver";
import { VehicleBrandResolver } from "./vehicle-brand.resolver";
import { VehicleEngineResolver } from "./vehicle-engine.resolver";
import { VehicleModelBodyResolver } from "./vehicle-model-body.resolver";
import { VehicleModelResolver } from "./vehicle-model.resolver";
import { VehicleTransmissionResolver } from "./vehicle-tranmission.resolver";

export const Resolvers = [
    VehicleBodyResolver,
    VehicleBrandResolver,
    VehicleEngineResolver,
    VehicleModelBodyResolver,
    VehicleModelResolver,
    VehicleTransmissionResolver
]