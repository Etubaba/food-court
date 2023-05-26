import { Module } from '@nestjs/common';
import { OrderService } from './services/order.service';
import { OrderController } from './controllers/order.controller';

@Module({
  // imports: [OrderService],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
