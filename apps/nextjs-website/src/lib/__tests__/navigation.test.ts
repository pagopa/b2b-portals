import { describe, it, expect, vi } from 'vitest';
import { getNavigation } from '../navigation';

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
const navigationResponse = [
  {
    order: 1,
    id: 1,
    title: 'Homepage',
    type: 'INTERNAL',
    path: '/',
    externalPath: null,
    uiRouterKey: 'homepage-1',
    menuAttached: true,
    collapsed: false,
    createdAt: '2023-11-10T10:07:12.091Z',
    updatedAt: '2023-11-10T14:49:58.088Z',
    audience: [],
    parent: null,
    related: {
      id: 2,
      name: 'Homepage',
      slug: 'homepage',
      createdAt: '2023-11-10T10:03:53.094Z',
      updatedAt: '2023-11-10T10:03:53.094Z',
      publishedAt: null,
      __contentType: 'api::page.page',
      navigationItemId: 1,
      createdBy: {},
      updatedBy: {},
    },
    items: null,
  },
];

describe('getNavigation', () => {
  it('should call /api/navigation/render type FLAT', async () => {
    const { appEnv, fetchMock } = makeTestAppEnv();
    const { config } = appEnv;

    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve([]),
    } as unknown as Response);

    await getNavigation('main-menu', appEnv);

    expect(fetchMock).toHaveBeenCalledWith(
      `${config.STRAPI_API_BASE_URL}/api/navigation/render/main-menu?type=FLAT`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${config.STRAPI_API_TOKEN}`,
        },
      }
    );
  });
  it('should parse navigation without error', async () => {
    const { appEnv, fetchMock } = makeTestAppEnv();

    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve(navigationResponse),
    } as unknown as Response);

    const actual = getNavigation('main-menu', appEnv);
    const expected = [
      {
        id: 1,
        order: 1,
        parent: null,
        path: '/',
        title: 'Homepage',
      },
    ];

    expect(await actual).toStrictEqual(expected);
  });
});
