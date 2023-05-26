import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';

@Injectable()
export class OrderService {
  constructor(private readonly knex: Knex) {}

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
}
