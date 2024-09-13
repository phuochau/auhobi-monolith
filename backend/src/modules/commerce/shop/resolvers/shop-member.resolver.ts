import { Resolver } from "@nestjs/graphql";
import { CRUDResolver } from "@ptc-org/nestjs-query-graphql";
import { InjectQueryService, QueryService } from "@ptc-org/nestjs-query-core";
import { GraphQLGuard } from "../../../core/auth/guards/graphql.guard";
import { ShopMember, ShopMemberDTO } from "../entities/shop-member.entity";

const ResolveConfig = { guards: [GraphQLGuard] }

@Resolver(() => ShopMember)
export class ShopMemberResolver extends CRUDResolver(ShopMember, {
  CreateDTOClass: ShopMemberDTO,
  UpdateDTOClass: ShopMemberDTO,
  read: ResolveConfig,
  create: ResolveConfig,
  update: ResolveConfig,
  delete: ResolveConfig,
  enableAggregate: true,
  enableTotalCount: true
}) {
  constructor(@InjectQueryService(ShopMember) override readonly service: QueryService<ShopMember>) {
    super(service);
  }
}
