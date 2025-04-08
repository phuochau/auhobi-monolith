import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { DTOs, Entities } from './entities';
import { Resolvers } from './resolvers';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { Services } from './services';
import { CoreModule } from '../../core/core.module';
import { OrganizationModule } from '../../organization/organization.module';

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
      OrganizationModule
    ],
    providers: [
      ...Resolvers,
      ...Services
    ],
    exports: [
      ...Services
    ]
})
export class InventoryModule {}
