import { Client } from 'pg';

export default {
  async register() {
    // Create DB schema if it doesn't exist
    const client = new Client({
      application_name: 'strapi',
      database: process.env['DATABASE_NAME'],
      host: process.env['DATABASE_HOST'],
      password: process.env['DATABASE_PASSWORD'],
      port: Number(process.env['DATABASE_PORT']),
      query_timeout: 5000,
      statement_timeout: 5000,
      user: process.env['DATABASE_USERNAME'],
    });
    try {
      await client.connect();
      await client.query(
        `CREATE SCHEMA IF NOT EXISTS ${process.env['DATABASE_SCHEMA']};`
      );
      await client.end();
    } catch {
      // Do nothing, but handle exception to be able to run 'npm run compile' in Github tests
      // If we are unable to connect to the DB, the build will fail later anyway as it should
    }
  },
};
