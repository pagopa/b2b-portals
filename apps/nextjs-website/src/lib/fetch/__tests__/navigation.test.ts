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
const navigationResponse: Navigation = {
  data: [
    {
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
          icon: null,
          link: {
            label: 'link',
            href: '/',
          },
          sectionID: null,
        },
      ],
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
&populate[0]=seo
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
      },
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
              icon: null,
              link: {
                label: 'link',
                href: '/',
              },
              sectionID: null,
            },
          ],
        },
      ],
    };

    expect(await actual).toStrictEqual(expected);
  });
});
