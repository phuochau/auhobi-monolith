import { Resolver } from "@nestjs/graphql";
import { CRUDResolver } from "@ptc-org/nestjs-query-graphql";
import { InjectQueryService, QueryService } from "@ptc-org/nestjs-query-core";
import { GraphQLGuard } from "../guards/graphql.guard";
import { AccountPasswordReset, AccountPasswordResetDTO } from "../entities/account-password-reset.entity";

const ResolveConfig = { guards: [GraphQLGuard] }

@Resolver(() => AccountPasswordReset)
export class AccountPasswordResetResolver extends CRUDResolver(AccountPasswordReset, {
  CreateDTOClass: AccountPasswordResetDTO,
  UpdateDTOClass: AccountPasswordResetDTO,
  read: ResolveConfig,
  create: ResolveConfig,
  update: ResolveConfig,
  delete: ResolveConfig,
  enableAggregate: true,
  enableTotalCount: true
}) {
  constructor(
    @InjectQueryService(AccountPasswordReset) override readonly service: QueryService<AccountPasswordReset>
  ) {
    super(service);
  }
}
