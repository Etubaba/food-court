import { Controller, Get } from '@nestjs/common';
import { OrderService } from '../services/order.service';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  async findAllWithRelations(): Promise<any[]> {
    return this.orderService.findAllWithRelations();
  }
}
