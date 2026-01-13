import type { Core } from "@strapi/strapi";
declare const githubActionsService: ({ strapi }: {
    strapi: Core.Strapi;
}) => {
    trigger(deployment: string): Promise<{
        success: any;
        status: any;
        err?: undefined;
    } | {
        success: boolean;
        err: any;
        status?: undefined;
    }>;
};
export default githubActionsService;
