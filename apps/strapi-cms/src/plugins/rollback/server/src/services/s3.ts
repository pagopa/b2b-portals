import type { Core } from '@strapi/strapi';

const s3Service = ({ strapi }: { strapi: Core.Strapi }) => ({
  deployments() {
    // TODO: Fetch list of deployments from S3 bucket
    return ['2025-09-23_07-47-23', '2025-09-23_08-28-03'];
  },
});

export default s3Service;
