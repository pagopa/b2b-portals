import { describe, it, expect, vi } from 'vitest';
import { getHeader, HeaderData } from '../header';
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
const headerResponse: HeaderData = {
  data: {
    attributes: {
      header: [
        {
          __component: 'headers.standard-header',
          beta: true,
          drawer: {
            buttonText: 'Accedi',
            title: 'Accedi o Iscriviti',
            subtitle: null,
            ctaCard: {
              buttonText: 'Accedi',
              href: '#',
              title: 'Titolo',
              subtitle: 'Sottotitolo',
            },
            linkCards: [
              {
                buttonText: 'Accedi',
                href: '#',
                title: 'Cittadini',
                subtitle: 'Sottotitolo Cittadini',
                icons: {
                  data: [
                    {
                      attributes: {
                        width: 32,
                        height: 32,
                        alternativeText: null,
                        formats: null,
                        mime: 'png',
                        url: 'exampleURL',
                      },
                    },
                  ],
                },
              },
              {
                buttonText: 'Accedi',
                href: '#',
                title: 'Imprese',
                subtitle: 'Sottotitolo Imprese',
                icons: {
                  data: [
                    {
                      attributes: {
                        width: 32,
                        height: 32,
                        alternativeText: null,
                        formats: null,
                        mime: 'png',
                        url: 'exampleURL',
                      },
                    },
                  ],
                },
              },
            ],
          },
          menu: {
            links: [],
          },
          logo: { data: null },
          productName: 'SEND',
          supportLink: '/assistenza',
        },
      ],
    },
  },
};

describe('getHeader', () => {
  it('should call /api/header type GET based on tenant', async () => {
    const { appEnv, fetchMock } = makeTestAppEnv();
    const { config } = appEnv;

    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve(headerResponse),
    } as unknown as Response);

    await getHeader({ ...appEnv, locale: 'it' });

    expect(fetchMock).toHaveBeenCalledWith(
      `${config.DEMO_STRAPI_API_BASE_URL}/api/header?locale=it
&populate[0]=header.logo
&populate[1]=header.ctaButton
&populate[2]=header.menu.links.page
&populate[3]=header.menu.links.ctaButton
&populate[4]=header.menu.links.sublinks.page
&populate[5]=header.menu.links.sublinkGroups.sublinks.page
&populate[6]=header.drawer.ctaCard
&populate[7]=header.drawer.linkCards.icons
      `,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${config.DEMO_STRAPI_API_TOKEN}`,
          'Strapi-Response-Format': 'v4',
        },
      },
    );
  });

  it('should parse header without error', async () => {
    const { appEnv, fetchMock } = makeTestAppEnv();

    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve(headerResponse),
    } as unknown as Response);

    const actual = getHeader({ ...appEnv, locale: 'it' });

    expect(await actual).toStrictEqual(headerResponse);
  });
});
