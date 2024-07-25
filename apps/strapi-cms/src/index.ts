/* eslint-disable functional/immutable-data */
import { Strapi } from '@strapi/strapi';
import axios, { AxiosResponse } from 'axios';
import { Client } from 'pg';

interface IServiceError {
  readonly status: number;
  readonly statusText: string;
}

const UpdateStaticContentPluginName = 'update-static-content';
const githubAcceptHeader = 'application/vnd.github+json';

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

    // Override Update Static Content plugin functionality - Pass tenant input to Github workflow
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
              Accept: githubAcceptHeader,
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

    // Override Update Static Content plugin functionality - Filter Github workflows shown based on tenant
    strapi
      .plugin(UpdateStaticContentPluginName)
      .service('githubActions').history = async (): Promise<{
      readonly data: {
        readonly workflow_runs: ReadonlyArray<object>;
      };
    }> => {
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

        const workflows = await axios.get(
          `https://api.github.com/repos/${owner}/${repo}/actions/workflows/${workflowId}/runs?per_page=50&page=1&branch=${branch}`,
          {
            headers: {
              Accept: githubAcceptHeader,
              Authorization: `token ${githubToken}`,
            },
          }
        );

        // The following is an array of bools that maps whether or not each workflow belongs to the current tenant
        const tenantRanWorkflow: ReadonlyArray<boolean> = await Promise.all(
          workflows.data.workflow_runs.map(
            async (workflow: { readonly jobs_url: string }) => {
              const jobs = await axios.get(workflow.jobs_url, {
                headers: {
                  Accept: githubAcceptHeader,
                  Authorization: `token ${githubToken}`,
                },
              });

              return (
                jobs.data.jobs.find((job: { readonly name: string }) =>
                  job.name.includes(environment)
                ) !== undefined
              );
            }
          )
        );

        return {
          data: {
            workflow_runs: workflows.data.workflow_runs.filter(
              (_: object, index: number) => tenantRanWorkflow[index]
            ),
          },
        };
      } catch {
        // On error, show no workflows
        return { data: { workflow_runs: [] } };
      }
    };
  },
};
