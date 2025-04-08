import { Resolver } from "@nestjs/graphql";
import { CRUDResolver } from "@ptc-org/nestjs-query-graphql";
import { InjectQueryService, QueryService } from "@ptc-org/nestjs-query-core";
import { GraphQLGuard } from "../../../core/auth/guards/graphql.guard";
import { ProductOption, ProductOptionDTO } from "../entities/product-option.entity";

const ResolveConfig = { guards: [GraphQLGuard] }

@Resolver(() => ProductOption)
export class ProductOptionResolver extends CRUDResolver(ProductOption, {
  CreateDTOClass: ProductOptionDTO,
  UpdateDTOClass: ProductOptionDTO,
  read: ResolveConfig,
  create: ResolveConfig,
  update: ResolveConfig,
  delete: ResolveConfig,
  enableAggregate: true,
  enableTotalCount: true
}) {
  constructor(@InjectQueryService(ProductOption) override readonly service: QueryService<ProductOption>) {
    super(service);
  }
}
