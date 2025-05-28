const { env } = require('process');

const isPreview = env.PREVIEW_MODE === 'true';
const isDryBuild = env.USE_MOCK === 'true';

let nextConfig;

if (isPreview) {
  nextConfig = {
    images: {
      unoptimized: true,
    },
  };
} else if (isDryBuild) {
  nextConfig = {
    staticPageGenerationTimeout: 600,
    images: {
      unoptimized: true,
    },
    env: {
      USE_MOCK: env.USE_MOCK,
    },
  };
} else {
  nextConfig = {
    output: 'export',
    staticPageGenerationTimeout: 600,
    images: {
      unoptimized: true,
    },
  };
}

module.exports = nextConfig;
