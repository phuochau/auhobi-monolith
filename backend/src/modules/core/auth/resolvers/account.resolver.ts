import { Query, Resolver } from "@nestjs/graphql";
import { Account, AccountDTO } from "../entities/account.entity";
import { CRUDResolver } from "@ptc-org/nestjs-query-graphql";
import { InjectQueryService, QueryService } from "@ptc-org/nestjs-query-core";
import { CurrentAccount } from "../entities/decorators/current-account.decorator";
import { UseGuards } from "@nestjs/common";
import { GraphQLGuard } from "../guards/graphql.guard";

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
    @InjectQueryService(Account) override readonly service: QueryService<Account>
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
}
