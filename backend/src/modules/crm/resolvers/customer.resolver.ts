import { Resolver } from "@nestjs/graphql";
import { CRUDResolver } from "@ptc-org/nestjs-query-graphql";
import { InjectQueryService, QueryService } from "@ptc-org/nestjs-query-core";
import { Customer, CustomerDTO } from "../entities/customer.entity";
import { GraphQLGuard } from "src/modules/core/auth/guards/graphql.guard";

const ResolveConfig = { guards: [GraphQLGuard] }

@Resolver(() => Customer)
export class CustomerResolver extends CRUDResolver(Customer, {
  CreateDTOClass: CustomerDTO,
  UpdateDTOClass: CustomerDTO,
  read: ResolveConfig,
  create: ResolveConfig,
  update: ResolveConfig,
  delete: ResolveConfig,
  enableAggregate: true,
  enableTotalCount: true
}) {
  constructor(
    @InjectQueryService(Customer) override readonly service: QueryService<Customer>
  ) {
    super(service);
  }
}
