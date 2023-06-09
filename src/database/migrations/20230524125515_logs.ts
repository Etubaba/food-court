import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('logs', (table) => {
    table.increments('id').primary();
    table.datetime('time', { useTz: true }).defaultTo(knex.fn.now())
      .notNullable;
    table.string('description').notNullable;
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('logs');
}
