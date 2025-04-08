import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { Entities, DTOs } from './entities';
import { Resolvers } from './resolves';

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
    ...Resolvers
  ],
  exports: [
  ]
})
export class EndUserModule {}
