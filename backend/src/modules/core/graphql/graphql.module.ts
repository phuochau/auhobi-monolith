import { join } from 'path';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule as ApolloGraphQLModule } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';
import _ from 'lodash';
import { GraphQLFormattedError } from 'graphql';

@Module({
    imports: [
      ApolloGraphQLModule.forRoot<ApolloDriverConfig>({
        driver: ApolloDriver,
        autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        resolvers: { JSON: GraphQLJSON },
        formatError: (error: any) => {
          const graphQLFormattedError: GraphQLFormattedError = {
            message: error.extensions?.exception?.response?.message || error.message
          };
          return graphQLFormattedError;
        }
      }),
    ],
    exports: [GraphqlModule]
  })
export class GraphqlModule {}
