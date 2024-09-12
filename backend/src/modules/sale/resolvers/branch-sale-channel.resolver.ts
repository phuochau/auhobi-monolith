import { Resolver } from "@nestjs/graphql";
import { CRUDResolver } from "@ptc-org/nestjs-query-graphql";
import { InjectQueryService, QueryService } from "@ptc-org/nestjs-query-core";
import { GraphQLGuard } from "../../core/auth/guards/graphql.guard";
import { BranchSaleChannel, BranchSaleChannelDTO } from "../entities/branch-sale-channel.entity";

const ResolveConfig = { guards: [GraphQLGuard] }

@Resolver(() => BranchSaleChannel)
export class BranchSaleChannelResolver extends CRUDResolver(BranchSaleChannel, {
  CreateDTOClass: BranchSaleChannelDTO,
  UpdateDTOClass: BranchSaleChannelDTO,
  read: ResolveConfig,
  create: ResolveConfig,
  update: ResolveConfig,
  delete: ResolveConfig,
  enableAggregate: true,
  enableTotalCount: true
}) {
  constructor(@InjectQueryService(BranchSaleChannel) override readonly service: QueryService<BranchSaleChannel>) {
    super(service);
  }
}
