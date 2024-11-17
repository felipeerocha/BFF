import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Cota {
  @Field(() => Int)
  id: number;

  @Field()
  numeroCota: string;

  @Field()
  tipo: string;

  @Field()
  status: string;

  @Field()
  valor: number;
}
