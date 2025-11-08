import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
   app.useGlobalPipes(new ValidationPipe(
    {
      // whitelist: true, // to strip any properties that are not in the DTO
      forbidNonWhitelisted: true, // to throw an error if any properties are not in the DTO
      transform: true, // to transform the payload to be an instance of the DTO class
      transformOptions: {
        enableImplicitConversion: true, // to enable implicit conversion of types
        // e.g. string to number, string to boolean, etc. and we don't need to use @Type(() => Number) in the DTO
      }
    }
  ));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
