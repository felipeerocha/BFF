// consorcio.service.ts

import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { Consorcio } from './consorcio.model';
import * as https from 'https'; // Importando o módulo https

@Injectable()
export class ConsorcioService {
  private readonly baseUrl = 'https://localhost:7008/api/Consorcios';  // URL da API REST

  constructor(private readonly http: HttpService) {}

  async findAll(): Promise<Consorcio[]> {
    // Configuração para desabilitar a verificação de certificados SSL
    const config = {
      httpsAgent: new https.Agent({
        rejectUnauthorized: false, // Ignorar a verificação de certificados SSL
      }),
    };
    
    // Fazendo a requisição com a configuração de SSL
    const response = await firstValueFrom(this.http.get<Consorcio[]>(this.baseUrl, config));
    return response.data;
  }

  async findOne(id: number): Promise<Consorcio> {
    const config = {
      httpsAgent: new https.Agent({
        rejectUnauthorized: false, // Ignorar a verificação de certificados SSL
      }),
    };

    const response = await firstValueFrom(this.http.get<Consorcio>(`${this.baseUrl}/${id}`, config));
    return response.data;
  }
}
