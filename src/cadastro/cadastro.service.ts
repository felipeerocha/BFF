import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';
import * as https from 'https';
import { Cadastro, CreateCadastroInput, UpdateCadastroInput } from './cadastro.model';

@Injectable()
export class CadastroService {
  private readonly apiUrl = 'https://localhost:7008/api/Cadastro';

  private readonly httpsAgent = new https.Agent({
    rejectUnauthorized: false,
  });

  async findAll(username: string, numeroCota: string): Promise<Cadastro[]> {
    try {
      const credentials = Buffer.from(`${username}:${numeroCota}`).toString('base64');
      const config = {
        headers: { Authorization: `Basic ${credentials}` },
        httpsAgent: this.httpsAgent,
      };
      const response = await axios.get(this.apiUrl, config);
      return response.data;
    } catch (error) {
      throw new HttpException('Erro ao buscar cadastros', HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: number, username: string, numeroCota: string): Promise<Cadastro> {
    try {
      const credentials = Buffer.from(`${username}:${numeroCota}`).toString('base64');
      const config = {
        headers: { Authorization: `Basic ${credentials}` },
        httpsAgent: this.httpsAgent,
      };
      const response = await axios.get(`${this.apiUrl}/${id}`, config);
      return response.data;
    } catch (error) {
      throw new HttpException('Cadastro não encontrado', HttpStatus.NOT_FOUND);
    }
  }

  async create(input: CreateCadastroInput): Promise<Cadastro> {
    try {
      const config = { httpsAgent: this.httpsAgent };
      const response = await axios.post(this.apiUrl, input, config);
      return response.data;
    } catch (error) {
      throw new HttpException('Erro ao criar cadastro', HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: number, input: UpdateCadastroInput): Promise<Cadastro> {
    try {
      const config = { httpsAgent: this.httpsAgent };
      const response = await axios.put(`${this.apiUrl}/${id}`, input, config);
      return response.data;
    } catch (error) {
      throw new HttpException('Erro ao atualizar cadastro', HttpStatus.BAD_REQUEST);
    }
  }

  async delete(id: number): Promise<boolean> {
    try {
      const config = { httpsAgent: this.httpsAgent };
      await axios.delete(`${this.apiUrl}/${id}`, config);
      return true;
    } catch (error) {
      throw new HttpException('Erro ao deletar cadastro', HttpStatus.BAD_REQUEST);
    }
  }
}
