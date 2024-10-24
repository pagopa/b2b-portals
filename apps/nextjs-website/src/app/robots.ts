import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      disallow: '/preview', // Needed until /preview page is removed from rendering in SSG
    },
  };
}
