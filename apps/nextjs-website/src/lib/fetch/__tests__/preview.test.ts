import { describe, it, expect, vi } from 'vitest';
import {
  PreviewPageData,
  PageIDs,
  fetchAllPageIDs,
  fetchPageFromID,
  fetchAllPressReleaseIDs,
  fetchPressReleaseFromID,
  PreviewPressReleaseData,
} from '../preview';
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

const pageIDExample = 'docIdExample';

// response examples
const pageIDsResponse: PageIDs = {
  data: [
    {
      documentId: 'docid1',
    },
    {
      documentId: 'docid2',
    },
    {
      documentId: 'docid3',
    },
  ],
};

const pageDataResponse: PreviewPageData = {
  data: {
    locale: 'it',
    sections: [
      {
        __component: 'sections.hero',
        image: null,
        background: null,
        ctaButtons: [],
        storeButtons: {
          hrefGoogle: 'https://play.google.com',
          hrefApple: 'https://apple.com',
        },
        inverse: false,
        sectionID: null,
        size: 'small',
        subtitle: 'subtitle',
        theme: 'light',
        title: 'light',
        titleTag: 'h1',
        link: {
          href: '/',
          label: 'example',
        },
      },
    ],
  },
};

const pressReleaseDataResponse: PreviewPressReleaseData = {
  data: {
    locale: 'it',
    pressRelease: {
      sectionID: null,
      title: 'Press Release Title',
      subtitle: null,
      body: 'Press Release Body',
      date: '2024-10-12',
    },
  },
};

describe('fetchAllPageIDs', () => {
  it('should call /api/pages including unpublished content', async () => {
    const { appEnv, fetchMock } = makeTestAppEnv();
    const { config } = appEnv;

    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve(pageIDsResponse),
    } as unknown as Response);

    await fetchAllPageIDs({ ...appEnv, locale: 'it' });

    expect(fetchMock).toHaveBeenCalledWith(
      `${config.DEMO_STRAPI_API_BASE_URL}/api/pages?locale=it&pagination[pageSize]=100&status=draft`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${config.DEMO_STRAPI_API_TOKEN}`,
        },
        cache: 'no-cache',
      },
    );
  });

  it('should parse pageIDs without error', async () => {
    const { appEnv, fetchMock } = makeTestAppEnv();

    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve(pageIDsResponse),
    } as unknown as Response);

    const actual = fetchAllPageIDs({ ...appEnv, locale: 'it' });

    expect(await actual).toStrictEqual(pageIDsResponse);
  });
});

describe('fetchAllPressReleaseIDs', () => {
  it('should call /api/press-releases including unpublished content', async () => {
    const { appEnv, fetchMock } = makeTestAppEnv();
    const { config } = appEnv;

    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve(pageIDsResponse),
    } as unknown as Response);

    await fetchAllPressReleaseIDs({ ...appEnv, locale: 'it' });

    expect(fetchMock).toHaveBeenCalledWith(
      `${config.DEMO_STRAPI_API_BASE_URL}/api/press-releases?locale=it&pagination[pageSize]=100&status=draft`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${config.DEMO_STRAPI_API_TOKEN}`,
        },
        cache: 'no-cache',
      },
    );
  });

  it('should parse pageIDs without error', async () => {
    const { appEnv, fetchMock } = makeTestAppEnv();

    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve(pageIDsResponse),
    } as unknown as Response);

    const actual = fetchAllPressReleaseIDs({ ...appEnv, locale: 'it' });

    expect(await actual).toStrictEqual(pageIDsResponse);
  });
});

describe('fetchPageFromID', () => {
  it('should call /api/pages/[pageID] including unpublished content', async () => {
    const { appEnv, fetchMock } = makeTestAppEnv();
    const { config } = appEnv;

    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve(pageDataResponse),
    } as unknown as Response);

    await fetchPageFromID({
      ...appEnv,
      documentID: pageIDExample,
      locale: 'it',
    });

    expect(fetchMock).toHaveBeenCalledWith(
      `${config.DEMO_STRAPI_API_BASE_URL}/api/pages/${pageIDExample}?locale=it&status=draft
&populate[1]=sections.ctaButtons,sections.image,sections.mobileImage,sections.background,sections.link,sections.accordionItems,sections.decoration,sections.storeButtons,sections.categories,sections.counter,sections.icon,sections.chips,sections.bottomCTA
&populate[2]=sections.items.links,sections.items.link,sections.items.icon,sections.items.resource,sections.items.thumbnail
&populate[3]=sections.sections.icon,sections.sections.ctaButtons
&populate[4]=sections.sections.content.image,sections.sections.content.mobileImage,sections.sections.content.ctaButtons,sections.sections.content.storeButtons
&populate[5]=sections.video.src
&populate[6]=sections.steps.icon
&populate[7]=sections.cards.image,sections.cards.link
&populate[8]=sections.text.link
&populate[9]=sections.pages.sections.ctaButtons,sections.pages.sections.image,sections.pages.sections.mobileImage,sections.pages.sections.storeButtons
&populate[10]=sections.pages.sections.items.links,sections.pages.sections.items.icon
&populate[11]=sections.pages.sections.sections.ctaButtons,sections.pages.sections.sections.icon
      `,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${config.DEMO_STRAPI_API_TOKEN}`,
        },
        cache: 'no-cache',
      },
    );
  });

  it('should parse pageData without error', async () => {
    const { appEnv, fetchMock } = makeTestAppEnv();

    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve(pageDataResponse),
    } as unknown as Response);

    const actual = fetchPageFromID({
      ...appEnv,
      documentID: pageIDExample,
      locale: 'it',
    });

    expect(await actual).toStrictEqual(pageDataResponse);
  });
});

describe('fetchPressReleaseFromID', () => {
  it('should call /api/press-releases/[pageID] including unpublished content', async () => {
    const { appEnv, fetchMock } = makeTestAppEnv();
    const { config } = appEnv;

    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve(pressReleaseDataResponse),
    } as unknown as Response);

    await fetchPressReleaseFromID({
      ...appEnv,
      documentID: pageIDExample,
      locale: 'it',
    });

    expect(fetchMock).toHaveBeenCalledWith(
      `${config.DEMO_STRAPI_API_BASE_URL}/api/press-releases/${pageIDExample}?locale=it&status=draft
&populate[1]=pressRelease.backlink
        `,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${config.DEMO_STRAPI_API_TOKEN}`,
        },
        cache: 'no-cache',
      },
    );
  });

  it('should parse pageData without error', async () => {
    const { appEnv, fetchMock } = makeTestAppEnv();

    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve(pressReleaseDataResponse),
    } as unknown as Response);

    const actual = fetchPressReleaseFromID({
      ...appEnv,
      documentID: pageIDExample,
      locale: 'it',
    });

    expect(await actual).toStrictEqual(pressReleaseDataResponse);
  });
});
