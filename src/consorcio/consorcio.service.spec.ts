import { Test, TestingModule } from '@nestjs/testing';
import { ConsorcioService } from './consorcio.service';

describe('ConsorcioService', () => {
  let service: ConsorcioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConsorcioService],
    }).compile();

    service = module.get<ConsorcioService>(ConsorcioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
