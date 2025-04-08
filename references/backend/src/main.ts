require('dotenv').config()
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerService } from './modules/core/logger/services/logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
    bufferLogs: true
  });
  
  app.useLogger(app.get(LoggerService));
  await app.listen(process.env.PORT || 3001);
}
bootstrap();
