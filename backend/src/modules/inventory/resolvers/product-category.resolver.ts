import { Resolver } from "@nestjs/graphql";
import { CRUDResolver } from "@ptc-org/nestjs-query-graphql";
import { InjectQueryService, QueryService } from "@ptc-org/nestjs-query-core";
import { GraphQLGuard } from "../../core/auth/guards/graphql.guard";
import { ProductCategory, ProductCategoryDTO } from "../entities/product-category.entity";

const ResolveConfig = { guards: [GraphQLGuard] }

@Resolver(() => ProductCategory)
export class ProductCategoryResolver extends CRUDResolver(ProductCategory, {
  CreateDTOClass: ProductCategoryDTO,
  UpdateDTOClass: ProductCategoryDTO,
  read: ResolveConfig,
  create: ResolveConfig,
  update: ResolveConfig,
  delete: ResolveConfig,
  enableAggregate: true,
  enableTotalCount: true
}) {
  constructor(@InjectQueryService(ProductCategory) override readonly service: QueryService<ProductCategory>) {
    super(service);
  }
}
