import type { Core } from '@strapi/strapi';
declare const s3Service: ({ strapi }: {
    strapi: Core.Strapi;
}) => {
    deployments(): Promise<string[]>;
};
export default s3Service;
