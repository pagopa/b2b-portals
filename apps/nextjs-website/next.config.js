/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/pubbliche-amministrazioni',
        permanent: true,
      },
    ];
  },
  
  // This comment to indicate that the line below should be removed before pushing to production
  images: {
    domains: ['notifichedigitali.pagopa.it'],
  },
};
