import { Module } from '@nestjs/common';
import { ConsorcioResolver } from './consorcio.resolver';
import { ConsorcioService } from './consorcio.service';
import { HttpModule } from '@nestjs/axios'; // Certifique-se de que está importando do pacote correto

@Module({
  imports: [HttpModule],  // Corrigido
  providers: [ConsorcioResolver, ConsorcioService],
})
export class ConsorcioModule {}
