import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { ConsorcioService } from './consorcio.service';
import { Consorcio } from './consorcio.model';

@Resolver(() => Consorcio)
export class ConsorcioResolver {
  constructor(private readonly consorcioService: ConsorcioService) {}

  @Query(() => [Consorcio], { name: 'getConsorcios' })
  async findAll(): Promise<Consorcio[]> {
    return this.consorcioService.findAll();
  }

  @Query(() => Consorcio, { name: 'getConsorcio' })
  async findOne(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Consorcio> {
    return this.consorcioService.findOne(id);
  }
}
