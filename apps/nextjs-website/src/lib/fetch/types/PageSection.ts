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

const AccordionSectionCodec = t.strict({
  __component: t.literal('sections.accordion'),
  title: t.string,
  subtitle: t.string,
  description: t.union([t.string, t.literal('JSX.Element')]),
  accordionItems: t.array(
    t.strict({
      header: t.string,
      content: t.union([t.string, t.literal('JSX.Element')]),
    })
  ),
  theme: t.union([t.literal('light'), t.literal('dark')]),
  layout: t.union([t.literal('left'), t.literal('center'), t.literal('right')]),
});

const StripeLinkSectionCodec = t.strict({
  __component: t.literal('sections.stripelink'),
  theme: t.union([t.literal('light'), t.literal('dark')]),
  subtitle: t.string,
  icon: t.union([t.string, t.null]), // Will become an enum of limited MUI Icons
  buttonText: t.string,
});

export const PageSectionCodec = t.union([
  HeroSectionCodec,
  EditorialSectionCodec,
  AccordionSectionCodec,
  StripeLinkSectionCodec,
]);

export type PageSection = t.TypeOf<typeof PageSectionCodec>;
export type HeroSection = t.TypeOf<typeof HeroSectionCodec>;
export type EditorialSection = t.TypeOf<typeof EditorialSectionCodec>;
export type AccordionSection = t.TypeOf<typeof AccordionSectionCodec>;
export type StripeLinkSection = t.TypeOf<typeof StripeLinkSectionCodec>;
