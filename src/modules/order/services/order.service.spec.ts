import { Test, TestingModule } from '@nestjs/testing';
import { OrderService } from './order.service';

describe('OrderService', () => {
  let service: OrderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderService],
    }).compile();

    service = module.get<OrderService>(OrderService);
  });

  it('should return all orders with related tables', async () => {
    const orders = await service.findAllWithRelations();

    expect(orders).toBeDefined();
    expect(Array.isArray(orders)).toBe(true);
  });
});
