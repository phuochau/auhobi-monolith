import { Resolver } from "@nestjs/graphql";
import { CRUDResolver } from "@ptc-org/nestjs-query-graphql";
import { InjectQueryService, QueryService } from "@ptc-org/nestjs-query-core";
import { GraphQLGuard } from "src/modules/core/auth/guards/graphql.guard";
import { VehicleEngineFuel, VehicleEngineFuelDTO } from "../entities/vehicle-engine-fuel.entity";

const ResolveConfig = { guards: [GraphQLGuard] }

@Resolver(() => VehicleEngineFuel)
export class VehicleEngineFuelResolver extends CRUDResolver(VehicleEngineFuel, {
  CreateDTOClass: VehicleEngineFuelDTO,
  UpdateDTOClass: VehicleEngineFuelDTO,
  read: ResolveConfig,
  create: ResolveConfig,
  update: ResolveConfig,
  delete: ResolveConfig
}) {
  constructor(
    @InjectQueryService(VehicleEngineFuel) override readonly service: QueryService<VehicleEngineFuel>
  ) {
    super(service);
  }
}
