import { Module } from '@nestjs/common';
import { DTOs, Entities } from './entities';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Resolvers } from './resolvers';
import { Services } from './services';
import { Strategies } from './strategies';

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
    ],
    providers: [
        ...Services,
        ...Strategies,
        ...Resolvers
    ],
    exports: [
        ...Services
    ]
})
export class ApplicationModule {}
