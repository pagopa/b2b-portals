import { describe, it, expect, vi } from 'vitest';
import { getHeader } from '../api/HeaderAPI';

const makeTestAppEnv = () => {
  const config = {
    STRAPI_API_TOKEN: 'aStrapiToken',
    STRAPI_API_BASE_URL: 'aStrapiApiBaseUrl',
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
      reverse: false,
      theme: 'light',
      avatar: {
        data: null,
      },
      ctaButtons: [
        {
          text: 'test',
          href: '/',
          variant: 'text',
          color: 'inherit',
          icon: null,
          size: 'medium',
        },
        {
          text: 'test2',
          href: '/',
          variant: 'text',
          color: 'inherit',
          icon: null,
          size: 'medium',
        },
      ],
    },
  },
};

describe('getHeader', () => {
  it('should call /api/header type GET', async () => {
    const { appEnv, fetchMock } = makeTestAppEnv();
    const { config } = appEnv;

    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve(headerResponse),
    } as unknown as Response);

    await getHeader(appEnv);

    expect(fetchMock).toHaveBeenCalledWith(
      `${config.STRAPI_API_BASE_URL}/api/header/?populate=avatar,ctaButtons`,
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
