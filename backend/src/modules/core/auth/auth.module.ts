import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DTOs, Entities } from './entities';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { Resolvers } from './resolvers';
import { Services } from './services';
import { JwtModule } from '@nestjs/jwt';
import { Strategies } from './strategies';
import { EmailModule } from '../email/email.module'

@Module({
  imports: [
    TypeOrmModule.forFeature(Entities),
    JwtModule.register({
      global: true,
      secret: process.env.AUTH_JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXPIRES_IN },
    }),
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature(Entities)],
      dtos: [
        ...Entities.map(item => ({ DTOClass: item })),
        ...DTOs.map(item => ({ DTOClass: item }))
      ],
    }),
    EmailModule
  ],
  providers: [
    ...Services,
    ...Strategies,
    ...Resolvers
  ]
})
export class AuthModule {}
