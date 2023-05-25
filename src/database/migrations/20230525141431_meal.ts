import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('meal', (table) => {
    table.increments('id').primary();
    table.boolean('new').notNullable;
    table.string('name').notNullable;
    table.json('brand').notNullable;
    table.boolean('active').notNullable;
    table.string('order_note').notNullable;
    table.json('addons').notNullable;
    table.json('meal_keywords').notNullable;
    table.json('posist_data').notNullable;
    table.json('meal_tags').notNullable;
    table.bigInteger('amount').notNullable;
    table.string('meal_category_id').notNullable;
    table.string('description').notNullable;
    table.boolean('alcohol').nullable;
    table.boolean('is_deleted').nullable;
    table.integer('internal_profit').nullable;
    table.integer('available_no').nullable;
    table.integer('item_no').nullable;
    table.string('summary').nullable;
    table.string('calories').nullable;
    table.string('item_type').nullable;
    table.boolean('is_addon').nullable;
    table.boolean('is_combo').nullable;
    table.integer('brand_id').nullable;
    table.integer('position').nullable;
    table.integer('minimum_age').nullable;
    table.integer('quantity').nullable;
    table.integer('home_page').nullable;
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('meal');
}
