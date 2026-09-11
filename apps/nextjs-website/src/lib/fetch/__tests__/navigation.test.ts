import { describe, it, expect } from 'vitest';
import { getNavigation, Navigation } from '../navigation';
import {
  demoStrapiApiBaseUrl,
  demoStrapiApiToken,
  makeTestAppEnv,
} from './testConfig';

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
        hideFromSearchEngines: null,
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
            ariaLabel: 'label',
          },
          sectionID: null,
        },
      ],
      publishedAt: '2024-11-28T15:14:29.486Z',
      updatedAt: '2024-11-28T15:14:28.486Z',
    },
  ],
};

describe('getNavigation', () => {
  it('should call /api/pages based on tenant', async () => {
    const { appEnv, fetchMock } = makeTestAppEnv();

    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve({ data: [] }),
    } as unknown as Response);

    await getNavigation({ ...appEnv, locale: 'it' });

    expect(fetchMock).toHaveBeenCalledWith(
      `${demoStrapiApiBaseUrl}/api/pages?locale=it&pagination[pageSize]=100
&populate[0]=seo
&populate[1]=sections.ctaButtons,sections.image,sections.mobileImage,sections.background,sections.link,sections.accordionItems,sections.decoration,sections.storeButtons,sections.categories,sections.counter,sections.icon,sections.chips,sections.bottomCTA,sections.ctaButton
&populate[2]=sections.items.links,sections.items.link,sections.items.icon,sections.items.resource,sections.items.thumbnail
&populate[3]=sections.sections.icon,sections.sections.ctaButtons
&populate[4]=sections.sections.content.image,sections.sections.content.mobileImage,sections.sections.content.ctaButtons,sections.sections.content.storeButtons
&populate[5]=sections.video.src,sections.video.previewImage
&populate[6]=sections.steps.icon
&populate[7]=sections.cards.image,sections.cards.link
&populate[8]=sections.text.link
&populate[9]=sections.pages.sections.ctaButtons,sections.pages.sections.image,sections.pages.sections.mobileImage,sections.pages.sections.storeButtons
&populate[10]=sections.pages.sections.items.links,sections.pages.sections.items.icon
&populate[11]=sections.pages.sections.sections.ctaButtons,sections.pages.sections.sections.icon
&populate[12]=sections.firstGroup.logo,sections.secondGroup.logo
      `,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${demoStrapiApiToken}`,
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
            hideFromSearchEngines: null,
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
                ariaLabel: 'label',
              },
              sectionID: null,
            },
          ],
          publishedAt: '2024-11-28T15:14:29.486Z',
          updatedAt: '2024-11-28T15:14:28.486Z',
        },
      ],
    };

    expect(await actual).toStrictEqual(expected);
  });
});
