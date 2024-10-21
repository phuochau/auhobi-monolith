import { Resolver } from "@nestjs/graphql";
import { CRUDResolver } from "@ptc-org/nestjs-query-graphql";
import { InjectQueryService, QueryService } from "@ptc-org/nestjs-query-core";
import { VehicleSize, VehicleSizeDTO } from "../entities/vehicle-size.entity";
import { GraphQLGuard } from "src/modules/core/auth/guards/graphql.guard";

const ResolveConfig = { guards: [GraphQLGuard] }

@Resolver(() => VehicleSize)
export class VehicleSizeResolver extends CRUDResolver(VehicleSize, {
  CreateDTOClass: VehicleSizeDTO,
  UpdateDTOClass: VehicleSizeDTO,
  read: ResolveConfig,
  create: ResolveConfig,
  update: ResolveConfig,
  delete: ResolveConfig
}) {
  constructor(
    @InjectQueryService(VehicleSize) override readonly service: QueryService<VehicleSize>
  ) {
    super(service);
  }
}
