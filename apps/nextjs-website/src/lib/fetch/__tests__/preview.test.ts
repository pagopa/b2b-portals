import { describe, it, expect, vi } from 'vitest';
import {
  PreviewPageData,
  PageIDs,
  fetchAllPageIDs,
  fetchPageFromID,
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

const pageIDExample = 50;

// response examples
const pageIDsResponse: PageIDs = {
  data: [
    {
      id: 10,
    },
    {
      id: 20,
    },
    {
      id: 30,
    },
  ],
};

const pageDataResponse: PreviewPageData = {
  data: {
    attributes: {
      sections: [
        {
          __component: 'sections.hero',
          image: {
            data: null,
          },
          background: {
            data: null,
          },
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
          link: {
            href: '/',
            label: 'example',
          },
        },
      ],
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
      `${config.DEMO_STRAPI_API_BASE_URL}/api/pages?locale=it&publicationState=preview&pagination[pageSize]=100`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${config.DEMO_STRAPI_API_TOKEN}`,
        },
        cache: 'no-cache',
      }
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

describe('fetchPageFromID', () => {
  it('should call /api/pages/[pageID] including unpublished content', async () => {
    const { appEnv, fetchMock } = makeTestAppEnv();
    const { config } = appEnv;

    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve(pageDataResponse),
    } as unknown as Response);

    await fetchPageFromID({
      ...appEnv,
      pageID: pageIDExample,
    });

    expect(fetchMock).toHaveBeenCalledWith(
      `${config.DEMO_STRAPI_API_BASE_URL}/api/pages/${pageIDExample}?publicationState=preview
      &populate[sections][populate][0]=ctaButtons,image,mobileImage,background,link,accordionItems,decoration,storeButtons,categories,counter,icon
      &populate[sections][populate][1]=items.links,items.link,items.icon
      &populate[sections][populate][2]=sections.icon,sections.ctaButtons
      &populate[sections][populate][3]=sections.content.image,sections.content.mobileImage,sections.content.ctaButtons,sections.content.storeButtons
      &populate[sections][populate][4]=video.src
      &populate[sections][populate][5]=steps.icon
      &populate[sections][populate][6]=cards.image,cards.link
      &populate[sections][populate][7]=text.link
      &populate[sections][populate][8]=pages.sections.ctaButtons,pages.sections.image,pages.sections.mobileImage,pages.sections.storeButtons
      &populate[sections][populate][9]=pages.sections.items.links,pages.sections.items.icon
      &populate[sections][populate][10]=pages.sections.sections.ctaButtons,pages.sections.sections.icon
      `,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${config.DEMO_STRAPI_API_TOKEN}`,
        },
        cache: 'no-cache',
      }
    );
  });

  it('should parse pageData without error', async () => {
    const { appEnv, fetchMock } = makeTestAppEnv();

    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve(pageDataResponse),
    } as unknown as Response);

    const actual = fetchPageFromID({
      ...appEnv,
      pageID: pageIDExample,
    });

    expect(await actual).toStrictEqual(pageDataResponse);
  });
});
