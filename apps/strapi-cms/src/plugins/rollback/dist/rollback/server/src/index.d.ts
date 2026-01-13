declare const _default: {
    register: ({ strapi }: {
        strapi: import("@strapi/types/dist/core").Strapi;
    }) => void;
    bootstrap: ({ strapi }: {
        strapi: import("@strapi/types/dist/core").Strapi;
    }) => Promise<void>;
    destroy: ({ strapi }: {
        strapi: import("@strapi/types/dist/core").Strapi;
    }) => void;
    config: {
        default: {};
        validator({ githubToken, environment, s3_accessKeyId, s3_secretAccessKey, s3_endpoint, s3_bucketName, s3_region }: Partial<import("types/config").default>): void;
    };
    controllers: {
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
    routes: {
        method: string;
        path: string;
        handler: string;
        config: {
            policies: string[];
        };
    }[];
    services: {
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
    contentTypes: {};
    policies: {};
    middlewares: {};
};
export default _default;
