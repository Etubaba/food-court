import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OrderTypesService } from '../service/order_types.service';
import { CreateOrderTypeDto } from '../dto/create-order_type.dto';

@Controller('order-types')
export class OrderTypesController {
  constructor(private readonly orderTypesService: OrderTypesService) {}

  @Post()
  create(@Body() createOrderTypeDto: CreateOrderTypeDto) {
    return this.orderTypesService.create(createOrderTypeDto);
  }

  @Get()
  findAll() {
    return this.orderTypesService.findAll();
  }
}
