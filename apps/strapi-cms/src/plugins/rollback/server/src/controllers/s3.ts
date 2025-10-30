import type { Core } from '@strapi/strapi';
import { PLUGIN_ID } from '../../../admin/src/pluginId';

const s3Controller = ({ strapi }: { strapi: Core.Strapi }) => ({
  async deployments(ctx: any) {
    const deploymentsArray = await strapi.plugin(PLUGIN_ID).service('s3').deployments();
    ctx.send(deploymentsArray);
  },
});

export default s3Controller;
