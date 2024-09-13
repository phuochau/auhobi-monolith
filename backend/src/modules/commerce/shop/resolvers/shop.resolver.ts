import { Resolver } from "@nestjs/graphql";
import { CRUDResolver } from "@ptc-org/nestjs-query-graphql";
import { InjectQueryService, QueryService } from "@ptc-org/nestjs-query-core";
import { GraphQLGuard } from "../../../core/auth/guards/graphql.guard";
import { Shop, ShopDTO } from "../entities/shop.entity";

const ResolveConfig = { guards: [GraphQLGuard] }

@Resolver(() => Shop)
export class ShopResolver extends CRUDResolver(Shop, {
  CreateDTOClass: ShopDTO,
  UpdateDTOClass: ShopDTO,
  read: ResolveConfig,
  create: ResolveConfig,
  update: ResolveConfig,
  delete: ResolveConfig,
  enableAggregate: true,
  enableTotalCount: true
}) {Shop
  constructor(@InjectQueryService(Shop) override readonly service: QueryService<Shop>) {
    super(service);
  }
}
