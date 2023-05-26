import * as dotenv from 'dotenv';
dotenv.config();

export default () => ({
  app: {
    environment:
      process.env.APP_ENV === 'production' ? 'production' : process.env.APP_ENV,
    port: parseInt(process.env.APP_PORT, 10) || 3000,
    host: 'localhost',
    name: process.env.APP_NAME || 'Food Cort',
    url: process.env.APP_URL,
    global_url_prefix: process.env.GLOBAL_URL_PREFIX || 'api/v1',
    full_url: `${process.env.APP_URL}/${process.env.GLOBAL_URL_PREFIX}`,
  },
  db: {
    default: {
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10) || 8000,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      name: process.env.DB_NAME,
      db_url: process.env.DATABASE_URL,
      db_client: process.env.DB_CLIENT,
    },
  },
  rabbitmq: {
    url: process.env.RABBITMQ_URL,
  },
  cors: {
    origin: process.env.CORS_ORIGN || '*',
    methods: process.env.CORS_METHODS || 'GET,HEAD',
  },
});
