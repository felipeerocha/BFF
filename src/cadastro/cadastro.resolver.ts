import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CadastroService } from './cadastro.service';
import { Cadastro, CreateCadastroInput, UpdateCadastroInput } from './cadastro.model';

@Resolver(() => Cadastro)
export class CadastroResolver {
  constructor(private readonly cadastroService: CadastroService) {}

  @Query(() => [Cadastro])
  async getCadastros(
    @Args('username') username: string,
    @Args('numeroCota') numeroCota: string,
  ) {
    return this.cadastroService.findAll(username, numeroCota);
  }

  @Query(() => Cadastro)
  async getCadastro(
    @Args('id') id: number,
    @Args('username') username: string,
    @Args('numeroCota') numeroCota: string,
  ) {
    return this.cadastroService.findOne(id, username, numeroCota);
  }

  @Mutation(() => Cadastro)
  async createCadastro(@Args('input') input: CreateCadastroInput) {
    return this.cadastroService.create(input);
  }

  @Mutation(() => Cadastro)
  async updateCadastro(
    @Args('id') id: number, // O ID é passado como argumento obrigatório
    @Args('input') input: UpdateCadastroInput, // Campos específicos atualizáveis
  ) {
    return this.cadastroService.update(id, input);
  }

  @Mutation(() => Boolean)
  async deleteCadastro(@Args('id') id: number) {
    return this.cadastroService.delete(id);
  }
}
