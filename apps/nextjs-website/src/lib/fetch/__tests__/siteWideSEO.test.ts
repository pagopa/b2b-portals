import { describe, it, expect } from 'vitest';
import { fetchSiteWideSEO, SiteWideSEO } from '../siteWideSEO';
import {
  demoStrapiApiBaseUrl,
  demoStrapiApiToken,
  makeTestAppEnv,
} from './testConfig';

// response example
const siteWideSEOResponse: SiteWideSEO = {
  data: {
    metaImage: {
      alternativeText: null,
      width: 1568,
      height: 1504,
      mime: 'image/jpeg',
      url: '/uploads/THE_cool_guy_768eb95435.jpg',
      formats: null,
    },
    favicon: {
      alternativeText: null,
      width: 1568,
      height: 1504,
      mime: 'image/jpeg',
      url: '/uploads/THE_cool_guy_768eb95435.jpg',
      formats: null,
    },
    appleTouchIcon: {
      alternativeText: null,
      width: 2880,
      height: 1440,
      mime: 'image/png',
      url: '/uploads/hero_home_background_969783a4a7.png',
      formats: null,
    },
    custom404Image: null,
    themeVariant: 'SEND',
    locales: {
      it: true,
      en: false,
      de: false,
      fr: false,
      sl: false,
    },
    defaultLocale: 'it',
    analytics: null,
    pressReleasesParentSlug: null,
    siteName: null,
    oneTrustToken: null,
  },
};

describe('fetchSiteWideSEO', () => {
  it('should call /api/general type GET based on tenant', async () => {
    const { appEnv, fetchMock } = makeTestAppEnv();

    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve(siteWideSEOResponse),
    } as unknown as Response);

    await fetchSiteWideSEO(appEnv);

    expect(fetchMock).toHaveBeenCalledWith(
      `${demoStrapiApiBaseUrl}/api/general
?populate[0]=metaImage
&populate[1]=favicon
&populate[2]=appleTouchIcon
&populate[3]=locales
&populate[4]=analytics.mixpanel
&populate[5]=custom404Image
&populate[6]=siteName
      `,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${demoStrapiApiToken}`,
        },
      },
    );
  });

  it('should parse siteWideSEO without error', async () => {
    const { appEnv, fetchMock } = makeTestAppEnv();

    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve(siteWideSEOResponse),
    } as unknown as Response);

    const actual = fetchSiteWideSEO(appEnv);

    expect(await actual).toStrictEqual(siteWideSEOResponse);
  });
});
