import { Args, ID, Mutation, Resolver } from "@nestjs/graphql";
import { CRUDResolver } from "@ptc-org/nestjs-query-graphql";
import { InjectQueryService, QueryService } from "@ptc-org/nestjs-query-core";
import { GraphQLGuard } from "../../core/auth/guards/graphql.guard";
import { ProductPrice, ProductPriceDTO } from "../entities/product-price.entity";
import { UseGuards } from "@nestjs/common";
import { CurrentAccount } from "src/modules/core/auth/entities/decorators/current-account.decorator";
import { Account } from "src/modules/core/auth/entities/account.entity";
import { ProductPriceImportService } from "../services/product-price-import.service";
import { ProductPriceImportInput } from "./inputs/product-price-import.input";

const ResolveConfig = { guards: [GraphQLGuard] }

@Resolver(() => ProductPrice)
export class ProductPriceResolver extends CRUDResolver(ProductPrice, {
  CreateDTOClass: ProductPriceDTO,
  UpdateDTOClass: ProductPriceDTO,
  read: ResolveConfig,
  create: ResolveConfig,
  update: ResolveConfig,
  delete: ResolveConfig,
  enableAggregate: true,
  enableTotalCount: true
}) {
  constructor(
    @InjectQueryService(ProductPrice) override readonly service: QueryService<ProductPrice>,
    private productPriceImportService: ProductPriceImportService
  ) {
    super(service);
  }

  @Mutation(() => [ProductPrice])
  @UseGuards(GraphQLGuard)
  productPriceImportByFile(
    @CurrentAccount() account: Account,
    @Args('input', { type: () => ProductPriceImportInput }) input: ProductPriceImportInput
  ) {
    return this.productPriceImportService.importByFile(account, input.branchId, input.fileId)
  }
}
