import { Resolver } from "@nestjs/graphql";
import { CRUDResolver } from "@ptc-org/nestjs-query-graphql";
import { InjectQueryService, QueryService } from "@ptc-org/nestjs-query-core";
import { GraphQLGuard } from "src/modules/core/auth/guards/graphql.guard";
import { VehicleDrive, VehicleDriveDTO } from "../entities/vehicle-drive.entity";

const ResolveConfig = { guards: [GraphQLGuard] }

@Resolver(() => VehicleDrive)
export class VehicleDriveResolver extends CRUDResolver(VehicleDrive, {
  CreateDTOClass: VehicleDriveDTO,
  UpdateDTOClass: VehicleDriveDTO,
  read: ResolveConfig,
  create: ResolveConfig,
  update: ResolveConfig,
  delete: ResolveConfig
}) {
  constructor(
    @InjectQueryService(VehicleDrive) override readonly service: QueryService<VehicleDrive>
  ) {
    super(service);
  }
}
