/**
 * @type {typeof fetch}
 */
const fetch = globalThis.fetch;
import type { Core } from "@strapi/strapi";
import { PLUGIN_ID } from "../../../admin/src/pluginId";

const githubActionsService = ({ strapi }: { strapi: Core.Strapi }) => ({
  async trigger(deployment: string) {
    try {
      const githubToken = strapi.plugin(PLUGIN_ID).config('githubToken');
      const environment = strapi.plugin(PLUGIN_ID).config('environment');

      const res = await fetch(
        'https://api.github.com/repos/pagopa/b2b-portals/actions/workflows/rollback_prod_website.yaml/dispatches',
        {
          method: 'POST',
          headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `token ${githubToken}`,
          },
          body: JSON.stringify({
            ref: 'main',
            inputs: {
              environment,
              timestamp: deployment,
            },
          }),
        },
      );

      return {
        success: res.ok,
        status: res.status,
      }
    } catch (err: any) {
      return {
        success: false,
        err,
      }
    }
  },
});

export default githubActionsService;
