import { describe, it, expect, vi } from 'vitest';
import { getPreHeader } from '../preHeader';
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

// Response example for getPreHeader
const preHeaderResponse = {
  data: {
    attributes: {
      createdAt: '2023-11-20T15:35:53.598Z',
      updatedAt: '2024-01-31T15:12:25.352Z',
      leftCtas: [
        {
          id: 1,
          text: 'PagoPA S.p.A.',
          href: 'https://www.pagopa.it',
          icon: null,
          size: 'medium',
        },
      ],
      rightCtas: [
        {
          id: 2,
          text: 'Assistenza',
          href: 'mailto:destinatari-send@assistenza.pagopa.it',
          icon: 'HelpOutlineOutlined',
          size: 'medium',
        },
      ],
    },
  },
};

const emptyPreHeaderResponse = {
  data: null,
};

const preHeaderResponseAfterCodec = {
  data: {
    attributes: {
      leftCtas: [
        {
          text: 'PagoPA S.p.A.',
          href: 'https://www.pagopa.it',
          icon: null,
          size: 'medium',
        },
      ],
      rightCtas: [
        {
          text: 'Assistenza',
          href: 'mailto:destinatari-send@assistenza.pagopa.it',
          icon: 'HelpOutlineOutlined',
          size: 'medium',
        },
      ],
    },
  },
};

describe('getPreHeader', () => {
  it('should call /api/pre-header type GET based on tenant', async () => {
    const { appEnv, fetchMock } = makeTestAppEnv();
    const { config } = appEnv;

    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve(preHeaderResponse),
    } as unknown as Response);

    await getPreHeader({ ...appEnv, locale: 'it' });

    expect(fetchMock).toHaveBeenCalledWith(
      `${config.DEMO_STRAPI_API_BASE_URL}/api/pre-header/?locale=it
&populate[0]=leftCtas
&populate[1]=rightCtas
      `,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${config.DEMO_STRAPI_API_TOKEN}`,
          'Strapi-Response-Format': 'v4',
        },
      },
    );
  });

  it('should parse preHeader response without error', async () => {
    const { appEnv, fetchMock } = makeTestAppEnv();

    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve(preHeaderResponse),
    } as unknown as Response);

    const actual = getPreHeader({ ...appEnv, locale: 'it' });

    // Use preHeaderResponse directly as the expected value
    expect(await actual).toStrictEqual(preHeaderResponseAfterCodec);
  });

  it('should allow for preHeader data to be null', async () => {
    const { appEnv, fetchMock } = makeTestAppEnv();

    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve(emptyPreHeaderResponse),
    } as unknown as Response);

    const actual = getPreHeader({ ...appEnv, locale: 'it' });

    // Use preHeaderResponse directly as the expected value
    expect(await actual).toStrictEqual({ data: null });
  });
});
