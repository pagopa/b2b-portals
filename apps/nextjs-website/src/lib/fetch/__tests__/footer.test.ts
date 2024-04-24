import { describe, it, expect, vi } from 'vitest';
import { getFooter } from '../footer';
import tenants from '../../tenants';
import { Config } from '@/AppEnv';

const makeTestAppEnv = () => {
  const config: Config = {
    STRAPI_API_TOKEN: 'aStrapiToken',
    STRAPI_API_BASE_URL: 'aStrapiApiBaseUrl',
    ENVIRONMENT: 'send',
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
            icon: 'LinkedIn',
            href: 'linkedin.com',
            ariaLabel: 'LinkedIn',
          },
        ],
        links: [
          {
            label: 'Accessibilità',
            href: 'accessibilità',
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

    await getFooter(appEnv);

    expect(fetchMock).toHaveBeenCalledWith(
      `${config.STRAPI_API_BASE_URL}/api/${
        tenants[config.ENVIRONMENT].footer
      }/?populate[0]=companyLink,links_aboutUs.links,links_followUs.links,links_followUs.socialLinks,links_resources.links,links_services.links`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${config.STRAPI_API_TOKEN}`,
        },
      }
    );
  });

  it('should parse footer without error', async () => {
    const { appEnv, fetchMock } = makeTestAppEnv();

    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve(footerResponse),
    } as unknown as Response);

    const actual = getFooter(appEnv);

    expect(await actual).toStrictEqual(footerResponse);
  });
});
