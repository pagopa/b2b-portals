import { Strapi } from '@strapi/strapi';
import pluginId from '../../admin/src/pluginId';

export default ({ strapi }: { strapi: Strapi }) => ({
  trigger: async(ctx) => {
    const userRole = ctx.state.user.roles[0].name; // Assuming only one role given to user (for now at least)

    const response = await strapi.plugin(pluginId).service('multiTenantDeploy').trigger(userRole);
    if (response.status === 422 && response.statusText == 'Unprocessable Entity') {
      return ctx.unprocessableEntity('Unprocessable Entity');
    }
    ctx.body = response.data;
  },
});
