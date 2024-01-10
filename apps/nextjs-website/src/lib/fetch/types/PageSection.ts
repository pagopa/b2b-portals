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

const FeatureSectionCodec = t.strict({
  __component: t.literal('sections.feature'),
  title: t.string,
  theme: t.union([t.literal('light'), t.literal('dark')]),
  showCarouselMobile: t.boolean,
  background: t.union([t.string, t.null]),
  sectionID: t.union([t.string, t.null]),
  items: t.array(
    t.strict({
      id: t.number,
      icon: t.string,
      iconColor: t.keyof({
        inherit: null,
      }),
      title: t.string,
      subtitle: t.string,
      linkText: t.string,
      linkURL: t.string,
    })
  ),
});

export const PageSectionCodec = t.union([
  HeroSectionCodec,
  EditorialSectionCodec,
  FeatureSectionCodec,
]);

export type PageSection = t.TypeOf<typeof PageSectionCodec>;
export type HeroSection = t.TypeOf<typeof HeroSectionCodec>;
export type EditorialSection = t.TypeOf<typeof EditorialSectionCodec>;
export type FeatureSectionData = t.TypeOf<typeof FeatureSectionCodec>;