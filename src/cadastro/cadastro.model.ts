import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';

// Modelo Cadastro para GraphQL
@ObjectType()
export class Cadastro {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  cotaId: number;

  @Field(() => Int)
  numeroCota: number;

  @Field()
  nomeUsuario: string;

  @Field()
  contato: string;

  @Field()
  parcelamento: string;

  @Field()
  tipo: string;

  @Field()
  valor: number;

  @Field()
  dataCadastro: string; // No formato ISO
}

// Entrada para criar um Cadastro
@InputType()
export class CreateCadastroInput {
  @Field(() => Int)
  cotaId: number;

  @Field(() => Int)
  numeroCota: number;

  @Field()
  nomeUsuario: string;

  @Field()
  contato: string;

  @Field()
  parcelamento: string;

  @Field()
  tipo: string;

  @Field()
  valor: number;
}

// Entrada para atualizar um Cadastro
@InputType()
export class UpdateCadastroInput {
  @Field({ nullable: true })
  nomeUsuario?: string;

  @Field({ nullable: true })
  contato?: string;

  @Field({ nullable: true })
  parcelamento?: string;
}
