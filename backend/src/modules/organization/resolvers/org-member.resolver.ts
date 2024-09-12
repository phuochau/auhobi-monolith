import { Resolver } from "@nestjs/graphql";
import { CRUDResolver } from "@ptc-org/nestjs-query-graphql";
import { InjectQueryService, QueryService } from "@ptc-org/nestjs-query-core";
import { OrgMember, OrgMemberDTO } from "../entities/org-member.entity";
import { GraphQLGuard } from "../../core/auth/guards/graphql.guard";

const ResolveConfig = { guards: [GraphQLGuard] }

@Resolver(() => OrgMember)
export class OrgMemberResolver extends CRUDResolver(OrgMember, {
  CreateDTOClass: OrgMemberDTO,
  UpdateDTOClass: OrgMemberDTO,
  read: ResolveConfig,
  create: ResolveConfig,
  update: ResolveConfig,
  delete: ResolveConfig,
  enableAggregate: true,
  enableTotalCount: true
}) {
  constructor(@InjectQueryService(OrgMember) override readonly service: QueryService<OrgMember>) {
    super(service);
  }
}
