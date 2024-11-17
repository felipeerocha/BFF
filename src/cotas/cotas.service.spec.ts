import { Test, TestingModule } from '@nestjs/testing';
import { CotasService } from './cotas.service';

describe('CotasService', () => {
  let service: CotasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CotasService],
    }).compile();

    service = module.get<CotasService>(CotasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
