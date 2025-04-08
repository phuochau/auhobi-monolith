import { Resolver } from "@nestjs/graphql";
import { CRUDResolver } from "@ptc-org/nestjs-query-graphql";
import { InjectQueryService, QueryService } from "@ptc-org/nestjs-query-core";
import { UserVehicle, UserVehicleDTO } from "../entities/user-vehicle.entity";
import { GraphQLGuard } from "src/modules/core/auth/guards/graphql.guard";

const ResolveConfig = { guards: [GraphQLGuard] }

@Resolver(() => UserVehicle)
export class UserVehicleResolver extends CRUDResolver(UserVehicle, {
  CreateDTOClass: UserVehicleDTO,
  UpdateDTOClass: UserVehicleDTO,
  read: ResolveConfig,
  create: ResolveConfig,
  update: ResolveConfig,
  delete: ResolveConfig,
  enableAggregate: true,
  enableTotalCount: true
}) {
  constructor(
    @InjectQueryService(UserVehicle) override readonly service: QueryService<UserVehicle>
  ) {
    super(service);
  }
}
