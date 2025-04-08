import { Resolver } from "@nestjs/graphql";
import { User, UserDTO } from "../entities/user.entity";
import { CRUDResolver } from "@ptc-org/nestjs-query-graphql";
import { InjectQueryService, QueryService } from "@ptc-org/nestjs-query-core";
import { GraphQLGuard } from "src/modules/core/auth/guards/graphql.guard";

const ResolveConfig = { guards: [GraphQLGuard] }

@Resolver(() => User)
export class UserResolver extends CRUDResolver(User, {
  CreateDTOClass: UserDTO,
  UpdateDTOClass: UserDTO,
  read: ResolveConfig,
  create: ResolveConfig,
  update: ResolveConfig,
  delete: ResolveConfig,
  enableAggregate: true,
  enableTotalCount: true
}) {
  constructor(@InjectQueryService(User) override readonly service: QueryService<User>) {
    super(service);
  }
}
