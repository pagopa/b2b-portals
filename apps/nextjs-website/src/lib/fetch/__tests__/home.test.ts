import { describe, it, expect, vi } from 'vitest';
import { getHome } from '../home';

const makeTestAppEnv = () => {
  const config = {
    STRAPI_API_TOKEN: 'aStrapiToken',
    STRAPI_API_BASE_URL: 'aStrapiApiBaseUrl',
  };
  const fetchMock = vi.fn(fetch);
  const appEnv = { config, fetchFun: fetchMock };
  return { appEnv, fetchMock };
};

// Response will be expanded when we fetch actual data
const homeResponse = {
  data: {
    attributes: {
      sections: [
        {
          __component: 'sections.hero',
        },
        {
          __component: 'sections.editorial',
        },
        {
          __component: 'sections.editorial',
        },
      ],
    },
  },
};

describe('getHome', () => {
  it('should call /api/home type GET', async () => {
    const { appEnv, fetchMock } = makeTestAppEnv();
    const { config } = appEnv;

    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve(homeResponse),
    } as unknown as Response);

    await getHome(appEnv);

    expect(fetchMock).toHaveBeenCalledWith(
      `${config.STRAPI_API_BASE_URL}/api/home/?populate[sections][populate][0]=ctaButtons,image,background,items,link,steps`,
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
      json: () => Promise.resolve(homeResponse),
    } as unknown as Response);

    const actual = getHome(appEnv);

    expect(await actual).toStrictEqual(homeResponse);
  });
});
