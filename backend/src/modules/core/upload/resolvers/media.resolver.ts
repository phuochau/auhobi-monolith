import { Resolver } from "@nestjs/graphql";
import { CRUDResolver } from "@ptc-org/nestjs-query-graphql";
import { InjectQueryService, QueryService } from "@ptc-org/nestjs-query-core";
import { Media, MediaDTO } from "../entities/media.entity";
import { GraphQLGuard } from "../../auth/guards/graphql.guard";

const ResolveConfig = { guards: [GraphQLGuard] }

@Resolver(() => Media)
export class MediaResolver extends CRUDResolver(Media, {
  CreateDTOClass: MediaDTO,
  UpdateDTOClass: MediaDTO,
  read: ResolveConfig,
  create: ResolveConfig,
  update: ResolveConfig,
  delete: ResolveConfig,
  enableAggregate: true,
  enableTotalCount: true
}) {
  constructor(
    @InjectQueryService(Media) override readonly service: QueryService<Media>
  ) {
    super(service);
  }
}
