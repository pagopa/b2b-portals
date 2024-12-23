import { describe, it, expect, vi } from 'vitest';
import { getNavigation, Navigation } from '../navigation';
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

// response example
const navigationResponse = {
  data: [
    {
      id: 1,
      attributes: {
        slug: 'homepage',
        seo: {
          metaTitle: 'title',
          metaDescription: 'description',
          keywords: null,
          canonicalURL: null,
          ogTitle: null,
          ogDescription: null,
          structuredData: null,
        },
        sections: [
          {
            __component: 'sections.stripe-link',
            theme: 'dark',
            subtitle: 'subtitle',
            icon: {
              data: null,
            },
            link: {
              label: 'link',
              href: '/',
            },
            sectionID: null,
          },
        ],
      },
    },
  ],
};

describe('getNavigation', () => {
  it('should call /api/pages based on tenant', async () => {
    const { appEnv, fetchMock } = makeTestAppEnv();
    const { config } = appEnv;

    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve({ data: [] }),
    } as unknown as Response);

    await getNavigation({ ...appEnv, locale: 'it' });

    expect(fetchMock).toHaveBeenCalledWith(
      `${config.DEMO_STRAPI_API_BASE_URL}/api/pages?locale=it&pagination[pageSize]=100
      &populate[seo][populate][0]=metaTitle
      &populate[sections][populate][0]=ctaButtons,image,mobileImage,background,link,accordionItems,decoration,storeButtons,categories,counter,icon,chips
      &populate[sections][populate][1]=items.links,items.link,items.icon,items.resource,items.thumbnail
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
      }
    );
  });
  it('should parse navigation without error', async () => {
    const { appEnv, fetchMock } = makeTestAppEnv();

    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve(navigationResponse),
    } as unknown as Response);

    const actual = getNavigation({ ...appEnv, locale: 'it' });
    const expected: Navigation = {
      data: [
        {
          id: 1,
          attributes: {
            slug: 'homepage',
            seo: {
              metaTitle: 'title',
              metaDescription: 'description',
              keywords: null,
              canonicalURL: null,
              ogTitle: null,
              ogDescription: null,
              structuredData: null,
            },
            sections: [
              {
                __component: 'sections.stripe-link',
                theme: 'dark',
                subtitle: 'subtitle',
                icon: {
                  data: null,
                },
                link: {
                  label: 'link',
                  href: '/',
                },
                sectionID: null,
              },
            ],
          },
        },
      ],
    };

    expect(await actual).toStrictEqual(expected);
  });
});
