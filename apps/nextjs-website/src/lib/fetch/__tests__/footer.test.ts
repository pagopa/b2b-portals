import { describe, it, expect } from 'vitest';
import { FooterData, getFooter } from '../footer';
import {
  demoStrapiApiBaseUrl,
  demoStrapiApiToken,
  makeTestAppEnv,
} from './testConfig';

// response example
const footerResponse: FooterData = {
  data: {
    footer: [
      {
        __component: 'footers.standard-footer',
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
              showOneTrustPreferencies: null,
              page: {
                slug: 'homepage',
              },
            },
            {
              label: 'PNRR',
              href: '/PNRR',
              ariaLabel: 'PNRR',
              showOneTrustPreferencies: null,
              page: {
                slug: 'homepage',
              },
            },
            {
              label: 'Media',
              href: '/media',
              ariaLabel: 'Media',
              showOneTrustPreferencies: null,
              page: {
                slug: 'homepage',
              },
            },
            {
              label: 'Lavora con noi',
              href: '/lavora-con-noi',
              ariaLabel: 'Lavora con noi',
              showOneTrustPreferencies: null,
              page: {
                slug: 'homepage',
              },
            },
          ],
        },
        links_followUs: {
          title: 'SEGUICI SU',
          socialLinks: [
            {
              icon: {
                width: 32,
                height: 32,
                alternativeText: null,
                formats: null,
                mime: 'image/png',
                url: 'exampleURL',
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
              showOneTrustPreferencies: null,
              page: {
                slug: 'homepage',
              },
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
              showOneTrustPreferencies: null,
              page: {
                slug: 'homepage',
              },
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
              showOneTrustPreferencies: null,
              page: {
                slug: 'homepage',
              },
            },
          ],
        },
      },
    ],
  },
};

describe('getFooter', () => {
  it('should call /api/footer type GET based on tenant', async () => {
    const { appEnv, fetchMock } = makeTestAppEnv();

    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve(footerResponse),
    } as unknown as Response);

    await getFooter({ ...appEnv, locale: 'it' });

    expect(fetchMock).toHaveBeenCalledWith(
      `${demoStrapiApiBaseUrl}/api/footer/?locale=it
&populate[0]=footer.companyLink
&populate[1]=footer.links_aboutUs.links.page
&populate[2]=footer.links_followUs.links.page
&populate[3]=footer.links_followUs.socialLinks.icon
&populate[4]=footer.links_resources.links.page
&populate[5]=footer.links_services.links.page
&populate[6]=footer.bottomLinks.links.page
&populate[7]=footer.links.links.page
&populate[8]=footer.socialLinks.socialLinks.icon
&populate[9]=footer.hashtags.hashtags
      `,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${demoStrapiApiToken}`,
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
