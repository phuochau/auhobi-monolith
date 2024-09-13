import { Resolver } from "@nestjs/graphql";
import { CRUDResolver } from "@ptc-org/nestjs-query-graphql";
import { InjectQueryService, QueryService } from "@ptc-org/nestjs-query-core";
import { VehicleTransmission, VehicleTransmissionDTO } from "../entities/vehicle-transmission.entity";
import { GraphQLGuard } from "src/modules/core/auth/guards/graphql.guard";

const ResolveConfig = { guards: [GraphQLGuard] }

@Resolver(() => VehicleTransmission)
export class VehicleTransmissionResolver extends CRUDResolver(VehicleTransmission, {
  CreateDTOClass: VehicleTransmissionDTO,
  UpdateDTOClass: VehicleTransmissionDTO,
  read: ResolveConfig,
  create: ResolveConfig,
  update: ResolveConfig,
  delete: ResolveConfig
}) {
  constructor(
    @InjectQueryService(VehicleTransmission) override readonly service: QueryService<VehicleTransmission>
  ) {
    super(service);
  }
}
