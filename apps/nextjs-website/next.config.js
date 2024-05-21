const { env } = require('process');

const nextConfig =
  env.DRAFT_MODE === 'true'
    ? {}
    : {
        output: 'export',
        images: {
          unoptimized: true,
        },
      };

module.exports = nextConfig;
