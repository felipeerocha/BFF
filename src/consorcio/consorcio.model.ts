import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Consorcio {
  @Field(() => Int)
  id: number;

  @Field()
  titulo: string;  

  @Field()
  tipo: string;  

  @Field(() => Int)
  valor: number;

  @Field(() => Int)
  quantidadeCotas: number;  
}
