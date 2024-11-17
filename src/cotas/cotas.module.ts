import { Module } from '@nestjs/common';
import { CotasResolver } from './cotas.resolver';
import { CotasService } from './cotas.service';
import { HttpModule } from '@nestjs/axios'; // Certifique-se de que está importando do pacote correto

@Module({
  imports: [HttpModule],  // Corrigido
  providers: [CotasResolver, CotasService],
})
export class CotasModule {}
