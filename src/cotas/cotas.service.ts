// cotas.service.ts

import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios'; // Importando corretamente o HttpService
import { firstValueFrom } from 'rxjs';  // Para converter o Observable para uma Promise
import { Cota } from './cotas.model';
import * as https from 'https'; // Importando o módulo https

@Injectable()
export class CotasService {
  private readonly baseUrl = 'https://localhost:7008/api/Cotas'; // Corrigido para HTTPS

  constructor(private readonly http: HttpService) {}

  async findAll(): Promise<Cota[]> {
    const config = {
      httpsAgent: new https.Agent({
        rejectUnauthorized: false, // Ignorar a verificação de certificados SSL
      }),
    };

    const response = await firstValueFrom(this.http.get<Cota[]>(this.baseUrl, config));
    return response.data;
  }

  async findOne(id: number): Promise<Cota> {
    const config = {
      httpsAgent: new https.Agent({
        rejectUnauthorized: false, // Ignorar a verificação de certificados SSL
      }),
    };

    const response = await firstValueFrom(this.http.get<Cota>(`${this.baseUrl}/${id}`, config));
    return response.data;
  }
}
