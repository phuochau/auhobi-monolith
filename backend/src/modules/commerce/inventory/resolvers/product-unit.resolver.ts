import { Resolver } from "@nestjs/graphql";
import { CRUDResolver } from "@ptc-org/nestjs-query-graphql";
import { InjectQueryService, QueryService } from "@ptc-org/nestjs-query-core";
import { GraphQLGuard } from "../../../core/auth/guards/graphql.guard";
import { ProductUnit, ProductUnitDTO } from "../entities/product-unit.entity";

const ResolveConfig = { guards: [GraphQLGuard] }

@Resolver(() => ProductUnit)
export class ProductUnitResolver extends CRUDResolver(ProductUnit, {
  CreateDTOClass: ProductUnitDTO,
  UpdateDTOClass: ProductUnitDTO,
  read: ResolveConfig,
  create: ResolveConfig,
  update: ResolveConfig,
  delete: ResolveConfig,
  enableAggregate: true,
  enableTotalCount: true
}) {
  constructor(@InjectQueryService(ProductUnit) override readonly service: QueryService<ProductUnit>) {
    super(service);
  }
}
