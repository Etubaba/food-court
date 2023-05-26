import { Test, TestingModule } from '@nestjs/testing';
import { OrderTypesController } from './order_types.controller';
import { OrderTypesService } from '../service/order_types.service';

describe('OrderTypesController', () => {
  let controller: OrderTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderTypesController],
      providers: [OrderTypesService],
    }).compile();

    controller = module.get<OrderTypesController>(OrderTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
