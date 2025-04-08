import { Module } from '@nestjs/common';
import { Resolvers } from './resolvers';

@Module({
  imports: [
    ...Resolvers
  ],
  exports: [
  ]
})
export class SharedModule {}