/* eslint-disable functional/immutable-data */
import { Strapi } from '@strapi/strapi';
import axios, { AxiosResponse } from 'axios';
import { Client } from 'pg';

interface IServiceError {
  readonly status: number;
  readonly statusText: string;
}

const UpdateStaticContentPluginName = 'update-static-content';

export default {
  register: async ({ strapi }: { readonly strapi: Strapi }): Promise<void> => {
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

    // Override Update Static Content plugin functionality
    strapi
      .plugin(UpdateStaticContentPluginName)
      .service('githubActions').trigger = async (): Promise<
      AxiosResponse | IServiceError
    > => {
      try {
        const owner = strapi
          .plugin(UpdateStaticContentPluginName)
          .config('owner');
        const repo = strapi
          .plugin(UpdateStaticContentPluginName)
          .config('repo');
        const workflowId = strapi
          .plugin(UpdateStaticContentPluginName)
          .config('workflowId');
        const branch = strapi
          .plugin(UpdateStaticContentPluginName)
          .config('branch');
        const githubToken = strapi
          .plugin(UpdateStaticContentPluginName)
          .config('githubToken');
        const environment = strapi
          .plugin(UpdateStaticContentPluginName)
          .config('environment');

        return await axios.post(
          `https://api.github.com/repos/${owner}/${repo}/actions/workflows/${workflowId}/dispatches`,
          {
            inputs: { environment },
            ref: branch,
          },
          {
            headers: {
              Accept: 'application/vnd.github+json',
              Authorization: `token ${githubToken}`,
            },
          }
        );
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        return {
          status: err.response.status,
          statusText: err.response.statusText,
        };
      }
    };
  },
};
