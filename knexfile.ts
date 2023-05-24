// Update with your config settings.
import configuraton from './config';
import { Knex } from 'knex';
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

// module.exports = {
// development: {
//   client: 'pg',
//   connection: {
//     filename: './dev.sqlite3'
//   },
// },

const config: { [key: string]: Knex.Config } = {
  development: {
    client: configuraton().db.default.db_client,
    connection: {
      database: configuraton().db.default.name,
      user: configuraton().db.default.username,
      password: configuraton().db.default.password,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/database/migrations',
    },
  },

  production: {
    client: configuraton().db.default.db_client,
    connection: {
      database: configuraton().db.default.name,
      user: configuraton().db.default.username,
      password: configuraton().db.default.password,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};

export default config;
