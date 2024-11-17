import { Test, TestingModule } from '@nestjs/testing';
import { CotasResolver } from './cotas.resolver';

describe('CotasResolver', () => {
  let resolver: CotasResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CotasResolver],
    }).compile();

    resolver = module.get<CotasResolver>(CotasResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
