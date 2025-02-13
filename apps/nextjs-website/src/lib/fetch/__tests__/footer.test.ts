import { describe, it, expect, vi } from 'vitest';
import { getFooter } from '../footer';
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
const footerResponse = {
  data: {
    attributes: {
      legalInfo:
        '**PagoPA S.p.A.** — società per azioni con socio unico - capitale sociale di euro 1,000,000 interamente versato - sede legale in Roma, Piazza Colonna 370,\nCAP 00187 - n. di iscrizione a Registro Imprese di Roma, CF e P.IVA 15376371009',
      showFundedByNextGenerationEULogo: true,
      companyLink: {
        href: 'https://www.pagopa.it/',
        ariaLabel: 'Link: vai al sito di PagoPA S.p.A.',
      },
      links_aboutUs: {
        title: null,
        links: [
          {
            label: 'Chi siamo',
            href: '/',
            ariaLabel: 'Chi siamo',
          },
          {
            label: 'PNRR',
            href: '/PNRR',
            ariaLabel: 'PNRR',
          },
          {
            label: 'Media',
            href: '/media',
            ariaLabel: 'Media',
          },
          {
            label: 'Lavora con noi',
            href: '/lavora-con-noi',
            ariaLabel: 'Lavora con noi',
          },
        ],
      },
      links_followUs: {
        title: 'SEGUICI SU',
        socialLinks: [
          {
            icon: {
              data: {
                attributes: {
                  width: 32,
                  height: 32,
                  alternativeText: null,
                  formats: null,
                  mime: 'image/png',
                  url: 'exampleURL',
                },
              },
            },
            href: 'https://linkedin.com',
            ariaLabel: 'LinkedIn',
          },
        ],
        links: [
          {
            label: 'Accessibilità',
            href: 'accessibilita',
            ariaLabel: 'Accessibilità',
          },
        ],
      },
      links_resources: {
        title: 'RISORSE',
        links: [
          {
            label: 'Test',
            href: '/test',
            ariaLabel: 'test',
          },
        ],
      },
      links_services: {
        title: 'PRODOTTI E SERVIZI',
        links: [
          {
            label: 'Test',
            href: '/test',
            ariaLabel: 'test',
          },
        ],
      },
    },
  },
};

describe('getFooter', () => {
  it('should call /api/footer type GET based on tenant', async () => {
    const { appEnv, fetchMock } = makeTestAppEnv();
    const { config } = appEnv;

    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve(footerResponse),
    } as unknown as Response);

    await getFooter({ ...appEnv, locale: 'it' });

    expect(fetchMock).toHaveBeenCalledWith(
      `${config.DEMO_STRAPI_API_BASE_URL}/api/footer/?locale=it
&populate[0]=companyLink
&populate[1]=links_aboutUs.links
&populate[2]=links_followUs.links
&populate[3]=links_followUs.socialLinks.icon
&populate[4]=links_resources.links
&populate[5]=links_services.links
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

  it('should parse footer without error', async () => {
    const { appEnv, fetchMock } = makeTestAppEnv();

    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve(footerResponse),
    } as unknown as Response);

    const actual = getFooter({ ...appEnv, locale: 'it' });

    expect(await actual).toStrictEqual(footerResponse);
  });
});
