import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Desabilitar a verificação de certificado SSL em ambiente de desenvolvimento
if (process.env.NODE_ENV === 'development') {
  console.log("Desabilitando verificação de SSL");
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';  // Somente para desenvolvimento
} else {
  console.log("Modo produção. Verificação de SSL ativa.");
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
