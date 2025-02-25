import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {HttpExceptionFilter} from "./core/filter/http-exception/http-exception.filter";
import {TransformInterceptor} from "./core/interceptor/transform/transform.interceptor";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {ValidationPipe} from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Set global prefix
  app.setGlobalPrefix('api');

  // Register Global Exception Filter for Error Responses
  app.useGlobalFilters(new HttpExceptionFilter());

  // Register Global Interceptor for Success Responses
  app.useGlobalInterceptors(new TransformInterceptor());

  // Register Global Validation Pipe
  app.useGlobalPipes(new ValidationPipe());

  // Setup Swagger/OpenAPI
  const config = new DocumentBuilder()
    .setTitle('Simple CRUD API')
    .setDescription('The Simple CRUD API description')
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, documentFactory);


  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
