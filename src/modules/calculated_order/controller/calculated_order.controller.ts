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

@Controller('calculated orders')
export class CalculatedOrderController {
  constructor(
    private readonly calculatedOrderService: CalculatedOrderService,
  ) {}

  @Get()
  findAll() {
    return this.calculatedOrderService.findAll();
  }

  @Get('meal')
  getMostOrderedMeal() {
    return this.calculatedOrderService.findTopMostOrderedMeal();
  }
}
