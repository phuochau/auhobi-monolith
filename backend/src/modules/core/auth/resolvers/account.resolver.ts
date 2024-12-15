import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Account, AccountDTO } from "../entities/account.entity";
import { CRUDResolver } from "@ptc-org/nestjs-query-graphql";
import { InjectQueryService, QueryService } from "@ptc-org/nestjs-query-core";
import { CurrentAccount } from "../entities/decorators/current-account.decorator";
import { UseGuards } from "@nestjs/common";
import { GraphQLGuard } from "../guards/graphql.guard";
import { AccountChangePasswordInput } from "./inputs/account-change-password.input";
import { AccountService } from "../services/account.service";

const ResolveConfig = { guards: [GraphQLGuard] }

@Resolver(() => Account)
export class AccountResolver extends CRUDResolver(Account, {
  CreateDTOClass: AccountDTO,
  UpdateDTOClass: AccountDTO,
  read: ResolveConfig,
  create: ResolveConfig,
  update: ResolveConfig,
  delete: ResolveConfig,
  enableAggregate: true,
  enableTotalCount: true
}) {
  constructor(
    @InjectQueryService(Account) override readonly service: QueryService<Account>,
    private accountService: AccountService
  ) {
    super(service);
  }

  /**
   * Queries
   */
  @Query(() => Account, { name: 'me' })
  @UseGuards(GraphQLGuard)
  me(@CurrentAccount() account: Account) {
    return account
  }

  /**
   * Change password
   */
  @Mutation(() => Boolean)
  changePassword(
    @CurrentAccount() account: Account,
    @Args({ name: 'input', type: () => AccountChangePasswordInput }) input: AccountChangePasswordInput
  ) {
    return this.accountService.changePassword(account, input.oldPassword, input.newPassword)
  }
}
