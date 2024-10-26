import { VehicleBodyResolver } from "./vehicle-body.resolver";
import { VehicleBrandResolver } from "./vehicle-brand.resolver";
import { VehicleEngineResolver } from "./vehicle-engine.resolver";
import { VehicleModelResolver } from "./vehicle-model.resolver";
import { VehicleTransmissionResolver } from "./vehicle-tranmission.resolver";
import { VehicleBaseModelResolver } from "./vehicle-base-model.resolver";
import { VehicleDriveResolver } from "./vehicle-drive.resolver";
import { VehicleEngineFuelResolver } from "./vehicle-engine-fuel.resolver";

export const Resolvers = [
    VehicleBaseModelResolver,
    VehicleBrandResolver,
    VehicleDriveResolver,
    VehicleEngineFuelResolver,
    VehicleEngineResolver,
    VehicleModelResolver,
    VehicleBodyResolver,
    VehicleTransmissionResolver
]