import { describe, it, expect } from 'vitest';
import { getPressReleases, PressReleases } from '../pressRelease';
import {
  demoStrapiApiBaseUrl,
  demoStrapiApiToken,
  makeTestAppEnv,
} from './testConfig';

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

    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve({ data: [] }),
    } as unknown as Response);

    await getPressReleases({ ...appEnv, locale: 'it' });

    expect(fetchMock).toHaveBeenCalledWith(
      `${demoStrapiApiBaseUrl}/api/press-releases?locale=it&pagination[pageSize]=100
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
          Authorization: `Bearer ${demoStrapiApiToken}`,
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
