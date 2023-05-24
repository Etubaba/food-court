// Update with your config settings.
import configuraton from '../../config';
import { Knex } from 'knex';
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

// module.exports = {
// development: {
//   client: 'pg',
//   connection: {
//     filename: './dev.sqlite3',
//   },
// },

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'postgresql',
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
      directory: './migrations',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
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
