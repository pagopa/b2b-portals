import * as t from 'io-ts';
import { extractFromResponse } from './extractFromResponse';
import { ThemeCodec } from './types/Theme';
import { AppEnv } from '@/AppEnv';

const HeroSectionCodec = t.strict({
  __component: t.literal('sections.hero'),
  title: t.string,
  subtitle: t.union([t.string, t.null]),
  theme: ThemeCodec,
  inverse: t.boolean,
  size: t.keyof({
    small: null,
    big: null,
  }),
  useHoverlay: t.boolean,
  sectionID: t.union([t.string, t.null]),
  image: t.strict({
    // TODO: Replace with StrapiImageSchema when merged
    data: t.union([
      t.type({
        attributes: t.type({
          alternativeText: t.union([t.string, t.null]),
          url: t.string,
        }),
      }),
      t.null,
    ]),
  }),
  background: t.strict({
    // TODO: Replace with StrapiImageSchema when merged
    data: t.union([
      t.type({
        attributes: t.type({
          alternativeText: t.union([t.string, t.null]),
          url: t.string,
        }),
      }),
      t.null,
    ]),
  }),
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
  theme: ThemeCodec,
  pattern: t.keyof({
    // TODO: Move to separate Codec?
    none: null,
    dots: null,
    solid: null,
  }),
  width: t.keyof({
    // TODO: Move to separate Codec?
    standard: null,
    wide: null,
    center: null,
  }),
  reversed: t.boolean,
  sectionID: t.union([t.string, t.null]),
  image: t.strict({
    // TODO: Replace with StrapiImageSchema when merged
    data: t.union([
      t.type({
        attributes: t.type({
          alternativeText: t.union([t.string, t.null]),
          url: t.string,
        }),
      }),
      t.null,
    ]),
  }),
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

const LinkCodec = t.strict({
  text: t.union([t.string, t.null]),
  href: t.string,
  linkType: t.keyof({
    internal: null,
    external: null,
    wrapper: null,
    social: null,
  }),
  ariaLabel: t.union([t.string, t.null]),
  icon: t.union([t.string, t.null]),
});

const StepCodec = t.strict({
  id: t.number,
  title: t.string,
  description: t.string,
  icon: t.union([t.string, t.null]),
  iconColor: t.keyof({
    inherit: null,
    primary: null,
    secondary: null,
    success: null,
    error: null,
    info: null,
    warning: null,
  }),
});

const HowToSectionCodec = t.strict({
  __component: t.literal('sections.how-to'),
  title: t.string,
  theme: ThemeCodec,
  rowMaxSteps: t.union([t.number, t.null]),
  stepsAlignment: t.keyof({
    center: null,
    left: null,
    right: null,
  }),
  link: t.union([LinkCodec, t.null]),
  steps: t.array(StepCodec),
});

const PageCodec = t.strict({
  data: t.strict({
    attributes: t.strict({
      sections: t.array(
        t.union([HeroSectionCodec, EditorialSectionCodec, HowToSectionCodec])
      ),
    }),
  }),
});

// Types
export type PageData = t.TypeOf<typeof PageCodec>;
export type HeroSectionData = t.TypeOf<typeof HeroSectionCodec>;
export type EditorialSectionData = t.TypeOf<typeof EditorialSectionCodec>;
export type HowToSectionData = t.TypeOf<typeof HowToSectionCodec>;

export const getPage = ({
  config,
  fetchFun,
  id,
}: AppEnv & { readonly id: number }): Promise<Readonly<PageData>> =>
  extractFromResponse(
    fetchFun(
      `${config.STRAPI_API_BASE_URL}/api/pages/${id}?populate[sections][populate][0]=ctaButtons,image,background,items,link,steps`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${config.STRAPI_API_TOKEN}`,
        },
      }
    ),
    PageCodec
  );
