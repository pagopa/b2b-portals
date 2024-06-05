const { env } = require('process');

const nextConfig =
  env.PREVIEW_MODE === 'true'
    ? {
        output: 'standalone',
        images: {
          unoptimized: true,
        },
      }
    : {
        output: 'export',
        images: {
          unoptimized: true,
        },
      };

module.exports = nextConfig;
