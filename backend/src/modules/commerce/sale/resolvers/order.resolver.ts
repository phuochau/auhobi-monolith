import { Resolver } from "@nestjs/graphql";
import { CRUDResolver } from "@ptc-org/nestjs-query-graphql";
import { InjectQueryService, QueryService } from "@ptc-org/nestjs-query-core";
import { GraphQLGuard } from "../../../core/auth/guards/graphql.guard";
import { Order, OrderDTO } from "../entities/order.entity";

const ResolveConfig = { guards: [GraphQLGuard] }

@Resolver(() => Order)
export class OrderResolver extends CRUDResolver(Order, {
  CreateDTOClass: OrderDTO,
  UpdateDTOClass: OrderDTO,
  read: ResolveConfig,
  create: ResolveConfig,
  update: ResolveConfig,
  delete: ResolveConfig,
  enableAggregate: true,
  enableTotalCount: true
}) {
  constructor(
    @InjectQueryService(Order) override readonly service: QueryService<Order>
  ) {
    super(service);
  }
}
