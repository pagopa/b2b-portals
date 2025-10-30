export default [
  {
    method: 'GET',
    path: '/deployments',
    handler: 's3.deployments',
    config: {
      policies: ['admin::isAuthenticatedAdmin'],
    },
  },
  {
    method: 'POST',
    path: '/trigger',
    handler: 'githubActions.trigger',
    config: {
      policies: ['admin::isAuthenticatedAdmin'], // TODO: Add policies to validate trigger parameters
    },
  },
];
