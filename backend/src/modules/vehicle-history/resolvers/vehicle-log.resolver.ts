import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { CRUDResolver } from "@ptc-org/nestjs-query-graphql";
import { InjectQueryService, QueryService } from "@ptc-org/nestjs-query-core";
import { VehicleLog, VehicleLogDTO } from "../entities/vehicle-log.entity";
import _ from "lodash";
import { GraphQLGuard } from "src/modules/core/auth/guards/graphql.guard";
import { VehicleLogBill } from "../entities/vehicle-log-bill.entity";

const ResolveConfig = { guards: [GraphQLGuard] }

@Resolver(() => VehicleLog)
export class VehicleLogResolver extends CRUDResolver(VehicleLog, {
  CreateDTOClass: VehicleLogDTO,
  UpdateDTOClass: VehicleLogDTO,
  read: ResolveConfig,
  create: ResolveConfig,
  update: ResolveConfig,
  delete: ResolveConfig,
  enableAggregate: true,
  enableTotalCount: true
}) {
  constructor(
    @InjectQueryService(VehicleLog) override readonly service: QueryService<VehicleLog>,
    @InjectQueryService(VehicleLogBill) readonly billService: QueryService<VehicleLogBill>
  ) {
    super(service);
  }

  @ResolveField(() => VehicleLogBill, { nullable: true })
  async bill(@Parent() log: VehicleLog) {
    const result = await this.billService.query({
      filter: {
        log: {
          id: { eq: log.id }
        }
      }
    })

    return _.first(result)
  }
}
