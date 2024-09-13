import * as t from 'io-ts';
import { extractFromResponse } from './extractFromResponse';
import { PageSectionCodec } from './types/PageSection';
import { PageSEOCodec } from './types/SEO';
import { extractTenantStrapiApiData } from './tenantApiData';
import { AppEnv } from '@/AppEnv';

// Codec
const PageDataCodec = t.strict({
  slug: t.string,
  seo: PageSEOCodec,
  sections: t.array(PageSectionCodec),
});

const PageCodec = t.strict({
  id: t.number,
  attributes: PageDataCodec,
});

const NavigationCodec = t.strict({
  data: t.readonlyArray(PageCodec),
});

// Types
export type Navigation = t.TypeOf<typeof NavigationCodec>;
export type PageData = t.TypeOf<typeof PageDataCodec>;

export const getNavigation = ({
  config,
  fetchFun,
}: AppEnv): Promise<Navigation> =>
  extractFromResponse(
    fetchFun(
      // All query parameters in the following URL indicate specific fields that would not otherwise be automatically returned by Strapi
      // The pagination[pageSize] parameter has been set to 100 to realistically not have the need to fetch multiple pages
      `${
        extractTenantStrapiApiData(config).baseUrl
      }/api/pages?pagination[pageSize]=100
      &populate[seo][populate][0]=metaTitle
      &populate[sections][populate][0]=ctaButtons,image,mobileImage,background,link,accordionItems,decoration,storeButtons,categories,counter,icon
      &populate[sections][populate][1]=items.links,items.link,items.icon
      &populate[sections][populate][2]=sections.decoration,sections.ctaButtons
      &populate[sections][populate][3]=sections.content.image,sections.content.mobileImage,sections.content.ctaButtons,sections.content.storeButtons
      &populate[sections][populate][4]=video.src
      &populate[sections][populate][5]=steps.icon
      &populate[sections][populate][6]=cards.image,cards.link`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${extractTenantStrapiApiData(config).token}`,
        },
      }
    ),
    NavigationCodec
  );
