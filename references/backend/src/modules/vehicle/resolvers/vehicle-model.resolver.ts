import { Resolver } from "@nestjs/graphql";
import { CRUDResolver } from "@ptc-org/nestjs-query-graphql";
import { InjectQueryService, QueryService } from "@ptc-org/nestjs-query-core";
import { VehicleModel, VehicleModelDTO } from "../entities/vehicle-model.entity";
import { GraphQLGuard } from "src/modules/core/auth/guards/graphql.guard";

const ResolveConfig = { guards: [GraphQLGuard] }

@Resolver(() => VehicleModel)
export class VehicleModelResolver extends CRUDResolver(VehicleModel, {
  CreateDTOClass: VehicleModelDTO,
  UpdateDTOClass: VehicleModelDTO,
  read: ResolveConfig,
  create: ResolveConfig,
  update: ResolveConfig,
  delete: ResolveConfig
}) {
  constructor(
    @InjectQueryService(VehicleModel) service: QueryService<VehicleModel>,
  ) {
    super(service);
  }
}
