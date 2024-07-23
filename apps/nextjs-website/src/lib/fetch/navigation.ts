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
      }/api/pages?pagination[pageSize]=100&populate[seo][populate][0]=metaTitle&populate[sections][populate][0]=ctaButtons&populate[sections][populate][1]=image&populate[sections][populate][2]=background&populate[sections][populate][3]=items.links&populate[sections][populate][4]=link&populate[sections][populate][5]=steps&populate[sections][populate][6]=accordionItems&populate[sections][populate][7]=decoration&populate[sections][populate][8]=storeButtons&populate[sections][populate][9]=sections.decoration&populate[sections][populate][10]=sections.ctaButtons`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${extractTenantStrapiApiData(config).token}`,
        },
      }
    ),
    NavigationCodec
  );
