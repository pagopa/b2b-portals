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
  theme: t.union([t.literal('light'), t.literal('dark')]),
  rowMaxSteps: t.union([t.number, t.null]),
  stepsAlignment: t.keyof({
    center: null,
    left: null,
    right: null,
  }),
  link: t.union([LinkCodec, t.null]),
  steps: t.array(StepCodec),
});

export const PageSectionCodec = t.union([
  HeroSectionCodec,
  EditorialSectionCodec,
  HowToSectionCodec,
]);

export type PageSection = t.TypeOf<typeof PageSectionCodec>;
export type HeroSection = t.TypeOf<typeof HeroSectionCodec>;
export type EditorialSection = t.TypeOf<typeof EditorialSectionCodec>;
export type HowToSectionData = t.TypeOf<typeof HowToSectionCodec>;
