import * as t from 'io-ts';
import { extractFromResponse } from './extractFromResponse';
import { PageSectionCodec } from './types/PageSection';
import { PageSEOCodec } from './types/SEO';
import { extractTenantStrapiApiData } from './tenantApiData';
import { AppEnv } from '@/AppEnv';

// TODO: Update all API calls to adapt to Strapi V5

const NavigationCodec = t.strict({
  data: t.readonlyArray(
    t.strict({
      id: t.number,
      attributes: t.strict({
        slug: t.string,
        seo: PageSEOCodec,
        sections: t.array(PageSectionCodec),
      }),
    })
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
      &populate[seo][populate][0]=metaTitle
      &populate[sections][populate][0]=ctaButtons,image,mobileImage,background,link,accordionItems,decoration,storeButtons,categories,counter,icon,chips
      &populate[sections][populate][1]=items.links,items.link,items.icon,items.resource,items.thumbnail
      &populate[sections][populate][2]=sections.icon,sections.ctaButtons
      &populate[sections][populate][3]=sections.content.image,sections.content.mobileImage,sections.content.ctaButtons,sections.content.storeButtons
      &populate[sections][populate][4]=video.src
      &populate[sections][populate][5]=steps.icon
      &populate[sections][populate][6]=cards.image,cards.link
      &populate[sections][populate][7]=text.link
      &populate[sections][populate][8]=pages.sections.ctaButtons,pages.sections.image,pages.sections.mobileImage,pages.sections.storeButtons
      &populate[sections][populate][9]=pages.sections.items.links,pages.sections.items.icon
      &populate[sections][populate][10]=pages.sections.sections.ctaButtons,pages.sections.sections.icon
      `,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${extractTenantStrapiApiData(config).token}`,
          'Strapi-Response-Format': 'v4',
        },
      }
    ),
    NavigationCodec
  );
