import { Core } from '@strapi/strapi';
declare const githubActionsController: ({ strapi }: {
    strapi: Core.Strapi;
}) => {
    trigger(ctx: any): Promise<any>;
};
export default githubActionsController;
