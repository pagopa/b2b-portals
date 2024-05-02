import { describe, it, expect, vi } from 'vitest';
import { getHeader } from '../header';
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
const headerResponse = {
  data: {
    attributes: {
      productName: 'Test',
      beta: false,
      ctaButtons: [
        {
          text: 'test',
          href: '/',
          variant: 'contained',
          icon: null,
          size: 'medium',
        },
      ],
      logo: {
        data: null,
      },
    },
  },
};

describe('getHeader', () => {
  it('should call /api/header type GET based on tenant', async () => {
    const { appEnv, fetchMock } = makeTestAppEnv();
    const { config } = appEnv;

    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve(headerResponse),
    } as unknown as Response);

    await getHeader(appEnv);

    expect(fetchMock).toHaveBeenCalledWith(
      `${config.STRAPI_API_BASE_URL}/api/${
        tenants[config.ENVIRONMENT].header
      }/?populate=ctaButtons,logo`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${config.STRAPI_API_TOKEN}`,
        },
      }
    );
  });

  it('should parse header without error', async () => {
    const { appEnv, fetchMock } = makeTestAppEnv();

    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve(headerResponse),
    } as unknown as Response);

    const actual = getHeader(appEnv);

    expect(await actual).toStrictEqual(headerResponse);
  });
});
