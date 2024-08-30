import { describe, it, expect, vi } from 'vitest';
import { fetchSiteWideSEO } from '../siteWideSEO';
import { Config } from '@/AppEnv';

const makeTestAppEnv = () => {
  const config: Config = {
    DEMO_STRAPI_API_TOKEN: 'demoStrapiToken',
    DEMO_STRAPI_API_BASE_URL: 'demoStrapiApiBaseUrl',
    SEND_STRAPI_API_BASE_URL: 'sendStrapiToken',
    SEND_STRAPI_API_TOKEN: 'sendStrapiApiBaseUrl',
    APPIO_STRAPI_API_BASE_URL: 'appioStrapiToken',
    APPIO_STRAPI_API_TOKEN: 'appioStrapiApiBaseUrl',
    FIRMA_STRAPI_API_BASE_URL: 'firmaStrapiToken',
    FIRMA_STRAPI_API_TOKEN: 'firmaStrapiApiBaseUrl',
    INTEROP_STRAPI_API_BASE_URL: 'interopStrapiToken',
    INTEROP_STRAPI_API_TOKEN: 'interopStrapiApiBaseUrl',
    ENVIRONMENT: 'demo',
    PREVIEW_MODE: undefined,
    PREVIEW_TOKEN: undefined,
  };
  const fetchMock = vi.fn(fetch);
  const appEnv = { config, fetchFun: fetchMock };
  return { appEnv, fetchMock };
};

// response example
const siteWideSEOResponse = {
  data: {
    attributes: {
      metaImage: {
        data: {
          attributes: {
            alternativeText: null,
            width: 1568,
            height: 1504,
            mime: 'image/jpeg',
            url: '/uploads/THE_cool_guy_768eb95435.jpg',
          },
        },
      },
      favicon: {
        data: {
          attributes: {
            alternativeText: null,
            width: 1568,
            height: 1504,
            mime: 'image/jpeg',
            url: '/uploads/THE_cool_guy_768eb95435.jpg',
          },
        },
      },
      appleTouchIcon: {
        data: {
          attributes: {
            alternativeText: null,
            width: 2880,
            height: 1440,
            mime: 'image/png',
            url: '/uploads/hero_home_background_969783a4a7.png',
          },
        },
      },
      manifest: {
        name: 'SEND-PagoPA - Servizio di Notifiche Digitali',
        shortName: 'SEND-PagoPA',
      },
      matomoID: '12',
      locales: {
        it: true,
        en: true,
      },
    },
  },
};

describe('fetchSiteWideSEO', () => {
  it('should call /api/general type GET based on tenant', async () => {
    const { appEnv, fetchMock } = makeTestAppEnv();
    const { config } = appEnv;

    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve(siteWideSEOResponse),
    } as unknown as Response);

    await fetchSiteWideSEO(appEnv);

    expect(fetchMock).toHaveBeenCalledWith(
      `${config.DEMO_STRAPI_API_BASE_URL}/api/general?populate=metaImage,favicon,appleTouchIcon,manifest,locales`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${config.DEMO_STRAPI_API_TOKEN}`,
        },
      }
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
