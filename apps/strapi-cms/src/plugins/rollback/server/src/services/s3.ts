import type { Core } from '@strapi/strapi';

const s3Service = ({ strapi }: { strapi: Core.Strapi }) => ({
  deployments() {
    return ['TODO'];
  },
});

export default s3Service;
