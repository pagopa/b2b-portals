import * as t from 'io-ts';
import { CTAButtonSchema } from './CTAButton';
import { ImageDataCodec } from './StrapiImage';

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
  image: t.union([ImageDataCodec, t.null]),
  background: t.union([ImageDataCodec, t.null]),
  ctaButtons: t.array(CTAButtonSchema),
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
  image: t.union([ImageDataCodec, t.null]),
  ctaButtons: t.array(CTAButtonSchema),
});

const CardsSectionCodec = t.strict({
  __component: t.literal('sections.cards'),
  theme: t.union([t.literal('light'), t.literal('dark')]),
  text: t.type({
    title: t.string,
    subtitle: t.union([t.string, t.undefined]),
    body: t.string,
  }),
  items: t.array(t.type({
    cardIcon: t.union([t.string, t.null]),
    title: t.string,
    text: t.string,
    link: t.type({
      href: t.string,
      title: t.string,
      text: t.string,
    }),
  })),
});

export const PageSectionCodec = t.union([
  HeroSectionCodec,
  EditorialSectionCodec,
  CardsSectionCodec,
]);

export type PageSection = t.TypeOf<typeof PageSectionCodec>;
export type HeroSection = t.TypeOf<typeof HeroSectionCodec>;
export type EditorialSection = t.TypeOf<typeof EditorialSectionCodec>;
export type CardsSection = t.TypeOf<typeof CardsSectionCodec>;
