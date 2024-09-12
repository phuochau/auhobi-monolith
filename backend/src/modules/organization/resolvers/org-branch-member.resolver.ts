import { Resolver } from "@nestjs/graphql";
import { CRUDResolver } from "@ptc-org/nestjs-query-graphql";
import { InjectQueryService, QueryService } from "@ptc-org/nestjs-query-core";
import { OrgBranchMember, OrgBranchMemberDTO } from "../entities/org-branch-member.entity";
import { GraphQLGuard } from "../../core/auth/guards/graphql.guard";

const ResolveConfig = { guards: [GraphQLGuard] }

@Resolver(() => OrgBranchMember)
export class OrgBranchMemberResolver extends CRUDResolver(OrgBranchMember, {
  CreateDTOClass: OrgBranchMemberDTO,
  UpdateDTOClass: OrgBranchMemberDTO,
  read: ResolveConfig,
  create: ResolveConfig,
  update: ResolveConfig,
  delete: ResolveConfig,
  enableAggregate: true,
  enableTotalCount: true
}) {
  constructor(@InjectQueryService(OrgBranchMember) override readonly service: QueryService<OrgBranchMember>) {
    super(service);
  }
}
