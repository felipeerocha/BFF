import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ConsorcioModule } from './consorcio/consorcio.module';
import { CotasModule } from './cotas/cotas.module';
import { HttpModule } from '@nestjs/axios'; // Certifique-se de importar o HttpModule
import { CadastroModule } from './cadastro/cadastro.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    CadastroModule,
    ConsorcioModule,
    CotasModule,
    HttpModule,  // Garanta que o HttpModule esteja aqui para o uso do HttpService
  ],
})
export class AppModule {}
