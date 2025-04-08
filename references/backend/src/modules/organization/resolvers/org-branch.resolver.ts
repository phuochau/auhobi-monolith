import { Resolver } from "@nestjs/graphql";
import { CRUDResolver } from "@ptc-org/nestjs-query-graphql";
import { InjectQueryService, QueryService } from "@ptc-org/nestjs-query-core";
import { OrgBranch, OrgBranchDTO } from "../entities/org-branch.entity";
import { GraphQLGuard } from "../../core/auth/guards/graphql.guard";

const ResolveConfig = { guards: [GraphQLGuard] }

@Resolver(() => OrgBranch)
export class OrgBranchResolver extends CRUDResolver(OrgBranch, {
  CreateDTOClass: OrgBranchDTO,
  UpdateDTOClass: OrgBranchDTO,
  read: ResolveConfig,
  create: ResolveConfig,
  update: ResolveConfig,
  delete: ResolveConfig,
  enableAggregate: true,
  enableTotalCount: true
}) {
  constructor(@InjectQueryService(OrgBranch) override readonly service: QueryService<OrgBranch>) {
    super(service);
  }
}
