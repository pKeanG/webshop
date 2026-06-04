import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe, Logger } from '@nestjs/common';
import helmet from 'helmet';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  const logger = new Logger('Bootstrap');

  const prefix = process.env.API_PREFIX ?? '/api/v1';
  const port = Number.parseInt(process.env.PORT ?? '4000', 10);
  const corsOrigin = process.env.CORS_ORIGIN ?? 'http://localhost:3000';

  app.use(helmet());
  app.enableCors({ origin: corsOrigin, credentials: true });
  app.setGlobalPrefix(prefix);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await app.listen(port);
  logger.log(`Webshop GameFi backend listening on http://localhost:${port}${prefix}`);
}

void bootstrap();
