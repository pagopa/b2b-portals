import * as t from 'io-ts';
import { extractFromResponse } from './extractFromResponse';
import { PageSectionCodec } from './types/PageSection';
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
      sections: t.array(PageSectionCodec),
    }),
  }),
]);
const NavigationCodec = t.readonlyArray(NavItemCodec);

// Types
export type Navigation = t.TypeOf<typeof NavigationCodec>;

export const getNavigation = (
  menuName: string,
  { config, fetchFun }: AppEnv
): Promise<Navigation> =>
  extractFromResponse(
    fetchFun(
      // All query parameters in the following URL indicate specific fields that would not otherwise be automatically returned by Strapi
      `${config.STRAPI_API_BASE_URL}/api/navigation/render/${menuName}?type=FLAT&populate[sections][populate][0]=ctaButtons&populate[sections][populate][1]=image&populate[sections][populate][2]=background&populate[sections][populate][3]=items&populate[sections][populate][4]=link&populate[sections][populate][5]=steps&populate[sections][populate][6]=accordionItems&populate[sections][populate][7]=decoration`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${config.STRAPI_API_TOKEN}`,
        },
      }
    ),
    NavigationCodec
  );
