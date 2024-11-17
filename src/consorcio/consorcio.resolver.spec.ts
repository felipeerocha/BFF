import { Test, TestingModule } from '@nestjs/testing';
import { ConsorcioResolver } from './consorcio.resolver';

describe('ConsorcioResolver', () => {
  let resolver: ConsorcioResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConsorcioResolver],
    }).compile();

    resolver = module.get<ConsorcioResolver>(ConsorcioResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
