"use strict";
const clientS3 = require("@aws-sdk/client-s3");
const PLUGIN_ID = "rollback";
const bootstrap = async ({ strapi }) => {
  const actions = [
    {
      section: "plugins",
      subCategory: "general",
      displayName: "Access plugin page",
      uid: "access",
      pluginName: PLUGIN_ID
    },
    {
      section: "plugins",
      subCategory: "actions",
      displayName: "Trigger rollback",
      uid: "trigger",
      pluginName: PLUGIN_ID
    }
  ];
  await strapi.admin.services.permission.actionProvider.registerMany(actions);
};
const destroy = ({ strapi }) => {
};
const register = ({ strapi }) => {
};
const config = {
  default: {},
  validator({ githubToken, environment, s3_accessKeyId, s3_secretAccessKey, s3_endpoint, s3_bucketName, s3_region }) {
    if (!environment) {
      throw new Error("`environment` key in your plugin config is required");
    }
    if (!githubToken) {
      throw new Error("`githubToken` key in your plugin config is required");
    }
    if (!s3_accessKeyId) {
      throw new Error("`s3_accessKeyId` key in your plugin config is required");
    }
    if (!s3_secretAccessKey) {
      throw new Error("`s3_secretAccessKey` key in your plugin config is required");
    }
    if (!s3_endpoint) {
      throw new Error("`s3_endpoint` key in your plugin config is required");
    }
    if (!s3_bucketName) {
      throw new Error("`s3_bucketName` key in your plugin config is required");
    }
    if (!s3_region) {
      throw new Error("`s3_region` key in your plugin config is required");
    }
    if (githubToken && typeof githubToken !== "string") {
      throw new Error("`githubToken` key in your plugin config has to be a string");
    }
    if (environment && typeof environment !== "string") {
      throw new Error("`environment` key in your plugin config has to be a string");
    }
    if (s3_accessKeyId && typeof s3_accessKeyId !== "string") {
      throw new Error("`s3_accessKeyId` key in your plugin config has to be a string");
    }
    if (s3_secretAccessKey && typeof s3_secretAccessKey !== "string") {
      throw new Error("`s3_secretAccessKey` key in your plugin config has to be a string");
    }
    if (s3_endpoint && typeof s3_endpoint !== "string") {
      throw new Error("`s3_endpoint` key in your plugin config has to be a string");
    }
    if (s3_bucketName && typeof s3_bucketName !== "string") {
      throw new Error("`s3_bucketName` key in your plugin config has to be a string");
    }
    if (s3_region && typeof s3_region !== "string") {
      throw new Error("`s3_region` key in your plugin config has to be a string");
    }
  }
};
const contentTypes = {};
const s3Controller = ({ strapi }) => ({
  async deployments(ctx) {
    const deploymentsArray = await strapi.plugin(PLUGIN_ID).service("s3").deployments();
    ctx.send(deploymentsArray);
  }
});
const githubActionsController = ({ strapi }) => ({
  async trigger(ctx) {
    const { deployment } = ctx.request.body;
    const response = await strapi.plugin(PLUGIN_ID).service("githubActions").trigger(deployment);
    if (response.status === 422 && response.statusText == "Unprocessable Entity") {
      return ctx.unprocessableEntity("Unprocessable Entity");
    }
    ctx.send(response);
  }
});
const controllers = { s3: s3Controller, githubActions: githubActionsController };
const middlewares = {};
const policies = {};
const routes = [
  {
    method: "GET",
    path: "/deployments",
    handler: "s3.deployments",
    config: {
      policies: ["admin::isAuthenticatedAdmin"]
    }
  },
  {
    method: "POST",
    path: "/trigger",
    handler: "githubActions.trigger",
    config: {
      policies: ["admin::isAuthenticatedAdmin"]
    }
  }
];
const s3Service = ({ strapi }) => ({
  async deployments() {
    const environment = strapi.plugin(PLUGIN_ID).config("environment");
    const accessKeyId = strapi.plugin(PLUGIN_ID).config("s3_accessKeyId");
    const secretAccessKey = strapi.plugin(PLUGIN_ID).config("s3_secretAccessKey");
    const endpoint = strapi.plugin(PLUGIN_ID).config("s3_endpoint");
    const bucket = strapi.plugin(PLUGIN_ID).config("s3_bucketName");
    const region = strapi.plugin(PLUGIN_ID).config("s3_region");
    const s3 = new clientS3.S3Client({
      region,
      endpoint,
      credentials: {
        accessKeyId,
        secretAccessKey
      }
    });
    const command = new clientS3.ListObjectsV2Command({
      Bucket: bucket,
      Prefix: `${environment}/`,
      Delimiter: "/"
    });
    const res = await s3.send(command);
    const folders = res.CommonPrefixes?.map(
      (p) => p.Prefix.replace(`${environment}/`, "").replace(/\/$/, "")
    ) ?? [];
    return folders.filter((f) => f && f !== "latest");
  }
});
const fetch = globalThis.fetch;
const githubActionsService = ({ strapi }) => ({
  async trigger(deployment) {
    try {
      const githubToken = strapi.plugin(PLUGIN_ID).config("githubToken");
      const environment = strapi.plugin(PLUGIN_ID).config("environment");
      const res = await fetch(
        "https://api.github.com/repos/pagopa/b2b-portals/actions/workflows/rollback_prod_website.yaml/dispatches",
        {
          method: "POST",
          headers: {
            Accept: "application/vnd.github+json",
            Authorization: `token ${githubToken}`
          },
          body: JSON.stringify({
            ref: "main",
            inputs: {
              environment,
              timestamp: deployment
            }
          })
        }
      );
      return {
        success: res.ok,
        status: res.status
      };
    } catch (err) {
      return {
        success: false,
        err
      };
    }
  }
});
const services = { s3: s3Service, githubActions: githubActionsService };
const index = {
  register,
  bootstrap,
  destroy,
  config,
  controllers,
  routes,
  services,
  contentTypes,
  policies,
  middlewares
};
module.exports = index;
