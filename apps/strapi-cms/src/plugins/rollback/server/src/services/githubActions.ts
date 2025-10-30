import type { Core } from '@strapi/strapi';

const githubActionsService = ({ strapi }: { strapi: Core.Strapi }) => ({
  trigger() {
    return 'TODO';
  },
});

export default githubActionsService;
