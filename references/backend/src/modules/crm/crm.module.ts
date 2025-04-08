import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DTOs, Entities } from './entities';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { Services } from './services';
import { Resolvers } from './resolvers';

@Module({
    imports: [
      TypeOrmModule.forFeature(Entities),
      NestjsQueryGraphQLModule.forFeature({
        imports: [NestjsQueryTypeOrmModule.forFeature(Entities)],
        dtos: [
          ...Entities.map(item => ({ DTOClass: item })),
          ...DTOs.map(item => ({ DTOClass: item }))
        ],
      })
    ],
    providers: [
      ...Services,
      ...Resolvers
    ],
    exports: [
        ...Services
    ]
})
export class CrmModule {}
