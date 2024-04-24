import { describe, it, expect, vi } from 'vitest';
import { fetchSiteWideSEO } from '../siteWideSEO';
import tenants from '../../tenants';
import { Config } from '@/AppEnv';

const makeTestAppEnv = () => {
  const config: Config = {
    STRAPI_API_TOKEN: 'aStrapiToken',
    STRAPI_API_BASE_URL: 'aStrapiApiBaseUrl',
    ENVIRONMENT: 'send',
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
      `${config.STRAPI_API_BASE_URL}/api/${
        tenants[config.ENVIRONMENT].general
      }?populate=metaImage,favicon,appleTouchIcon,manifest`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${config.STRAPI_API_TOKEN}`,
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
