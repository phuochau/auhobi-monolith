import { Resolver } from "@nestjs/graphql";
import { CRUDResolver } from "@ptc-org/nestjs-query-graphql";
import { InjectQueryService, QueryService } from "@ptc-org/nestjs-query-core";
import { VehicleLogBill, VehicleLogBillDTO } from "../entities/vehicle-log-bill.entity";
import { GraphQLGuard } from "src/modules/core/auth/guards/graphql.guard";

const ResolveConfig = { guards: [GraphQLGuard] }

@Resolver(() => VehicleLogBill)
export class VehicleLogBillResolver extends CRUDResolver(VehicleLogBill, {
  CreateDTOClass: VehicleLogBillDTO,
  UpdateDTOClass: VehicleLogBillDTO,
  read: ResolveConfig,
  create: ResolveConfig,
  update: ResolveConfig,
  delete: ResolveConfig,
  enableAggregate: true,
  enableTotalCount: true
}) {
  constructor(
    @InjectQueryService(VehicleLogBill) override readonly service: QueryService<VehicleLogBill>
  ) {
    super(service);
  }
}
