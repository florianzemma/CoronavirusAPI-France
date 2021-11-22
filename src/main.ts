import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const host = '0.0.0.0';
  await app.listen(parseInt(process.env.PORT, 10) || 3000, host);
}
bootstrap();
