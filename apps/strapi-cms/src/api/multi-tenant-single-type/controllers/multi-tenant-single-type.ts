/**
 * A set of functions called "actions" for `multi-tenant-single-type`
 */

export default {
  default: async (ctx: any, _next: any) => {
    try {
      let tenant = null;
      let singleType = null;
      const reqURL = ctx.req.url;

      if (!reqURL.includes('?')) {
        ctx.body = {
          success: false,
          err: "No query params",
        };
        return;
      }

      const params = reqURL.split('?')[1].split('&');

      for (let i = 0; i < params.length; i++) {
        const paramName = params[i].split('=')[0];
        const paramValue = params[i].split('=')[1];

        if (paramName === 'tenant') {
          tenant = paramValue;
        }

        if (paramName === 'singleType') {
          singleType = paramValue;
        }
      }

      if (tenant === null || singleType === null) {
        ctx.body = {
          success: false,
          err: "Missing query params",
        };
        return;
      }

      if (!(['send', 'appio'].includes(tenant) && ['generals', 'pre_headers', 'headers', 'footers'])) {
        ctx.body = {
          success: false,
          err: "Invalid query params value",
        };
        return;
      }

      const service = strapi.service("api::multi-tenant-single-type.multi-tenant-single-type");

      if (service === undefined) {
        ctx.body = {
          success: false,
          err: "No such service",
        };
        return;
      }

      ctx.body = await service["getSingleType"](tenant, singleType);

    } catch (err) {
      ctx.body = {
        success: false,
        err,
      };
    }
  },
};
