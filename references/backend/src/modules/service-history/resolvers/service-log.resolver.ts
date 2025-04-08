import { Resolver } from "@nestjs/graphql";
import { CRUDResolver } from "@ptc-org/nestjs-query-graphql";
import { InjectQueryService, QueryService } from "@ptc-org/nestjs-query-core";
import { ServiceLog, ServiceLogDTO } from "../entities/service-log.entity";
import _ from "lodash";
import { GraphQLGuard } from "src/modules/core/auth/guards/graphql.guard";

const ResolveConfig = { guards: [GraphQLGuard] }

@Resolver(() => ServiceLog)
export class ServiceLogResolver extends CRUDResolver(ServiceLog, {
  CreateDTOClass: ServiceLogDTO,
  UpdateDTOClass: ServiceLogDTO,
  read: ResolveConfig,
  create: ResolveConfig,
  update: ResolveConfig,
  delete: ResolveConfig,
  enableAggregate: true,
  enableTotalCount: true
}) {
  constructor(
    @InjectQueryService(ServiceLog) override readonly service: QueryService<ServiceLog>
  ) {
    super(service);
  }
}
