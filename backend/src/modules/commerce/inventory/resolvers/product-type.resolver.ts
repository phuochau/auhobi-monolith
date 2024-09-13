import { Resolver } from "@nestjs/graphql";
import { CRUDResolver } from "@ptc-org/nestjs-query-graphql";
import { InjectQueryService, QueryService } from "@ptc-org/nestjs-query-core";
import { GraphQLGuard } from "../../../core/auth/guards/graphql.guard";
import { ProductType, ProductTypeDTO } from "../entities/product-type.entity";

const ResolveConfig = { guards: [GraphQLGuard] }

@Resolver(() => ProductType)
export class ProductTypeResolver extends CRUDResolver(ProductType, {
  CreateDTOClass: ProductTypeDTO,
  UpdateDTOClass: ProductTypeDTO,
  read: ResolveConfig,
  create: ResolveConfig,
  update: ResolveConfig,
  delete: ResolveConfig,
  enableAggregate: true,
  enableTotalCount: true
}) {
  constructor(@InjectQueryService(ProductType) override readonly service: QueryService<ProductType>) {
    super(service);
  }
}
