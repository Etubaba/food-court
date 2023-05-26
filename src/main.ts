import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import configuration from '../config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(configuration().app.global_url_prefix);
  app.enableCors(configuration().cors);

  await app.listen(3010);
}
bootstrap();
