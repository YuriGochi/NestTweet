import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder().setTitle('Tweet Estudos').build();
  const document = SwaggerModule.createDocument(app, config);
  const port = process.env.PORT || 3334;

  SwaggerModule.setup('doc', app, document, { swaggerOptions: { defaultModelsExpandDepth: -1 } });

  await app.listen(port);
  
}
bootstrap();


