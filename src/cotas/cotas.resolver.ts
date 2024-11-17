import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { CotasService } from './cotas.service';
import { Cota } from './cotas.model';

@Resolver(() => Cota)
export class CotasResolver {
  constructor(private readonly cotasService: CotasService) {}

  @Query(() => [Cota], { name: 'getCotas' })
  async findAll(): Promise<Cota[]> {
    return this.cotasService.findAll();
  }

  @Query(() => Cota, { name: 'getCota' })
  async findOne(@Args('id', { type: () => Int }) id: number): Promise<Cota> {
    return this.cotasService.findOne(id);
  }
}
 