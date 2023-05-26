import { Module } from '@nestjs/common';
import { OrderTypesService } from './service/order_types.service';
import { OrderTypesController } from './controller/order_types.controller';

@Module({
  controllers: [OrderTypesController],
  providers: [OrderTypesService],
})
export class OrderTypesModule {}
