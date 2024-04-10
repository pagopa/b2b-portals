export default [
  {
    method: "POST",
    path: "/trigger",
    handler: "multiTenantDeploy.trigger",
    config: {
      policies: [
        // 'admin::isAuthenticatedAdmin',
        // {
        //   name: 'admin::hasPermissions',
        //   config: {
        //     actions: [`plugin::${pluginId}.trigger`],
        //   },
        // },
        // `plugin::${pluginId}.validatePluginConfig`,
      ],
    },
  },
];
