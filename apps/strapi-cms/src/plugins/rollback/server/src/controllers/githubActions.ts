import { Core } from '@strapi/strapi';
import { PLUGIN_ID } from '../../../admin/src/pluginId';

const githubActionsController = ({ strapi }: { strapi: Core.Strapi }) => ({
  async trigger(ctx: any) {
    const response = await strapi.plugin(PLUGIN_ID).service('githubActions').trigger();
    if (response.status === 422 && response.statusText == 'Unprocessable Entity') {
      return ctx.unprocessableEntity('Unprocessable Entity');
    }
    ctx.send(response.data);
  },
});

export default githubActionsController;
