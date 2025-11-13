import { Core } from '@strapi/strapi';
import { PLUGIN_ID } from '../../../admin/src/pluginId';

const githubActionsController = ({ strapi }: { strapi: Core.Strapi }) => ({
  async trigger(ctx: any) {
    const { deployment } = ctx.request.body;
    const response = await strapi.plugin(PLUGIN_ID).service('githubActions').trigger(deployment);
    if (response.status === 422 && response.statusText == 'Unprocessable Entity') {
      return ctx.unprocessableEntity('Unprocessable Entity');
    }
    ctx.send(response);
  },
});

export default githubActionsController;
