import { MetadataRoute } from 'next';
import { getSiteWideSEO } from '@/lib/api';

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const {
    manifest: { name, shortName },
    favicon,
  } = await getSiteWideSEO();

  return {
    name,
    short_name: shortName,

    // Currently unused, leaving as a comment to discuss its usage at a later date
    // description: 'Next.js App',

    // Currently hardcoded values taken from SEND's website
    // They will be made dynamic if necessary
    start_url: '/',
    display: 'minimal-ui',
    background_color: '#FFFFFF',
    theme_color: '#0073E6',
    icons: [
      {
        src: favicon.data.attributes.url,
        sizes: `${favicon.data.attributes.width}x${favicon.data.attributes.height}`,
        type: favicon.data.attributes.mime,
      },
    ],
  };
}
