import * as t from 'io-ts';
import { extractFromResponse } from './extractFromResponse';
import { AppEnv } from '@/AppEnv';

// Codec
const ParentCodec = t.strict({
  order: t.number,
  id: t.number,
  title: t.string,
  path: t.string,
});
const NavItemCodec = t.intersection([
  ParentCodec,
  t.strict({
    parent: t.union([ParentCodec, t.null]),
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
      `${config.STRAPI_API_BASE_URL}/api/navigation/render/${menuName}?type=FLAT`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${config.STRAPI_API_TOKEN}`,
        },
      }
    ),
    NavigationCodec
  );
