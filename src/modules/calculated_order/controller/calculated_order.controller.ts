import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CalculatedOrderService } from '../service/calculated_order.service';
// import { CreateOrderTypeDto } from '../dto/create-order_type.dto';

@Controller('order-types')
export class CalculatedOrderController {
  constructor(
    private readonly calculatedOrderService: CalculatedOrderService,
  ) {}

  @Get()
  findAll() {
    return this.calculatedOrderService.findAll();
  }
}
