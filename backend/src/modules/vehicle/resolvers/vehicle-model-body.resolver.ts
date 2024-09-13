import { Resolver } from "@nestjs/graphql";
import { CRUDResolver } from "@ptc-org/nestjs-query-graphql";
import { InjectQueryService, QueryService } from "@ptc-org/nestjs-query-core";
import { VehicleModelBody, VehicleModelBodyDTO } from "../entities/vehicle-model-body.entity";
import { GraphQLGuard } from "src/modules/core/auth/guards/graphql.guard";

const ResolveConfig = { guards: [GraphQLGuard] }

@Resolver(() => VehicleModelBody)
export class VehicleModelBodyResolver extends CRUDResolver(VehicleModelBody, {
  CreateDTOClass: VehicleModelBodyDTO,
  UpdateDTOClass: VehicleModelBodyDTO,
  read: ResolveConfig,
  create: ResolveConfig,
  update: ResolveConfig,
  delete: ResolveConfig
}) {
  constructor(
    @InjectQueryService(VehicleModelBody) override readonly service: QueryService<VehicleModelBody>
  ) {
    super(service);
  }
}
