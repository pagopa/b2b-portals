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
                stackIcon: 'People',
              },
              {
                buttonText: 'Accedi',
                href: '#',
                title: 'Imprese',
                subtitle: 'Sottotitolo Imprese',
                stackIcon: 'Business',
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
      `${config.DEMO_STRAPI_API_BASE_URL}/api/header?locale=it&populate=header.logo,header.ctaButton,header.menu.links.page,header.menu.links.sublinks.page,header.menu.links.sublinkGroups.sublinks.page,header.drawer.ctaCard,header.drawer.linkCards`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${config.DEMO_STRAPI_API_TOKEN}`,
        },
      }
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
