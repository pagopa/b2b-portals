import { describe, it, expect, vi } from 'vitest';
import { getPressReleases, PressReleases } from '../pressRelease';
import { Config } from '@/AppEnv';

const makeTestAppEnv = () => {
  const config: Config = {
    DEMO_STRAPI_API_TOKEN: 'demoStrapiToken',
    DEMO_STRAPI_API_BASE_URL: 'demoStrapiApiBaseUrl',
    DEMO_STRAPI_FEEDBACK_TOKEN: 'demoFeedbackToken',
    SEND_STRAPI_API_BASE_URL: 'sendStrapiToken',
    SEND_STRAPI_API_TOKEN: 'sendStrapiApiBaseUrl',
    SEND_STRAPI_FEEDBACK_TOKEN: 'sendFeedbackToken',
    APPIO_STRAPI_API_BASE_URL: 'appioStrapiToken',
    APPIO_STRAPI_API_TOKEN: 'appioStrapiApiBaseUrl',
    APPIO_STRAPI_FEEDBACK_TOKEN: 'appioFeedbackToken',
    INTEROP_STRAPI_API_BASE_URL: 'interopStrapiToken',
    INTEROP_STRAPI_API_TOKEN: 'interopStrapiApiBaseUrl',
    INTEROP_STRAPI_FEEDBACK_TOKEN: 'interopFeedbackToken',
    PAGOPA_STRAPI_API_TOKEN: 'pagopaStrapiApiBaseUrl',
    PAGOPA_STRAPI_API_BASE_URL: 'pagopaStrapiToken',
    PAGOPA_STRAPI_FEEDBACK_TOKEN: 'pagopaFeedbackToken',
    WALLET_STRAPI_API_TOKEN: 'walletStrapiApiBaseUrl',
    WALLET_STRAPI_API_BASE_URL: 'walletStrapiToken',
    WALLET_STRAPI_FEEDBACK_TOKEN: 'walletFeedbackToken',
    ENVIRONMENT: 'demo',
    PREVIEW_MODE: undefined,
    PREVIEW_TOKEN: undefined,
    MOCK_BUILD: undefined,
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
          ariaLabel: 'label',
        },
        image: null,
        metadata: null,
        paragraphs: [],
      },
      credits: null,
    },
    {
      id: 1,
      slug: 'art-1',
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
          ariaLabel: 'label',
        },
        image: null,
        metadata: null,
        paragraphs: [],
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
&populate[1]=credits.image
&populate[2]=pressRelease.backlink
&populate[3]=pressRelease.image
&populate[4]=pressRelease.metadata
&populate[5]=pressRelease.paragraphs.cards.icon
&populate[6]=pressRelease.paragraphs.cards.links
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
              ariaLabel: 'label',
            },
            image: null,
            metadata: null,
            paragraphs: [],
          },
          credits: null,
          updatedAt: '2024-11-28T15:14:28.486Z',
          publishedAt: '2024-11-28T15:14:28.479Z',
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
              ariaLabel: 'label',
            },
            image: null,
            metadata: null,
            paragraphs: [],
          },
          credits: null,
          updatedAt: '2024-11-28T15:33:16.408Z',
          publishedAt: '2024-11-28T15:13:19.076Z',
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
