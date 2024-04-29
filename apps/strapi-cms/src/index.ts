/* eslint-disable functional/immutable-data */
import { Strapi } from '@strapi/strapi';
import axios, { AxiosResponse } from 'axios';
import { Context } from 'koa';

interface IServiceError {
  readonly status: number;
  readonly statusText: string;
}

const environmentFromUserRole = {
  'AppIO Editor': 'appio', // eslint-disable-line @typescript-eslint/naming-convention
  'SEND Editor': 'send', // eslint-disable-line @typescript-eslint/naming-convention
};

const UpdateStaticContentPluginName = 'update-static-content';

export default {
  register: ({ strapi }: { readonly strapi: Strapi }): void => {
    strapi
      .plugin(UpdateStaticContentPluginName)
      .controller('githubActions').trigger = async (
      ctx: Context
    ): Promise<void> => {
      const userRole = ctx.state['user'].roles[0].name; // Assuming only one role given to user (for now at least)

      const response = await strapi
        .plugin('update-static-content')
        .service('githubActions')
        .trigger(userRole);
      if (
        response.status === 422 &&
        response.statusText === 'Unprocessable Entity'
      ) {
        return ctx['unprocessableEntity']('Unprocessable Entity');
      }
      ctx.body = response.data;
    };

    strapi
      .plugin(UpdateStaticContentPluginName)
      .service('githubActions').trigger = async (
      userRole: 'SEND Editor' | 'AppIO Editor'
    ): Promise<AxiosResponse | IServiceError> => {
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

        return await axios.post(
          `https://api.github.com/repos/${owner}/${repo}/actions/workflows/${workflowId}/dispatches`,
          {
            inputs: {
              environment: environmentFromUserRole[userRole],
            },
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
