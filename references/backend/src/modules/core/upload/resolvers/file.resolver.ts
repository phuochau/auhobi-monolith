import { Resolver } from "@nestjs/graphql";
import { CRUDResolver } from "@ptc-org/nestjs-query-graphql";
import { InjectQueryService, QueryService } from "@ptc-org/nestjs-query-core";
import { GraphQLGuard } from "../../auth/guards/graphql.guard";
import { File, FileDTO } from "../entities/file.entity";

const ResolveConfig = { guards: [GraphQLGuard] }

@Resolver(() => File)
export class FileResolver extends CRUDResolver(File, {
  CreateDTOClass: FileDTO,
  UpdateDTOClass: FileDTO,
  read: ResolveConfig,
  create: ResolveConfig,
  update: ResolveConfig,
  delete: ResolveConfig,
  enableAggregate: true,
  enableTotalCount: true
}) {
  constructor(
    @InjectQueryService(File) override readonly service: QueryService<File>
  ) {
    super(service);
  }
}
