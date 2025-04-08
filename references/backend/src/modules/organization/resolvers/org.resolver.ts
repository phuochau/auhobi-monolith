import { Resolver } from "@nestjs/graphql";
import { CRUDResolver } from "@ptc-org/nestjs-query-graphql";
import { InjectQueryService, QueryService } from "@ptc-org/nestjs-query-core";
import { Org, OrgDTO } from "../entities/org.entity";
import { GraphQLGuard } from "../../core/auth/guards/graphql.guard";

const ResolveConfig = { guards: [GraphQLGuard] }

@Resolver(() => Org)
export class OrgResolver extends CRUDResolver(Org, {
  CreateDTOClass: OrgDTO,
  UpdateDTOClass: OrgDTO,
  read: ResolveConfig,
  create: ResolveConfig,
  update: ResolveConfig,
  delete: ResolveConfig,
  enableAggregate: true,
  enableTotalCount: true
}) {
  constructor(@InjectQueryService(Org) override readonly service: QueryService<Org>) {
    super(service);
  }
}
