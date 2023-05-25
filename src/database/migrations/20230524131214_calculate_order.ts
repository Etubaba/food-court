import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('calculated_order', (table) => {
    table.increments('id').primary();
    table.string('total_amount').notNullable;
    table.string('lat').notNullable;
    table.string('lng').notNullable;
    table.string('prev_price').nullable;
    table.string('service_charge').nullable;
    table.integer('cokitchen_polygon_id').notNullable;
    table.boolean('pickup').notNullable;
    table.boolean('free_delivery').notNullable;
    table.string('delivery_fee').notNullable;
    table.integer('user_id').notNullable;
    table.json('address_details').nullable;
    //relation to meal table
    table.integer('meal').unsigned();
    table.foreign('meal').references('meal.id');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('calculated_order');
}
