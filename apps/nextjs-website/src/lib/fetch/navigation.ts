import * as t from 'io-ts';
import tenants from '../tenants';
import { extractFromResponse } from './extractFromResponse';
import { PageSectionCodec } from './types/PageSection';
import { PageSEOCodec } from './types/SEO';
import { AppEnv } from '@/AppEnv';

// Codec
const ParentCodec = t.strict({
  order: t.number,
  id: t.number,
  title: t.string,
  menuAttached: t.boolean,
});

const NavItemCodec = t.intersection([
  ParentCodec,
  t.strict({
    parent: t.union([ParentCodec, t.null]),
    related: t.strict({
      slug: t.string,
      seo: PageSEOCodec,
      sections: t.array(PageSectionCodec),
    }),
  }),
]);
const NavigationCodec = t.readonlyArray(NavItemCodec);

// Types
export type Navigation = t.TypeOf<typeof NavigationCodec>;

export const getNavigation = ({
  config,
  fetchFun,
}: AppEnv): Promise<Navigation> =>
  extractFromResponse(
    fetchFun(
      // All query parameters in the following URL indicate specific fields that would not otherwise be automatically returned by Strapi
      `${config.STRAPI_API_BASE_URL}/api/navigation/render/${
        tenants[config.ENVIRONMENT].navigation
      }?type=FLAT&populate[seo][populate][0]=metaTitle&populate[sections][populate][0]=ctaButtons&populate[sections][populate][1]=image&populate[sections][populate][2]=background&populate[sections][populate][3]=items.links&populate[sections][populate][4]=link&populate[sections][populate][5]=steps&populate[sections][populate][6]=accordionItems&populate[sections][populate][7]=decoration&populate[sections][populate][8]=storeButtons`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${config.STRAPI_API_TOKEN}`,
        },
      }
    ),
    NavigationCodec
  );
