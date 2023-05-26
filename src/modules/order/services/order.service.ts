import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectModel } from 'nest-knexjs';
import { CreateOrderTypeDto } from '../dto/order.dto';
import { RabbitMQService } from 'src/modules/rabbitMQ/service/rabbitmq.service';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel() private readonly knex: Knex,
    private readonly rabbitMQService: RabbitMQService,
  ) {}

  async findAllWithRelations(): Promise<any[]> {
    const query = `
      SELECT *
      FROM orders AS o
      LEFT JOIN logs AS l ON l.order_id = o.id
      LEFT JOIN orderType AS ot ON ot.id = o.order_type_id
      LEFT JOIN orderTotalAmountHistory AS oth ON oth.order_id = o.id
      LEFT JOIN calculated_order AS co ON co.order_id = o.id
      LEFT JOIN users AS u ON u.id = o.user_id
    `;

    return this.knex.raw(query).then((result) => result.rows);
  }

  async createOrder(order: CreateOrderTypeDto) {
    const query = `
      INSERT INTO orders (
        user_id, completed, cancelled, kitchen_cancelled, kitchen_accepted,
        kitchen_dispatched, kitchen_dispatched_time, completed_time, rider_id,
        kitchen_prepared, rider_assigned, paid, order_code, order_change,
        calculated_order_id, kitchen_verified_time, kitchen_completed_time,
        shop_accepted, shop_prepared, no_of_mealbags_delivered,
        no_of_drinks_delivered, rider_started_time, rider_started,
        rider_arrived_time, rider_arrived, is_failed_trip,
        failed_trip_details, box_number, shelf_id
      )
      VALUES (
        :user_id, :completed, :cancelled, :kitchen_cancelled, :kitchen_accepted,
        :kitchen_dispatched, :kitchen_dispatched_time, :completed_time, :rider_id,
        :kitchen_prepared, :rider_assigned, :paid, :order_code, :order_change,
        :calculated_order_id, :kitchen_verified_time, :kitchen_completed_time,
        :shop_accepted, :shop_prepared, :no_of_mealbags_delivered,
        :no_of_drinks_delivered, :rider_started_time, :rider_started,
        :rider_arrived_time, :rider_arrived, :is_failed_trip,
        :failed_trip_details, :box_number, :shelf_id
      )
      RETURNING *;
    `;

    const createOrder = this.knex
      .raw(query, order)
      .then((result) => result.rows[0]);

    await this.rabbitMQService.startListening();
    return createOrder;
  }
}
