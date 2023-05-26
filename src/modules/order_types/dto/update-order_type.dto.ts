import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderTypeDto } from './create-order_type.dto';

export class UpdateOrderTypeDto extends PartialType(CreateOrderTypeDto) {}
