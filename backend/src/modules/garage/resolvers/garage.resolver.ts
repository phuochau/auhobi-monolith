import { Resolver } from "@nestjs/graphql";
import { CRUDResolver } from "@ptc-org/nestjs-query-graphql";
import { InjectQueryService, QueryService } from "@ptc-org/nestjs-query-core";
import { Garage, GarageDTO } from "../entities/garage.entity";
import { GraphQLGuard } from "src/modules/core/auth/guards/graphql.guard";

const ResolveConfig = { guards: [GraphQLGuard] }

@Resolver(() => Garage)
export class GarageResolver extends CRUDResolver(Garage, {
  CreateDTOClass: GarageDTO,
  UpdateDTOClass: GarageDTO,
  read: ResolveConfig,
  create: ResolveConfig,
  update: ResolveConfig,
  delete: ResolveConfig,
  enableAggregate: true,
  enableTotalCount: true
}) {
  constructor(
    @InjectQueryService(Garage) override readonly service: QueryService<Garage>
  ) {
    super(service);
  }
}
