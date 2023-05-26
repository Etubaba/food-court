import { Module } from '@nestjs/common';
import { CalculatedOrderService } from './service/calculated_order.service';
import { CalculatedOrderController } from './controller/calculated_order.controller';

@Module({
  controllers: [CalculatedOrderController],
  providers: [CalculatedOrderService],
})
export class CalculatedModule {}
