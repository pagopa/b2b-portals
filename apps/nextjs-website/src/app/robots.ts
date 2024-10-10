import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/', // Disallow: '/preview' --> Needed until /preview page is removed from rendering in SSG
    },
  };
}
