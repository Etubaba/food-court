import { Test, TestingModule } from '@nestjs/testing';
import { OrderController } from './order.controller';
import { OrderService } from '../services/order.service';

describe('OrderController', () => {
  let controller: OrderController;
  let service: OrderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderController],
      providers: [OrderService],
    }).compile();

    controller = module.get<OrderController>(OrderController);
    service = module.get<OrderService>(OrderService);
  });

  it('should return all orders with related tables', async () => {
    const orders = []; // Add sample order data here

    jest.spyOn(service, 'findAllWithRelations').mockResolvedValue(orders);

    const result = await controller.findAllWithRelations();

    expect(result).toBe(orders);
  });
});
