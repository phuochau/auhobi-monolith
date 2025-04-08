import { Resolver } from "@nestjs/graphql";
import { CRUDResolver } from "@ptc-org/nestjs-query-graphql";
import { InjectQueryService, QueryService } from "@ptc-org/nestjs-query-core";
import { VehicleBody, VehicleBodyDTO } from "../entities/vehicle-body.entity";
import { GraphQLGuard } from "src/modules/core/auth/guards/graphql.guard";

const ResolveConfig = { guards: [GraphQLGuard] }

@Resolver(() => VehicleBody)
export class VehicleBodyResolver extends CRUDResolver(VehicleBody, {
  CreateDTOClass: VehicleBodyDTO,
  UpdateDTOClass: VehicleBodyDTO,
  read: ResolveConfig,
  create: ResolveConfig,
  update: ResolveConfig,
  delete: ResolveConfig
}) {
  constructor(
    @InjectQueryService(VehicleBody) override readonly service: QueryService<VehicleBody>
  ) {
    super(service);
  }
}
