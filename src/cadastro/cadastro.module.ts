import { Module } from '@nestjs/common';
import { CadastroResolver } from './cadastro.resolver'; // Resolver responsável pelas consultas GraphQL (ou REST)
import { CadastroService } from './cadastro.service'; // Serviço com a lógica de negócios
import { HttpModule } from '@nestjs/axios'; // Adiciona suporte para chamadas HTTP

@Module({
  imports: [HttpModule], // Importa o módulo HTTP para usar o HttpService
  providers: [CadastroResolver, CadastroService], // Registra o resolver e o serviço
})
export class CadastroModule {}
