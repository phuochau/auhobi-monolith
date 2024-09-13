import { Resolver } from "@nestjs/graphql";
import { CRUDResolver } from "@ptc-org/nestjs-query-graphql";
import { InjectQueryService, QueryService } from "@ptc-org/nestjs-query-core";
import { VehicleEngine, VehicleEngineDTO } from "../entities/vehicle-engine.entity";
import { GraphQLGuard } from "src/modules/core/auth/guards/graphql.guard";

const ResolveConfig = { guards: [GraphQLGuard] }

@Resolver(() => VehicleEngine)
export class VehicleEngineResolver extends CRUDResolver(VehicleEngine, {
  CreateDTOClass: VehicleEngineDTO,
  UpdateDTOClass: VehicleEngineDTO,
  read: ResolveConfig,
  create: ResolveConfig,
  update: ResolveConfig,
  delete: ResolveConfig
}) {
  constructor(
    @InjectQueryService(VehicleEngine) override readonly service: QueryService<VehicleEngine>
  ) {
    super(service);
  }
}
