import { Resolver } from "@nestjs/graphql";
import { CRUDResolver } from "@ptc-org/nestjs-query-graphql";
import { InjectQueryService, QueryService } from "@ptc-org/nestjs-query-core";
import { VehicleBrand, VehicleBrandDTO } from "../entities/vehicle-brand.entity";
import { GraphQLGuard } from "src/modules/core/auth/guards/graphql.guard";

const ResolveConfig = { guards: [GraphQLGuard] }

@Resolver(() => VehicleBrand)
export class VehicleBrandResolver extends CRUDResolver(VehicleBrand, {
  CreateDTOClass: VehicleBrandDTO,
  UpdateDTOClass: VehicleBrandDTO,
  read: ResolveConfig,
  create: ResolveConfig,
  update: ResolveConfig,
  delete: ResolveConfig
}) {
  constructor(
    @InjectQueryService(VehicleBrand) override readonly service: QueryService<VehicleBrand>
  ) {
    super(service);
  }
}
