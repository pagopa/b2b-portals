import * as t from 'io-ts';
import { CTAButtonSimpleCodec } from './CTAButton';
import { StrapiImageRequiredSchema, StrapiImageSchema } from './StrapiImage';
import { FeatureItemMUIIconCodec } from './icons/FeatureItemIcon';
import { HowToStepMUIIconCodec } from './icons/HowToStepIcon';
import { StripeLinkMUIIconCodec } from './icons/StripeLinkIcon';
import { CardsItemMUIIconCodec } from './icons/CardsItemIcon';

const HeroSectionCodec = t.strict({
  __component: t.literal('sections.hero'),
  title: t.string,
  subtitle: t.union([t.string, t.null]),
  theme: t.union([t.literal('light'), t.literal('dark')]),
  inverse: t.boolean,
  size: t.keyof({
    small: null,
    medium: null,
    big: null,
  }),
  sectionID: t.union([t.string, t.null]),
  image: StrapiImageSchema,
  background: StrapiImageSchema,
  ctaButtons: t.array(CTAButtonSimpleCodec),
});

const StoreButtonsCodec = t.strict({
  hrefGoogle: t.union([t.string, t.null]),
  hrefApple: t.union([t.string, t.null]),
});

const EditorialSectionCodec = t.strict({
  __component: t.literal('sections.editorial'),
  title: t.string,
  eyelet: t.union([t.string, t.null]),
  body: t.string,
  theme: t.union([t.literal('light'), t.literal('dark')]),
  pattern: t.keyof({
    none: null,
    dots: null,
    solid: null,
  }),
  width: t.keyof({
    standard: null,
    wide: null,
    center: null,
  }),
  reversed: t.boolean,
  sectionID: t.union([t.string, t.null]),
  image: StrapiImageRequiredSchema,
  ctaButtons: t.array(CTAButtonSimpleCodec),
  storeButtons: t.union([StoreButtonsCodec, t.null]),
});

const AccordionSectionCodec = t.strict({
  __component: t.literal('sections.accordion'),
  title: t.string,
  subtitle: t.union([t.string, t.null]),
  description: t.union([t.string, t.null]),
  accordionItems: t.array(
    t.strict({
      header: t.string,
      content: t.string,
    })
  ),
  theme: t.union([t.literal('light'), t.literal('dark')]),
  layout: t.union([t.literal('left'), t.literal('center'), t.literal('right')]),
  sectionID: t.union([t.string, t.null]),
});

const FeatureItemCodec = t.strict({
  id: t.number,
  icon: FeatureItemMUIIconCodec,
  title: t.string,
  subtitle: t.string,
  linkText: t.union([t.string, t.null]),
  linkURL: t.union([t.string, t.null]),
});

const FeatureSectionCodec = t.strict({
  __component: t.literal('sections.feature'),
  title: t.string,
  theme: t.union([t.literal('light'), t.literal('dark')]),
  showCarouselMobile: t.boolean,
  sectionID: t.union([t.string, t.null]),
  items: t.array(FeatureItemCodec),
});

const LinkCodec = t.strict({
  label: t.string,
  href: t.string,
});

const StepCodec = t.strict({
  title: t.string,
  description: t.string,
  icon: t.union([HowToStepMUIIconCodec, t.null]),
});

const HowToSectionCodec = t.strict({
  __component: t.literal('sections.how-to'),
  title: t.string,
  theme: t.union([t.literal('light'), t.literal('dark')]),
  rowMaxSteps: t.Int,
  stepsAlignment: t.keyof({
    center: null,
    left: null,
    right: null,
  }),
  link: t.union([LinkCodec, t.null]),
  steps: t.array(StepCodec),
  sectionID: t.union([t.string, t.null]),
});

const BannerLinkSectionCodec = t.strict({
  __component: t.literal('sections.banner-link'),
  title: t.string,
  body: t.string,
  theme: t.union([t.literal('light'), t.literal('dark')]),
  ctaButtons: t.array(CTAButtonSimpleCodec),
  decoration: StrapiImageSchema,
  sectionID: t.union([t.string, t.null]),
});

const StripeLinkSectionCodec = t.strict({
  __component: t.literal('sections.stripe-link'),
  theme: t.union([t.literal('light'), t.literal('dark')]),
  subtitle: t.string,
  icon: t.union([StripeLinkMUIIconCodec, t.null]),
  buttonText: t.union([t.string, t.null]),
});

const CardsItemCodec = t.strict({
  label: t.union([t.string, t.null]),
  title: t.string,
  text: t.union([t.string, t.null]),
  links: t.array(LinkCodec),
  icon: t.union([CardsItemMUIIconCodec, t.null]),
});

const CardsSectionCodec = t.strict({
  __component: t.literal('sections.cards'),
  theme: t.union([t.literal('light'), t.literal('dark')]),
  title: t.string,
  subtitle: t.union([t.string, t.null]),
  body: t.union([t.string, t.null]),
  ctaButtons: t.array(CTAButtonSimpleCodec),
  items: t.array(CardsItemCodec),
  sectionID: t.union([t.string, t.null]),
});

const OneTrustSectionPropsCodec = t.strict({
  __component: t.literal('sections.one-trust'),
  oneTrustNoticeURL: t.string,
});

export const PreviewPageSectionCodec = t.union([
  HeroSectionCodec,
  EditorialSectionCodec,
  AccordionSectionCodec,
  FeatureSectionCodec,
  HowToSectionCodec,
  BannerLinkSectionCodec,
  StripeLinkSectionCodec,
  CardsSectionCodec,
  OneTrustSectionPropsCodec,
]);

export type PreviewPageSection = t.TypeOf<typeof PreviewPageSectionCodec>;
export type PreviewHeroSection = t.TypeOf<typeof HeroSectionCodec>;
export type PreviewEditorialSection = t.TypeOf<typeof EditorialSectionCodec>;
export type PreviewAccordionSection = t.TypeOf<typeof AccordionSectionCodec>;
export type PreviewFeatureSection = t.TypeOf<typeof FeatureSectionCodec>;
export type PreviewHowToSection = t.TypeOf<typeof HowToSectionCodec>;
export type PreviewBannerLinkSection = t.TypeOf<typeof BannerLinkSectionCodec>;
export type PreviewStripeLinkSection = t.TypeOf<typeof StripeLinkSectionCodec>;
export type PreviewCardsSection = t.TypeOf<typeof CardsSectionCodec>;
export type PreviewOneTrustSectionProps = t.TypeOf<typeof OneTrustSectionPropsCodec>;
