import { Client } from 'pg';
/* eslint-disable functional/no-expression-statements */

export default {
  register: async (): Promise<void> => {
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
    await client.connect();
    await client.query(
      `CREATE SCHEMA IF NOT EXISTS ${process.env['DATABASE_SCHEMA']};`
    );
    await client.end();
  },
};
