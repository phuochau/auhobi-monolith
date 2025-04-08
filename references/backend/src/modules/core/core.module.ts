import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { GraphqlModule } from './graphql/graphql.module';
import { UploadModule } from './upload/upload.module';
import { AuthModule } from './auth/auth.module';
import { LoggerModule } from './logger/logger.module';
import { EmailModule } from './email/email.module';

@Module({
  imports: [
    DatabaseModule,
    GraphqlModule,
    LoggerModule.forRoot(),
    EmailModule,
    AuthModule,
    UploadModule
  ],
  exports: [
    LoggerModule,
    UploadModule
  ]
})
export class CoreModule {}
