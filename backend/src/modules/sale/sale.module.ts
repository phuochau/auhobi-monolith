import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DTOs, Entities } from './entities';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { Resolvers } from './resolvers';
import { Services } from './services';
import { InventoryModule } from '../inventory/inventory.module';
import { OrganizationModule } from '../organization/organization.module';
import { CrmModule } from '../crm/crm.module';
import { CoreModule } from '../core/core.module';

@Module({
    imports: [
        TypeOrmModule.forFeature(Entities),
        NestjsQueryGraphQLModule.forFeature({
          imports: [NestjsQueryTypeOrmModule.forFeature(Entities)],
          dtos: [
            ...Entities.map(item => ({ DTOClass: item })),
            ...DTOs.map(item => ({ DTOClass: item }))
          ],
        }),
        CoreModule,
        CrmModule,
        InventoryModule,
        OrganizationModule
      ],
      providers: [
        ...Resolvers,
        ...Services
      ]
})
export class SaleModule {}
