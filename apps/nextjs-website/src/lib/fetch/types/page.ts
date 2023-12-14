import * as t from 'io-ts';

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

export const PageSectionCodec = t.union([
  HeroSectionCodec,
  EditorialSectionCodec,
]);

export type PageSection = t.TypeOf<typeof PageSectionCodec>;
