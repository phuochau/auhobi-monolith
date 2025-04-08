import { Resolver } from "@nestjs/graphql";
import { CRUDResolver } from "@ptc-org/nestjs-query-graphql";
import { InjectQueryService, QueryService } from "@ptc-org/nestjs-query-core";
import { ServiceLogBill, ServiceLogBillDTO } from "../entities/service-log-bill.entity";
import { GraphQLGuard } from "src/modules/core/auth/guards/graphql.guard";

const ResolveConfig = { guards: [GraphQLGuard] }

@Resolver(() => ServiceLogBill)
export class ServiceLogBillResolver extends CRUDResolver(ServiceLogBill, {
  CreateDTOClass: ServiceLogBillDTO,
  UpdateDTOClass: ServiceLogBillDTO,
  read: ResolveConfig,
  create: ResolveConfig,
  update: ResolveConfig,
  delete: ResolveConfig,
  enableAggregate: true,
  enableTotalCount: true
}) {
  constructor(
    @InjectQueryService(ServiceLogBill) override readonly service: QueryService<ServiceLogBill>
  ) {
    super(service);
  }
}
