import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('orderTotalAmountHistory', (table) => {
    table.increments('id').primary();
    table.datetime('time', { useTz: true }).defaultTo(knex.fn.now())
      .notNullable;
    table.bigInteger('total_amount').notNullable;
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('orderTotalAmountHistory');
}
