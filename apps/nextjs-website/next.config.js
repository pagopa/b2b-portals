const { env } = require('process');

const nextConfig =
  env.PREVIEW_MODE === 'true'
    ? {
        images: {
          unoptimized: true,
        },
      }
    : {
        output: 'export',
        staticPageGenerationTimeout: 120,
        images: {
          unoptimized: true,
        },
      };

module.exports = nextConfig;
