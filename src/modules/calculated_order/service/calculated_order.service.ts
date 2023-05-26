import { Injectable } from '@nestjs/common';

@Injectable()
export class CalculatedOrderService {
  create() {
    return 'This action adds a new orderType';
  }

  findAll() {
    return `This action returns all orderTypes`;
  }
}
