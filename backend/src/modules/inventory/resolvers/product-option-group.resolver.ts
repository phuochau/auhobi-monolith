import { Resolver } from "@nestjs/graphql";
import { CRUDResolver } from "@ptc-org/nestjs-query-graphql";
import { InjectQueryService, QueryService } from "@ptc-org/nestjs-query-core";
import { GraphQLGuard } from "../../core/auth/guards/graphql.guard";
import { ProductOptionGroup, ProductOptionGroupDTO } from "../entities/product-option-group.entity";

const ResolveConfig = { guards: [GraphQLGuard] }

@Resolver(() => ProductOptionGroup)
export class ProductOptionGroupResolver extends CRUDResolver(ProductOptionGroup, {
  CreateDTOClass: ProductOptionGroupDTO,
  UpdateDTOClass: ProductOptionGroupDTO,
  read: ResolveConfig,
  create: ResolveConfig,
  update: ResolveConfig,
  delete: ResolveConfig,
  enableAggregate: true,
  enableTotalCount: true
}) {
  constructor(@InjectQueryService(ProductOptionGroup) override readonly service: QueryService<ProductOptionGroup>) {
    super(service);
  }
}
