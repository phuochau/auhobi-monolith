import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { CRUDResolver } from "@ptc-org/nestjs-query-graphql";
import { InjectQueryService, QueryService } from "@ptc-org/nestjs-query-core";
import { GraphQLGuard } from "../../core/auth/guards/graphql.guard";
import { Order, OrderDTO } from "../entities/order.entity";
import { OrderImportService } from "../services/order-import.service";
import { CurrentAccount } from "src/modules/core/auth/entities/decorators/current-account.decorator";
import { UseGuards } from "@nestjs/common";
import { Account } from "src/modules/core/auth/entities/account.entity";
import { OrderImportInput } from "./inputs/order-import.input";

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
    @InjectQueryService(Order) override readonly service: QueryService<Order>,
    private orderImportService: OrderImportService
  ) {
    super(service);
  }

  @Mutation(() => [Order])
  @UseGuards(GraphQLGuard)
  orderImportByFiles(
    @CurrentAccount() account: Account,
    @Args('input', { type: () => OrderImportInput }) input: OrderImportInput
  ) {
    return this.orderImportService.importByFiles(account, input.branchId, input.branchSaleChannelId, input.fileOrMediaIds)
  }
}
