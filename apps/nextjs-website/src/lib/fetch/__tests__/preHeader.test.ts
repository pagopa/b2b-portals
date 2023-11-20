import { describe, it, expect, vi } from 'vitest';
import { getPreHeader } from '../preHeader';

const makeTestAppEnv = () => {
  const config = {
    STRAPI_API_TOKEN: 'aStrapiToken',
    STRAPI_API_BASE_URL: 'aStrapiApiBaseUrl',
  };
  const fetchMock = vi.fn(fetch);
  const appEnv = { config, fetchFun: fetchMock };
  return { appEnv, fetchMock };
};

// Response example for getPreHeader
const preHeaderResponse = {
  data: {
    attributes: {
      leftCtas: {
        id: 1,
        reverse: false,
        theme: 'light',
        ctaButtons: [
          {
            id: 1,
            text: 'ctaLeft',
            href: '/',
            variant: 'text',
            color: 'inherit',
            icon: null,
            size: 'medium',
          },
        ],
      },
      rightCtas: {
        id: 2,
        reverse: false,
        theme: 'light',
        ctaButtons: [
          {
            id: 2,
            text: 'ctaRight',
            href: '/',
            variant: 'text',
            color: 'inherit',
            icon: null,
            size: 'medium',
          },
        ],
      },
    },
  },
};

describe('getPreHeader', () => {
  it('should call /api/pre-header type GET', async () => {
    const { appEnv, fetchMock } = makeTestAppEnv();
    const { config } = appEnv;

    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve(preHeaderResponse),
    } as unknown as Response);

    await getPreHeader(appEnv);

    expect(fetchMock).toHaveBeenCalledWith(
      `${config.STRAPI_API_BASE_URL}/api/pre-header/?populate=leftCtas.ctaButtons,rightCtas.ctaButtons`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${config.STRAPI_API_TOKEN}`,
        },
      }
    );
  });

  it('should parse preHeader response without error', async () => {
    const { appEnv, fetchMock } = makeTestAppEnv();

    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve(preHeaderResponse),
    } as unknown as Response);

    const actual = getPreHeader(appEnv);

    // Use preHeaderResponse directly as the expected value
    expect(await actual).toStrictEqual(preHeaderResponse);
  });
});
