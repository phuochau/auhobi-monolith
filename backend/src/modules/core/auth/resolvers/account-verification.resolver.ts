import { Resolver } from "@nestjs/graphql";
import { CRUDResolver } from "@ptc-org/nestjs-query-graphql";
import { InjectQueryService, QueryService } from "@ptc-org/nestjs-query-core";
import { GraphQLGuard } from "../guards/graphql.guard";
import { AccountVerfication, AccountVerficationDTO } from "../entities/account-verification.entity";

const ResolveConfig = { guards: [GraphQLGuard] }

@Resolver(() => AccountVerfication)
export class AccountVerificationResolver extends CRUDResolver(AccountVerfication, {
  CreateDTOClass: AccountVerficationDTO,
  UpdateDTOClass: AccountVerficationDTO,
  read: ResolveConfig,
  create: ResolveConfig,
  update: ResolveConfig,
  delete: ResolveConfig,
  enableAggregate: true,
  enableTotalCount: true
}) {
  constructor(
    @InjectQueryService(AccountVerfication) override readonly service: QueryService<AccountVerfication>
  ) {
    super(service);
  }
}
