import { Test, TestingModule } from '@nestjs/testing';
import { CadastroResolver } from './cadastro.resolver';

describe('CadastroResolver', () => {
  let resolver: CadastroResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CadastroResolver],
    }).compile();

    resolver = module.get<CadastroResolver>(CadastroResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
