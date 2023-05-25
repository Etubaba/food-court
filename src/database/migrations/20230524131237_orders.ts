import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  //   : '1',

  return knex.schema.createTable('order', (table) => {
    table.increments('id').primary();
    table.integer('user_id').notNullable;
    table.integer('rider_id').notNullable;
    table.integer('shelf_id').nullable;

    //relation to calculated_order
    table.integer('calculated_order_id').unsigned();
    table.foreign('calculated_order_id').references('calculated_order.id');

    //relation to logs
    table.integer('logs').unsigned();
    table.foreign('logs').references('logs.id');

    //relation to order Type
    table.integer('orderType').unsigned();
    table.foreign('orderType').references('orderType.id');
    //relation to orderTotalAmountHistory
    table.integer('orderTotalAmountHistory').unsigned();
    table
      .foreign('orderTotalAmountHistory')
      .references('orderTotalAmountHistory.id');

    table.integer('no_of_mealbags_delivered').defaultTo(0);
    table.integer('no_of_drinks_delivered').defaultTo(0);
    table.integer('confirmed_by_id').nullable;
    table.string('box_number').notNullable;
    table.integer('completed_by_id').nullable;
    table.boolean('scheduled').nullable;
    table.boolean('completed').notNullable;
    table.boolean('cancelled').notNullable;
    table.boolean('shop_accepted').notNullable;
    table.boolean('shop_prepared').notNullable;
    table.boolean('is_failed_trip').notNullable;
    table.boolean('kitchen_prepared').notNullable;
    table.boolean('kitchen_cancelled').notNullable;
    table.boolean('rider_assigned').notNullable;
    table.boolean('rider_arrived').notNullable;
    table.boolean('is_hidden').notNullable;
    table.datetime('rider_arrived_time', { useTz: true }).nullable;
    table.boolean('rider_started').notNullable;
    table.boolean('paid').notNullable;
    table.boolean('kitchen_dispatch').nullable;
    table.string('order_code').notNullable;
    table.json('failed_trip_details').nullable;
    table.string('order_change').nullable;
    table.datetime('scheduled_delivery_date', { useTz: true }).nullable;
    table.datetime('scheduled_delivery_time').nullable;
    table.datetime('rider_started_time', { useTz: true }).nullable;
    table.datetime('kitchen_completed_time', { useTz: true }).nullable;
    table.datetime('kitchen_verified_time', { useTz: true }).nullable;
    table.datetime('kitchen_dispatch_time', { useTz: true }).nullable;
    table.datetime('completed_time', { useTz: true }).nullable;
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('order');
}
