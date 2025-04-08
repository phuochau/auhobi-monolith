import { DynamicModule, Module } from '@nestjs/common';
import { utilities as nestWinstonModuleUtilities, WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import { LoggerService } from './services/logger.service';

@Module({})
export class LoggerModule {
  static forRoot(): DynamicModule {
    return {
      module: LoggerModule,
      imports: [
        WinstonModule.forRoot({
            transports: [
                new winston.transports.Console({
                    format: winston.format.combine(
                        winston.format.timestamp(),
                        winston.format.ms(),
                        nestWinstonModuleUtilities.format.nestLike(process.env.LOGGER_APP, {
                            colors: true,
                            prettyPrint: true,
                            processId: true,
                            appName: true,
                        }),
                    ),
                }),
            // other transports...
            ],
            // other options
        }),
      ],
      providers: [LoggerService],
      exports: [LoggerService],
    };
  }
}
