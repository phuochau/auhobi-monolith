import { Resolver } from "@nestjs/graphql";
import { CRUDResolver } from "@ptc-org/nestjs-query-graphql";
import { InjectQueryService, QueryService } from "@ptc-org/nestjs-query-core";
import { GraphQLGuard } from "src/modules/core/auth/guards/graphql.guard";
import { VehicleBaseModel, VehicleBaseModelDTO } from "../entities/vehicle-base-model.entity";

const ResolveConfig = { guards: [GraphQLGuard] }

@Resolver(() => VehicleBaseModel)
export class VehicleBaseModelResolver extends CRUDResolver(VehicleBaseModel, {
  CreateDTOClass: VehicleBaseModelDTO,
  UpdateDTOClass: VehicleBaseModelDTO,
  read: ResolveConfig,
  create: ResolveConfig,
  update: ResolveConfig,
  delete: ResolveConfig
}) {
  constructor(
    @InjectQueryService(VehicleBaseModel) override readonly service: QueryService<VehicleBaseModel>
  ) {
    super(service);
  }
}
