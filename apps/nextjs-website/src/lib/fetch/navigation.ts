import * as t from 'io-ts';
import { extractFromResponse } from './extractFromResponse';
import { AppEnv } from '@/AppEnv';

// Codec
const HeroSectionCodec = t.strict({
  __component: t.literal('sections.hero'),
  title: t.string,
  subtitle: t.union([t.string, t.null]),
  theme: t.union([t.literal('light'), t.literal('dark')]),
  inverse: t.boolean,
  size: t.keyof({
    small: null,
    big: null,
  }),
  useHoverlay: t.boolean,
  sectionID: t.union([t.string, t.null]),
  image: t.union([
    t.strict({
      alternativeText: t.union([t.string, t.null]),
      url: t.string,
    }),
    t.null,
  ]),
  background: t.union([
    t.strict({
      alternativeText: t.union([t.string, t.null]),
      url: t.string,
    }),
    t.null,
  ]),
  ctaButtons: t.array(
    // TODO: Replace with CTAButtonSchema when merged
    t.intersection([
      t.type({
        text: t.string,
        href: t.string,
        variant: t.keyof({
          text: null,
          outlined: null,
          contained: null,
        }),
        color: t.keyof({
          inherit: null,
          primary: null,
          secondary: null,
          success: null,
          error: null,
          info: null,
          warning: null,
        }),
      }),
      t.partial({
        icon: t.union([t.string, t.null]),
        size: t.keyof({
          small: null,
          medium: null,
          large: null,
        }),
      }),
    ])
  ),
});

const EditorialSectionCodec = t.strict({
  __component: t.literal('sections.editorial'),
  title: t.string,
  eyelet: t.union([t.string, t.null]),
  body: t.string,
  theme: t.union([t.literal('light'), t.literal('dark')]),
  pattern: t.keyof({
    // Move to separate Codec?
    none: null,
    dots: null,
    solid: null,
  }),
  width: t.keyof({
    // Move to separate Codec?
    standard: null,
    wide: null,
    center: null,
  }),
  reversed: t.boolean,
  sectionID: t.union([t.string, t.null]),
  image: t.union([
    t.strict({
      alternativeText: t.union([t.string, t.null]),
      url: t.string,
    }),
    t.null,
  ]),
  ctaButtons: t.array(
    // TODO: Replace with CTAButtonSchema when merged
    t.intersection([
      t.type({
        text: t.string,
        href: t.string,
        variant: t.keyof({
          text: null,
          outlined: null,
          contained: null,
        }),
        color: t.keyof({
          inherit: null,
          primary: null,
          secondary: null,
          success: null,
          error: null,
          info: null,
          warning: null,
        }),
      }),
      t.partial({
        icon: t.union([t.string, t.null]),
        size: t.keyof({
          small: null,
          medium: null,
          large: null,
        }),
      }),
    ])
  ),
});

const PageSectionCodec = t.union([HeroSectionCodec, EditorialSectionCodec]);

const PageDataCodec = t.strict({
  slug: t.string,
  sections: t.array(PageSectionCodec),
});

const ParentCodec = t.strict({
  order: t.number,
  id: t.number,
  title: t.string,
  path: t.string,
  menuAttached: t.boolean,
});

const NavItemCodec = t.intersection([
  ParentCodec,
  t.strict({
    parent: t.union([ParentCodec, t.null]),
    related: PageDataCodec,
  }),
]);
const NavigationCodec = t.readonlyArray(NavItemCodec);

// Types
export type Navigation = t.TypeOf<typeof NavigationCodec>;
export type PageSection = t.TypeOf<typeof PageSectionCodec>;

export const getNavigation = (
  menuName: string,
  { config, fetchFun }: AppEnv
): Promise<Navigation> =>
  extractFromResponse(
    fetchFun(
      `${config.STRAPI_API_BASE_URL}/api/navigation/render/${menuName}?type=FLAT&populate[sections][populate][0]=ctaButtons&populate[sections][populate][1]=image&populate[sections][populate][2]=background&populate[sections][populate][3]=items&populate[sections][populate][4]=link&populate[sections][populate][5]=steps`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${config.STRAPI_API_TOKEN}`,
        },
      }
    ),
    NavigationCodec
  );
