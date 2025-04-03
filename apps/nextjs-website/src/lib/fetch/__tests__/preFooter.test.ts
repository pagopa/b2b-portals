import { describe, it, expect, vi } from 'vitest';
import { getPreFooter } from '../preFooter';
import { Config } from '@/AppEnv';

const makeTestAppEnv = () => {
  const config: Config = {
    DEMO_STRAPI_API_TOKEN: 'demoStrapiToken',
    DEMO_STRAPI_API_BASE_URL: 'demoStrapiApiBaseUrl',
    SEND_STRAPI_API_BASE_URL: 'sendStrapiToken',
    SEND_STRAPI_API_TOKEN: 'sendStrapiApiBaseUrl',
    APPIO_STRAPI_API_BASE_URL: 'appioStrapiToken',
    APPIO_STRAPI_API_TOKEN: 'appioStrapiApiBaseUrl',
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

// Response example for getPreFooter
const preFooterResponse = {
  data: {
    title: 'Titolo Pre Footer Senza Bottoni',
    theme: 'dark',
    layout: 'center',
    createdAt: '2024-10-10T15:56:53.564Z',
    updatedAt: '2024-10-10T16:19:54.516Z',
    background: null,
    ctaButtons: [
      {
        id: 15,
        text: 'Bottone Primario',
        href: '#',
        variant: 'contained',
        icon: null,
        size: 'medium',
      },
      {
        id: 14,
        text: 'Bottone Secondario',
        href: '#',
        variant: 'outlined',
        icon: null,
        size: 'medium',
      },
    ],
    storeButtons: {
      id: 3,
      hrefGoogle: '#',
      hrefApple: '#',
    },
    exclude: [
      {
        slug: 'test',
        createdAt: '2024-10-10T15:57:27.916Z',
        updatedAt: '2024-10-10T15:57:36.790Z',
        publishedAt: '2024-10-10T15:57:36.779Z',
      },
    ],
  },
};

const emptyPreFooterResponse = {
  data: null,
};

const preFooterResponseAfterCodec = {
  data: {
    title: 'Titolo Pre Footer Senza Bottoni',
    theme: 'dark',
    layout: 'center',
    background: null,
    ctaButtons: [
      {
        text: 'Bottone Primario',
        href: '#',
        variant: 'contained',
        icon: null,
        size: 'medium',
      },
      {
        text: 'Bottone Secondario',
        href: '#',
        variant: 'outlined',
        icon: null,
        size: 'medium',
      },
    ],
    storeButtons: {
      hrefGoogle: '#',
      hrefApple: '#',
    },
    exclude: [{ slug: 'test' }],
  },
};

describe('getPreFooter', () => {
  it('should call /api/pre-footer type GET based on tenant', async () => {
    const { appEnv, fetchMock } = makeTestAppEnv();
    const { config } = appEnv;

    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve(preFooterResponse),
    } as unknown as Response);

    await getPreFooter({ ...appEnv, locale: 'it' });

    expect(fetchMock).toHaveBeenCalledWith(
      `${config.DEMO_STRAPI_API_BASE_URL}/api/pre-footer/?locale=it
&populate[0]=background
&populate[1]=ctaButtons
&populate[2]=storeButtons
&populate[3]=exclude
      `,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${config.DEMO_STRAPI_API_TOKEN}`,
        },
      },
    );
  });

  it('should parse preFooter response without error', async () => {
    const { appEnv, fetchMock } = makeTestAppEnv();

    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve(preFooterResponse),
    } as unknown as Response);

    const actual = getPreFooter({ ...appEnv, locale: 'it' });

    // Use preFooterResponse directly as the expected value
    expect(await actual).toStrictEqual(preFooterResponseAfterCodec);
  });

  it('should allow for preFooter data to be null', async () => {
    const { appEnv, fetchMock } = makeTestAppEnv();

    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve(emptyPreFooterResponse),
    } as unknown as Response);

    const actual = getPreFooter({ ...appEnv, locale: 'it' });

    // Use preFooterResponse directly as the expected value
    expect(await actual).toStrictEqual({ data: null });
  });
});
