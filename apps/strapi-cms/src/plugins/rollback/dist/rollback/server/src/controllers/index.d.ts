declare const _default: {
    s3: ({ strapi }: {
        strapi: import("@strapi/types/dist/core").Strapi;
    }) => {
        deployments(ctx: any): Promise<void>;
    };
    githubActions: ({ strapi }: {
        strapi: import("@strapi/types/dist/core").Strapi;
    }) => {
        trigger(ctx: any): Promise<any>;
    };
};
export default _default;
