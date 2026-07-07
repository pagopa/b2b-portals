import { describe, it, expect, vi } from 'vitest';
import { getHeader, HeaderData } from '../header';
import { Config } from '@/AppEnv';

const makeTestAppEnv = () => {
  const config: Config = {
    DEMO_STRAPI_API_TOKEN: 'demoStrapiToken',
    DEMO_STRAPI_API_BASE_URL: 'demoStrapiApiBaseUrl',
    DEMO_STRAPI_FEEDBACK_TOKEN: 'demoFeedbackToken',
    SEND_STRAPI_API_BASE_URL: 'sendStrapiToken',
    SEND_STRAPI_API_TOKEN: 'sendStrapiApiBaseUrl',
    SEND_STRAPI_FEEDBACK_TOKEN: 'sendFeedbackToken',
    APPIO_STRAPI_API_BASE_URL: 'appioStrapiToken',
    APPIO_STRAPI_API_TOKEN: 'appioStrapiApiBaseUrl',
    APPIO_STRAPI_FEEDBACK_TOKEN: 'appioFeedbackToken',
    INTEROP_STRAPI_API_BASE_URL: 'interopStrapiToken',
    INTEROP_STRAPI_API_TOKEN: 'interopStrapiApiBaseUrl',
    INTEROP_STRAPI_FEEDBACK_TOKEN: 'interopFeedbackToken',
    PAGOPA_STRAPI_API_TOKEN: 'pagopaStrapiApiBaseUrl',
    PAGOPA_STRAPI_API_BASE_URL: 'pagopaStrapiToken',
    PAGOPA_STRAPI_FEEDBACK_TOKEN: 'pagopaFeedbackToken',
    WALLET_STRAPI_API_TOKEN: 'walletStrapiApiBaseUrl',
    WALLET_STRAPI_API_BASE_URL: 'walletStrapiToken',
    WALLET_STRAPI_FEEDBACK_TOKEN: 'walletFeedbackToken',
    ENVIRONMENT: 'demo',
    PREVIEW_MODE: undefined,
    PREVIEW_TOKEN: undefined,
    MOCK_BUILD: undefined,
  };
  const fetchMock = vi.fn(fetch);
  const appEnv = { config, fetchFun: fetchMock };
  return { appEnv, fetchMock };
};

// response example
const headerResponse: HeaderData = {
  data: {
    exclude: [],
    header: [
      {
        __component: 'headers.standard-header',

        menu: {
          links: [],
        },
        logo: null,
        logoDesktopCompressed: null,
        logoMobile: null,
        productName: 'SEND',
        topBarHeaderTitle: 'Title bar top',
        topBarHeaderTitleMobile: 'Title bar top mobile',
        topBarHeaderLink: '#',
        topBarHeaderLogo: null,
      },
    ],
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
&populate[2]=header.mobileCtaButton
&populate[3]=header.menu.links.page
&populate[4]=header.menu.links.ctaButton
&populate[5]=header.menu.links.sublinks.page
&populate[6]=header.menu.links.sublinkGroups.sublinks.page
&populate[7]=header.drawer.ctaCard
&populate[8]=header.drawer.ctaCard.link
&populate[9]=header.drawer.linkCards.icons
&populate[10]=header.drawer.linkCards.link
&populate[11]=header.socialLinks.icon
&populate[12]=header.theme
&populate[13]=header.topBarHeaderLogo
&populate[14]=header.topBarHeaderTitle
&populate[15]=header.topBarHeaderTitleMobile
&populate[16]=exclude
&populate[17]=header.logoDesktopCompressed
&populate[18]=header.logoMobile
      `,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${config.DEMO_STRAPI_API_TOKEN}`,
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
