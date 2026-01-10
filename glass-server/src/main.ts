import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

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

  const options = new DocumentBuilder()
    .setTitle('GlassStore API')
    .setDescription('The GlassStore API description')
    .setVersion('1.0')
    .addTag('Glasses')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
      },
      'JWT-auth', // This is the key name for the security scheme
    )
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

// USER
// {
//   "firstName": "test",
//   "lastName": "test",
//   "email": "test@example.com",
//   "password": "12341234",
//   "phoneNumber": "+213541400197"
// }