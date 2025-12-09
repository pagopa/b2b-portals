import { describe, it, expect, vi } from 'vitest';
import { getPressReleases, PressReleases } from '../pressRelease';
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

// response example
const pressReleasesResponse = {
  data: [
    {
      id: 2,
      slug: 'art-2',
      createdAt: '2024-11-28T15:14:21.415Z',
      updatedAt: '2024-11-28T15:14:28.486Z',
      publishedAt: '2024-11-28T15:14:28.479Z',
      locale: 'it',
      seo: {
        id: 31,
        metaTitle: 'meta title',
        metaDescription: 'meta description for art-1',
        keywords: null,
        canonicalURL: null,
        ogTitle: null,
        ogDescription: null,
        structuredData: null,
        hideFromSearchEngines: null,
      },
      pressRelease: {
        id: 2,
        title: 'Articolo completo',
        subtitle: 'Con perfino un sottotitolo',
        body: 'E anche un corpo con tanto di testo **in grassetto** e [un link](https://www.youtube.com/watch?v=dQw4w9WgXcQ)',
        sectionID: null,
        date: '2024-11-30',
        backlink: {
          label: 'Torna ai comunicati stampa',
          href: '/',
        },
      },
      credits: null,
    },
    {
      id: 1,
      slug: 'art-1',
      createdAt: '2024-11-28T15:13:04.655Z',
      updatedAt: '2024-11-28T15:33:16.408Z',
      publishedAt: '2024-11-28T15:13:19.076Z',
      locale: 'it',
      seo: {
        id: 30,
        metaTitle: 'test',
        metaDescription: 'meta description for art-2',
        keywords: null,
        canonicalURL: null,
        ogTitle: null,
        ogDescription: null,
        structuredData: null,
        hideFromSearchEngines: null,
      },
      pressRelease: {
        id: 1,
        title: 'Articolo minimo',
        subtitle: null,
        body: 'Corpo minimo',
        sectionID: null,
        date: '2024-11-26',
        backlink: {
          label: 'Torna ai comunicati stampa',
          href: '/',
        },
      },
      credits: null,
    },
  ],
};

describe('getNavigation', () => {
  it('should call /api/press-releases based on tenant', async () => {
    const { appEnv, fetchMock } = makeTestAppEnv();
    const { config } = appEnv;

    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve({ data: [] }),
    } as unknown as Response);

    await getPressReleases({ ...appEnv, locale: 'it' });

    expect(fetchMock).toHaveBeenCalledWith(
      `${config.DEMO_STRAPI_API_BASE_URL}/api/press-releases?locale=it&pagination[pageSize]=100
&populate[0]=seo
&populate[1]=pressRelease.backlink
&populate[2]=credits.image
&sort[0]=pressRelease.date:desc
        `,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${config.DEMO_STRAPI_API_TOKEN}`,
        },
      },
    );
  });
  it('should parse navigation without error', async () => {
    const { appEnv, fetchMock } = makeTestAppEnv();

    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve(pressReleasesResponse),
    } as unknown as Response);

    const actual = getPressReleases({ ...appEnv, locale: 'it' });
    const expected: PressReleases = {
      data: [
        {
          slug: 'art-2',
          seo: {
            metaTitle: 'meta title',
            metaDescription: 'meta description for art-1',
            keywords: null,
            canonicalURL: null,
            ogTitle: null,
            ogDescription: null,
            structuredData: null,
            hideFromSearchEngines: null,
          },
          pressRelease: {
            title: 'Articolo completo',
            subtitle: 'Con perfino un sottotitolo',
            body: 'E anche un corpo con tanto di testo **in grassetto** e [un link](https://www.youtube.com/watch?v=dQw4w9WgXcQ)',
            sectionID: null,
            date: '2024-11-30',
            backlink: {
              label: 'Torna ai comunicati stampa',
              href: '/',
            },
          },
          credits: null,
        },
        {
          slug: 'art-1',
          seo: {
            metaTitle: 'test',
            metaDescription: 'meta description for art-2',
            keywords: null,
            canonicalURL: null,
            ogTitle: null,
            ogDescription: null,
            structuredData: null,
            hideFromSearchEngines: null,
          },
          pressRelease: {
            title: 'Articolo minimo',
            subtitle: null,
            body: 'Corpo minimo',
            sectionID: null,
            date: '2024-11-26',
            backlink: {
              label: 'Torna ai comunicati stampa',
              href: '/',
            },
          },
          credits: null,
        },
      ],
    };

    expect(await actual).toStrictEqual(expected);
  });
  it('should return an empty array if no press releases are present', async () => {
    const { appEnv, fetchMock } = makeTestAppEnv();

    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve({ data: [] }),
    } as unknown as Response);

    const actual = getPressReleases({ ...appEnv, locale: 'it' });
    const expected: PressReleases = { data: [] };

    expect(await actual).toStrictEqual(expected);
  });
});
