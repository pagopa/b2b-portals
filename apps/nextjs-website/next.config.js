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
        staticPageGenerationTimeout: 600,
        images: {
          unoptimized: true,
        },
      };

module.exports = nextConfig;
