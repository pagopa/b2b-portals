import { describe, it, expect } from 'vitest';
import { getHeader, HeaderData } from '../header';
import {
  demoStrapiApiBaseUrl,
  demoStrapiApiToken,
  makeTestAppEnv,
} from './testConfig';

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
        logoDesktopCollapsed: null,
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

    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve(headerResponse),
    } as unknown as Response);

    await getHeader({ ...appEnv, locale: 'it' });

    expect(fetchMock).toHaveBeenCalledWith(
      `${demoStrapiApiBaseUrl}/api/header?locale=it
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
&populate[17]=header.logoDesktopCollapsed
&populate[18]=header.logoMobile
      `,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${demoStrapiApiToken}`,
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
