import { Resolver } from "@nestjs/graphql";
import { CRUDResolver } from "@ptc-org/nestjs-query-graphql";
import { InjectQueryService, QueryService } from "@ptc-org/nestjs-query-core";
import { GraphQLGuard } from "../../../core/auth/guards/graphql.guard";
import { OrderProduct, OrderProductDTO } from "../entities/order-product.entity";

const ResolveConfig = { guards: [GraphQLGuard] }

@Resolver(() => OrderProduct)
export class OrderProductResolver extends CRUDResolver(OrderProduct, {
  CreateDTOClass: OrderProductDTO,
  UpdateDTOClass: OrderProductDTO,
  read: ResolveConfig,
  create: ResolveConfig,
  update: ResolveConfig,
  delete: ResolveConfig,
  enableAggregate: true,
  enableTotalCount: true
}) {
  constructor(@InjectQueryService(OrderProduct) override readonly service: QueryService<OrderProduct>) {
    super(service);
  }
}
