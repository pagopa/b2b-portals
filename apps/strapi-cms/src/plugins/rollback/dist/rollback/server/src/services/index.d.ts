declare const _default: {
    s3: ({ strapi }: {
        strapi: import("@strapi/types/dist/core").Strapi;
    }) => {
        deployments(): Promise<string[]>;
    };
    githubActions: ({ strapi }: {
        strapi: import("@strapi/types/dist/core").Strapi;
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
};
export default _default;
