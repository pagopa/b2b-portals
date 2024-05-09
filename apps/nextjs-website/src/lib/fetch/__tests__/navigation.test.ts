import { describe, it, expect, vi } from 'vitest';
import { getNavigation } from '../navigation';
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
const navigationResponse = [
  {
    order: 1,
    id: 1,
    title: 'Homepage',
    type: 'INTERNAL',
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
      seo: {
        id: 1,
        metaTitle: 'SEND - Test SEO',
        metaDescription:
          'Demo demo demo demo demo demo demo demo demo demo demo demo',
        keywords: 'keyword1\nkeyword2\nkeyword3',
        canonicalURL: 'https://dsf3knok9k0v5.cloudfront.net/seo-test-canonical',
        ogTitle: 'Titling for the og',
        ogDescription: 'Description for the og',
      },
      sections: [
        {
          __component: 'sections.hero',
          image: null,
          background: null,
          ctaButtons: [],
          inverse: false,
          sectionID: null,
          size: 'small',
          subtitle: 'subtitle',
          theme: 'light',
          title: 'light',
        },
      ],
    },
    items: null,
  },
];

describe('getNavigation', () => {
  it('should call /api/navigation/render type FLAT based on tenant', async () => {
    const { appEnv, fetchMock } = makeTestAppEnv();
    const { config } = appEnv;

    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve([]),
    } as unknown as Response);

    await getNavigation(appEnv);

    expect(fetchMock).toHaveBeenCalledWith(
      `${config.STRAPI_API_BASE_URL}/api/navigation/render/${
        tenants[config.ENVIRONMENT].navigation
      }?type=FLAT&populate[seo][populate][0]=metaTitle&populate[sections][populate][0]=ctaButtons&populate[sections][populate][1]=image&populate[sections][populate][2]=background&populate[sections][populate][3]=items.links&populate[sections][populate][4]=link&populate[sections][populate][5]=steps&populate[sections][populate][6]=accordionItems&populate[sections][populate][7]=decoration&populate[sections][populate][8]=storeButtons`,
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

    const actual = getNavigation(appEnv);
    const expected = [
      {
        id: 1,
        order: 1,
        parent: null,
        menuAttached: true,
        title: 'Homepage',
        related: {
          slug: 'homepage',
          seo: {
            metaTitle: 'SEND - Test SEO',
            metaDescription:
              'Demo demo demo demo demo demo demo demo demo demo demo demo',
            keywords: 'keyword1\nkeyword2\nkeyword3',
            canonicalURL:
              'https://dsf3knok9k0v5.cloudfront.net/seo-test-canonical',
            ogTitle: 'Titling for the og',
            ogDescription: 'Description for the og',
          },
          sections: [
            {
              __component: 'sections.hero',
              image: null,
              background: null,
              ctaButtons: [],
              inverse: false,
              sectionID: null,
              size: 'small',
              subtitle: 'subtitle',
              theme: 'light',
              title: 'light',
            },
          ],
        },
      },
    ];

    expect(await actual).toStrictEqual(expected);
  });
});
