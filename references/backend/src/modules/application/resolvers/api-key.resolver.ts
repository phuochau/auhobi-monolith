import { Resolver } from "@nestjs/graphql";
import { CRUDResolver } from "@ptc-org/nestjs-query-graphql";
import { InjectQueryService, QueryService } from "@ptc-org/nestjs-query-core";
import { ApiKey, ApiKeyDTO } from "../entities/api-key.entity";
import { GraphQLGuard } from "../../core/auth/guards/graphql.guard";

const ResolveConfig = { guards: [GraphQLGuard] }

@Resolver(() => ApiKey)
export class ApiKeyResolver extends CRUDResolver(ApiKey, {
  CreateDTOClass: ApiKeyDTO,
  UpdateDTOClass: ApiKeyDTO,
  read: ResolveConfig,
  create: ResolveConfig,
  update: ResolveConfig,
  delete: ResolveConfig,
  enableAggregate: true,
  enableTotalCount: true
}) {
  constructor(@InjectQueryService(ApiKey) override readonly service: QueryService<ApiKey>) {
    super(service);
  }
}
