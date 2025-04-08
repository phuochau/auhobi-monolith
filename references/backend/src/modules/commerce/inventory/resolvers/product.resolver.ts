import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { CRUDResolver } from "@ptc-org/nestjs-query-graphql";
import { InjectQueryService, QueryService } from "@ptc-org/nestjs-query-core";
import { GraphQLGuard } from "../../../core/auth/guards/graphql.guard";
import { Product, ProductDTO } from "../entities/product.entity";
import { UseGuards } from "@nestjs/common";
import { CurrentAccount } from "src/modules/core/auth/entities/decorators/current-account.decorator";
import { Account } from "src/modules/core/auth/entities/account.entity";
import { ProductImportService } from "../services/product-import.service";
import { ProductImportInput } from "./inputs/product-import.input";

const ResolveConfig = { guards: [GraphQLGuard] }

@Resolver(() => Product)
export class ProductResolver extends CRUDResolver(Product, {
  CreateDTOClass: ProductDTO,
  UpdateDTOClass: ProductDTO,
  read: ResolveConfig,
  create: ResolveConfig,
  update: ResolveConfig,
  delete: ResolveConfig,
  enableAggregate: true,
  enableTotalCount: true
}) {
  constructor(
    @InjectQueryService(Product) override readonly service: QueryService<Product>,
    private productImportService: ProductImportService
  ) {
    super(service);
  }

  @Mutation(() => [Product])
  @UseGuards(GraphQLGuard)
  productImportByFile(
    @CurrentAccount() account: Account,
    @Args('input', { type: () => ProductImportInput }) input: ProductImportInput
  ) {
    return this.productImportService.importByFile(account, input.branchId, input.fileId)
  }
}
