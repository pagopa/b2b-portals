import type { Core } from '@strapi/strapi';
declare const s3Controller: ({ strapi }: {
    strapi: Core.Strapi;
}) => {
    deployments(ctx: any): Promise<void>;
};
export default s3Controller;
