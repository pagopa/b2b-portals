import * as t from 'io-ts';
import { CTAButtonSimpleCodec } from './CTAButton';
import {
  StrapiGenericMediaRequiredSchema,
  StrapiImageRequiredSchema,
  StrapiImageSchema,
} from './StrapiImage';
import { StoreButtonsCodec } from './StoreButtons';
import { ThemeCodec } from './Theme';

const LinkCodec = t.strict({
  label: t.string,
  href: t.string,
});

const TitleTagCodec = t.keyof({
  h1: null,
  h2: null,
  h3: null,
  h4: null,
  h5: null,
  h6: null,
  p: null,
});

const HeroSectionCodec = t.strict({
  __component: t.literal('sections.hero'),
  title: t.string,
  titleTag: t.union([TitleTagCodec, t.null]),
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
  storeButtons: t.union([StoreButtonsCodec, t.null]),
  link: t.union([LinkCodec, t.null]),
});

const EditorialContentCodec = t.strict({
  title: t.string,
  titleTag: t.union([TitleTagCodec, t.null]),
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
  mobileImage: StrapiImageRequiredSchema,
  ctaButtons: t.array(CTAButtonSimpleCodec),
  storeButtons: t.union([StoreButtonsCodec, t.null]),
});

const EditorialSectionCodec = t.intersection([
  t.strict({
    __component: t.literal('sections.editorial'),
  }),
  EditorialContentCodec,
]);

const AccordionSectionCodec = t.strict({
  __component: t.literal('sections.accordion'),
  title: t.string,
  subtitle: t.union([t.string, t.null]),
  description: t.union([t.string, t.null]),
  trackItemOpen: t.union([t.boolean, t.null]),
  accordionItems: t.array(
    t.strict({
      itemID: t.union([t.string, t.null]),
      header: t.string,
      content: t.string,
    }),
  ),
  theme: t.union([t.literal('light'), t.literal('dark')]),
  layout: t.union([t.literal('left'), t.literal('center')]),
  textAlignment: t.union([
    t.literal('left'),
    t.literal('center'),
    t.literal('right'),
  ]),
  sectionID: t.union([t.string, t.null]),
});

const FeatureItemCodec = t.strict({
  id: t.number,
  icon: StrapiImageRequiredSchema,
  title: t.string,
  subtitle: t.string,
  link: t.union([LinkCodec, t.null]),
});

const FeatureSectionCodec = t.strict({
  __component: t.literal('sections.feature'),
  title: t.string,
  theme: t.union([t.literal('light'), t.literal('dark')]),
  showCarouselMobile: t.boolean,
  sectionID: t.union([t.string, t.null]),
  items: t.array(FeatureItemCodec),
});

const StepCodec = t.strict({
  title: t.string,
  description: t.string,
  icon: StrapiImageSchema,
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
  theme: t.union([t.literal('light'), t.literal('dark')]),
  sectionID: t.union([t.string, t.null]),
  sections: t.array(
    t.strict({
      title: t.string,
      body: t.string,
      ctaButtons: t.array(CTAButtonSimpleCodec),
      icon: StrapiImageSchema,
    }),
  ),
});

const StripeLinkSectionCodec = t.strict({
  __component: t.literal('sections.stripe-link'),
  theme: t.union([t.literal('light'), t.literal('dark')]),
  subtitle: t.string,
  icon: StrapiImageSchema,
  sectionID: t.union([t.string, t.null]),
  link: LinkCodec,
});

const CardsItemCodec = t.strict({
  label: t.union([t.string, t.null]),
  title: t.string,
  text: t.union([t.string, t.null]),
  links: t.array(LinkCodec),
  icon: StrapiImageSchema,
});

const CardsSectionCodec = t.strict({
  __component: t.literal('sections.cards'),
  theme: t.union([t.literal('light'), t.literal('dark')]),
  title: t.string,
  subtitle: t.union([t.string, t.null]),
  body: t.union([t.string, t.null]),
  ctaButtons: t.array(CTAButtonSimpleCodec),
  items: t.array(CardsItemCodec),
  textPosition: t.keyof({
    left: null,
    center: null,
    right: null,
    none: null,
  }),
  sectionID: t.union([t.string, t.null]),
  bottomCTA: t.union([CTAButtonSimpleCodec, t.null]),
});

const OneTrustSectionPropsCodec = t.strict({
  __component: t.literal('sections.one-trust'),
  oneTrustNoticeURL: t.string,
});

const IFrameSectionCodec = t.strict({
  __component: t.literal('sections.i-frame'),
  src: t.string,
  sectionID: t.union([t.string, t.null]),
});

const FormCategoryCodec = t.strict({
  categoryID: t.string,
  label: t.string,
  additionalInfo: t.union([t.string, t.null]),
});

const FormSectionCodec = t.strict({
  __component: t.literal('sections.form'),
  title: t.string,
  subtitle: t.union([t.string, t.null]),
  showName: t.boolean,
  showSurname: t.boolean,
  showOrganization: t.boolean,
  categoriesTitle: t.union([t.string, t.null]),
  defaultCategoryID: t.string,
  categories: t.array(FormCategoryCodec),
  theme: t.union([t.literal('light'), t.literal('dark')]),
  recaptchaSiteKey: t.string,
  listID: t.string,
  clientID: t.keyof({
    io: null,
    pagopa: null,
  }),
  sectionID: t.union([t.string, t.null]),
  buttonLabel: t.string,
  notes: t.union([t.string, t.null]),
  background: StrapiImageSchema,
  placeholderName: t.union([t.string, t.null]),
  placeholderSurname: t.union([t.string, t.null]),
  placeholderEmail: t.union([t.string, t.null]),
  placeholderOrganization: t.union([t.string, t.null]),
});

const CounterCodec = t.strict({
  number: t.number,
  text: t.string,
});

const HeroCounterSectionCodec = t.strict({
  __component: t.literal('sections.hero-counter'),
  title: t.string,
  subtitle: t.union([t.string, t.null]),
  theme: t.union([t.literal('light'), t.literal('dark')]),
  sectionID: t.union([t.string, t.null]),
  background: StrapiImageSchema,
  counter: CounterCodec,
  link: t.union([LinkCodec, t.null]),
});

const EditorialSwitchSectionCodec = t.strict({
  __component: t.literal('sections.editorial-switch'),
  theme: t.union([t.literal('light'), t.literal('dark')]),
  title: t.string,
  subtitle: t.union([t.string, t.null]),
  sections: t.array(
    t.strict({
      id: t.number,
      buttonText: t.string,
      content: EditorialContentCodec,
    }),
  ),
});

const VideoCodec = t.strict({
  src: t.union([t.strict({ url: t.string }), t.null]),
  srcURL: t.union([t.string, t.null]),
  autoplay: t.boolean,
  loop: t.boolean,
  showControls: t.boolean,
  fallback: t.string,
  playButtonLabel: t.string,
  pausedPlayButtonLabel: t.string,
});

const VideoImageSectionCodec = t.strict({
  __component: t.literal('sections.video-image'),
  sectionID: t.union([t.string, t.null]),
  theme: t.union([t.literal('light'), t.literal('dark')]),
  title: t.union([t.string, t.null]),
  subtitle: t.union([t.string, t.null]),
  caption: t.union([t.string, t.null]),
  isCentered: t.boolean,
  image: StrapiImageSchema,
  mobileImage: StrapiImageSchema,
  video: t.union([VideoCodec, t.null]),
});

const ChipPropsCodec = t.strict({
  label: t.string,
  targetID: t.string,
});

const HeroChipsSectionCodec = t.strict({
  __component: t.literal('sections.hero-chips'),
  title: t.string,
  subtitle: t.union([t.string, t.null]),
  theme: t.union([t.literal('light'), t.literal('dark')]),
  sectionID: t.union([t.string, t.null]),
  background: StrapiImageSchema,
  chips: t.array(ChipPropsCodec),
});

const ServiceCardCodec = t.strict({
  title: t.string,
  link: LinkCodec,
  image: StrapiImageSchema,
  description: t.union([t.string, t.null]),
});

const ServiceCarouselSectionCodec = t.strict({
  __component: t.literal('sections.service-carousel'),
  title: t.string,
  description: t.union([t.string, t.null]),
  eyelet: t.union([t.string, t.null]),
  cards: t.array(ServiceCardCodec),
  sectionID: t.union([t.string, t.null]),
});

const RowTextSectionCodec = t.strict({
  __component: t.literal('sections.row-text'),
  title: t.string,
  subtitle: t.union([t.string, t.null]),
  body: t.union([t.string, t.null]),
  layout: t.union([t.literal('left'), t.literal('center')]),
  sectionID: t.union([t.string, t.null]),
});

const TextSectionSectionCodec = t.strict({
  __component: t.literal('sections.text-section'),
  eyelet: t.union([t.string, t.null]),
  title: t.union([t.string, t.null]),
  subtitle: t.union([t.string, t.null]),
  body: t.string,
  link: t.union([LinkCodec, t.null]),
  sectionID: t.union([t.string, t.null]),
});

const StatsSectionCodec = t.strict({
  __component: t.literal('sections.stats'),
  title: t.string,
  eyelet: t.union([t.string, t.null]),
  body: t.union([t.string, t.null]),
  items: t.array(
    t.strict({
      title: t.string,
      description: t.union([t.string, t.null]),
      icon: StrapiImageSchema,
    }),
  ),
  sectionID: t.union([t.string, t.null]),
});

const HighlightBoxSectionCodec = t.strict({
  __component: t.literal('sections.highlight-box'),
  eyelet: t.union([t.string, t.null]),
  title: t.string,
  body: t.string,
  link: t.union([LinkCodec, t.null]),
  image: StrapiImageRequiredSchema,
  sectionID: t.union([t.string, t.null]),
});

const PageSwitchPageCodec = t.strict({
  id: t.number,
  buttonText: t.string,
  sections: t.array(
    t.union([EditorialSectionCodec, CardsSectionCodec, BannerLinkSectionCodec]),
  ),
});

const PageSwitchSectionCodec = t.strict({
  __component: t.literal('sections.page-switch'),
  theme: t.union([t.literal('light'), t.literal('dark')]),
  title: t.string,
  subtitle: t.union([t.string, t.null]),
  pages: t.array(PageSwitchPageCodec),
});

const FramedVideoSectionCodec = t.strict({
  __component: t.literal('sections.framed-video'),
  sectionID: t.union([t.string, t.null]),
  theme: ThemeCodec,
  videoURL: t.union([t.string, t.null]),
  video: t.union([t.strict({ url: t.string }), t.null]),
  loop: t.boolean,
  autoplay: t.boolean,
  text: t.union([
    t.strict({
      title: t.string,
      body: t.string,
      textPosition: t.union([t.literal('left'), t.literal('right')]),
      link: t.strict({
        href: t.string,
        label: t.string,
      }),
    }),
    t.null,
  ]),
});

export const PressReleaseSectionContentCodec = t.strict({
  date: t.string,
  title: t.string,
  subtitle: t.union([t.string, t.null]),
  body: t.string,
  sectionID: t.union([t.string, t.null]),
  backlink: t.union([LinkCodec, t.null]),
});

const PressReleaseSectionCodec = t.intersection([
  t.strict({
    __component: t.literal('sections.press-release'),
  }),
  PressReleaseSectionContentCodec,
]);

const PressReleaseListSectionCodec = t.strict({
  __component: t.literal('sections.press-release-list'),
  title: t.string,
  sectionID: t.union([t.string, t.null]),
});

const MediaResourcesItemCodec = t.strict({
  title: t.string,
  thumbnail: StrapiImageRequiredSchema,
  resource: StrapiGenericMediaRequiredSchema,
  label: t.string,
});

const MediaResourcesSectionCodec = t.strict({
  __component: t.literal('sections.media-resources'),
  theme: t.union([t.literal('light'), t.literal('dark')]),
  sectionID: t.union([t.string, t.null]),
  title: t.union([t.string, t.null]),
  items: t.array(MediaResourcesItemCodec),
});

const DynamicsFormSectionPropsCodec = t.strict({
  __component: t.literal('sections.dynamics-form'),
  formID: t.string,
  orgID: t.string,
  scriptEndpoint: t.string,
});

export const PageSectionCodec = t.union([
  HeroSectionCodec,
  EditorialSectionCodec,
  AccordionSectionCodec,
  FeatureSectionCodec,
  HowToSectionCodec,
  BannerLinkSectionCodec,
  StripeLinkSectionCodec,
  CardsSectionCodec,
  OneTrustSectionPropsCodec,
  IFrameSectionCodec,
  FormSectionCodec,
  HeroCounterSectionCodec,
  EditorialSwitchSectionCodec,
  VideoImageSectionCodec,
  HeroChipsSectionCodec,
  ServiceCarouselSectionCodec,
  HighlightBoxSectionCodec,
  StatsSectionCodec,
  RowTextSectionCodec,
  TextSectionSectionCodec,
  PageSwitchSectionCodec,
  FramedVideoSectionCodec,
  PressReleaseSectionCodec,
  PressReleaseListSectionCodec,
  MediaResourcesSectionCodec,
  DynamicsFormSectionPropsCodec,
]);

export type PageSection = t.TypeOf<typeof PageSectionCodec>;
export type HeroSection = t.TypeOf<typeof HeroSectionCodec>;
export type EditorialSection = t.TypeOf<typeof EditorialSectionCodec>;
export type AccordionSection = t.TypeOf<typeof AccordionSectionCodec>;
export type FeatureSection = t.TypeOf<typeof FeatureSectionCodec>;
export type HowToSection = t.TypeOf<typeof HowToSectionCodec>;
export type BannerLinkSection = t.TypeOf<typeof BannerLinkSectionCodec>;
export type StripeLinkSection = t.TypeOf<typeof StripeLinkSectionCodec>;
export type CardsSection = t.TypeOf<typeof CardsSectionCodec>;
export type OneTrustSectionProps = t.TypeOf<typeof OneTrustSectionPropsCodec>;
export type IFrameSectionProps = t.TypeOf<typeof IFrameSectionCodec>;
export type FormSection = t.TypeOf<typeof FormSectionCodec>;
export type HeroCounterSection = t.TypeOf<typeof HeroCounterSectionCodec>;
export type EditorialSwitchSection = t.TypeOf<
  typeof EditorialSwitchSectionCodec
>;
export type VideoImageSection = t.TypeOf<typeof VideoImageSectionCodec>;
export type HeroChipsSection = t.TypeOf<typeof HeroChipsSectionCodec>;
export type ServiceCarouselSection = t.TypeOf<
  typeof ServiceCarouselSectionCodec
>;
export type HighlightBoxSection = t.TypeOf<typeof HighlightBoxSectionCodec>;
export type StatsSection = t.TypeOf<typeof StatsSectionCodec>;
export type RowTextSection = t.TypeOf<typeof RowTextSectionCodec>;
export type TextSectionSection = t.TypeOf<typeof TextSectionSectionCodec>;
export type PageSwitchSection = t.TypeOf<typeof PageSwitchSectionCodec>;
export type FramedVideoSection = t.TypeOf<typeof FramedVideoSectionCodec>;
export type PressReleaseSection = t.TypeOf<typeof PressReleaseSectionCodec>;
export type PressReleaseListSection = t.TypeOf<
  typeof PressReleaseListSectionCodec
>;
export type MediaResourcesSection = t.TypeOf<typeof MediaResourcesSectionCodec>;
export type DynamicsFormSectionProps = t.TypeOf<
  typeof DynamicsFormSectionPropsCodec
>;
