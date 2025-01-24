import * as t from 'io-ts';
import { extractFromResponse } from './extractFromResponse';
import { PageSectionCodec } from './types/PageSection';
import { PageSEOCodec } from './types/SEO';
import { extractTenantStrapiApiData } from './tenantApiData';
import { AppEnv } from '@/AppEnv';

const NavigationCodec = t.strict({
  data: t.readonlyArray(
    t.strict({
      id: t.number,
      attributes: t.strict({
        slug: t.string,
        seo: PageSEOCodec,
        sections: t.array(PageSectionCodec),
      }),
    }),
  ),
});

export type Navigation = t.TypeOf<typeof NavigationCodec>;

export const getNavigation = ({
  config,
  fetchFun,
  locale,
}: AppEnv & { readonly locale: 'it' | 'en' }): Promise<Navigation> =>
  extractFromResponse(
    fetchFun(
      // All query parameters in the following URL indicate specific fields that would not otherwise be automatically returned by Strapi
      // The pagination[pageSize] parameter has been set to 100 to realistically not have the need to fetch multiple pages
      `${
        extractTenantStrapiApiData(config).baseUrl
      }/api/pages?locale=${locale}&pagination[pageSize]=100
&populate[0]=seo
&populate[1]=sections.ctaButtons,sections.image,sections.mobileImage,sections.background,sections.link,sections.accordionItems,sections.decoration,sections.storeButtons,sections.categories,sections.counter,sections.icon,sections.chips
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
          Authorization: `Bearer ${extractTenantStrapiApiData(config).token}`,
          'Strapi-Response-Format': 'v4',
        },
      },
    ),
    NavigationCodec,
  );
