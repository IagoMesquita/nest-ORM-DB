import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();

/*
  whitelist: lista de pesmissões das propriedade que vem na req, são os dto's definidos
  forbidNonWhitelisted: só permitem que venham os dados da req definidos na whitelist
  transform: faz  com que os objetos que venham das rotas, nesse caso, create e update, 
    sejam do tipo definido nos dto's.
*/
