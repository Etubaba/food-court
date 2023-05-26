import { Injectable } from '@nestjs/common';
import { CreateOrderTypeDto } from './dto/create-order_type.dto';
import { UpdateOrderTypeDto } from './dto/update-order_type.dto';

@Injectable()
export class OrderTypesService {
  create(createOrderTypeDto: CreateOrderTypeDto) {
    return 'This action adds a new orderType';
  }

  findAll() {
    return `This action returns all orderTypes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} orderType`;
  }

  update(id: number, updateOrderTypeDto: UpdateOrderTypeDto) {
    return `This action updates a #${id} orderType`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderType`;
  }
}
