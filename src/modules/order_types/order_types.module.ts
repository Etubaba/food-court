import { Module } from '@nestjs/common';
import { OrderTypesService } from './order_types.service';
import { OrderTypesController } from './order_types.controller';

@Module({
  controllers: [OrderTypesController],
  providers: [OrderTypesService],
})
export class OrderTypesModule {}
