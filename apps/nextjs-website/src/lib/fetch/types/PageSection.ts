import * as t from 'io-ts';
import { CTAButtonSimpleCodec } from './CTAButton';
import { StrapiImageRequiredSchema, StrapiImageSchema } from './StrapiImage';
import { FeatureItemMUIIconCodec } from './icons/FeatureItemIcon';
import { HowToStepMUIIconCodec } from './icons/HowToStepIcon';
import { StripeLinkMUIIconCodec } from './icons/StripeLinkIcon';
import { CardsItemMUIIconCodec } from './icons/CardsItemIcon';
import { StoreButtonsCodec } from './StoreButtons';

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
  storeButtons: t.union([StoreButtonsCodec, t.null]),
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
  mobileImage: StrapiImageRequiredSchema,
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
  theme: t.union([t.literal('light'), t.literal('dark')]),
  sections: t.array(
    t.strict({
      title: t.string,
      body: t.string,
      ctaButtons: t.array(CTAButtonSimpleCodec),
      decoration: StrapiImageSchema,
      icon: t.union([FeatureItemMUIIconCodec, t.null]),
    })
  ),
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

const IFrameSectionCodec = t.strict({
  __component: t.literal('sections.i-frame'),
  src: t.string,
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
  categories: t.array(FormCategoryCodec),
  theme: t.union([t.literal('light'), t.literal('dark')]),
  recaptchaSiteKey: t.string,
  listID: t.string,
  clientID: t.keyof({
    io: null,
    pagopa: null,
  }),
});

const PreFooterSectionCodec = t.strict({
  __component: t.literal('sections.pre-footer'),
  title: t.string,
  theme: t.union([t.literal('light'), t.literal('dark')]),
  storeButtons: t.union([StoreButtonsCodec, t.null]),
  background: StrapiImageSchema,
});

const HeroCounterSectionCodec = t.strict({
  __component: t.literal('sections.hero-counter'),
  title: t.string,
  subtitle: t.union([t.string, t.null]),
  theme: t.union([t.literal('light'), t.literal('dark')]),
  sectionID: t.union([t.string, t.null]),
  background: StrapiImageSchema,
  counterNumber: t.number,
  counterText: t.string,
});

const MegaHeaderSectionCodec = t.strict({
  __component: t.literal('sections.mega-header'),
  menuItems: t.array(
    t.strict({
      primary: t.string,
      secondary: t.array(
        t.strict({
          title: t.string,
          items: t.array(t.string),
        })
      ),
    })
  ),
  logoSrc: t.string,
  logoAlt: t.string,
  buttonHref: t.string,
});

const EditorialSwitchSectionCodec = t.strict({
  __component: t.literal('sections.editorial-switch'),
  theme: t.union([t.literal('light'), t.literal('dark')]),
  toptitle: t.string,
  topsubtitle: t.union([t.string, t.null]),
  width: t.union([
    t.literal('wide'),
    t.literal('standard'),
    t.literal('center'),
  ]),
  sections: t.array(
    t.strict({
      button: t.strict({
        id: t.string,
        text: t.string,
      }),
      content: t.strict({
        id: t.string,
        eyelet: t.string,
        body: t.string,
        title: t.string,
        pattern: t.keyof({
          none: null,
          dots: null,
          solid: null,
        }),
        image: t.strict({
          src: t.string,
          alt: t.string,
        }),
        mobileImage: t.strict({
          src: t.string,
          alt: t.string,
        }),
        ctaButtons: t.union([t.array(CTAButtonSimpleCodec), t.undefined]),
      }),
    })
  ),
  reversed: t.boolean,
});

const VideoImageSectionCodec = t.strict({
  __component: t.literal('sections.video-image'),
  title: t.string,
  subtitle: t.string,
  src: StrapiImageRequiredSchema,
  autoplay: t.boolean,
  loop: t.boolean,
  full: t.boolean,
  reversed: t.boolean,
  theme: t.union([t.literal('light'), t.literal('dark')]),
  fallback: t.string,
  playButtonLabel: t.string,
  sectionID: t.union([t.string, t.null]),
  isCentered: t.boolean,
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
  PreFooterSectionCodec,
  HeroCounterSectionCodec,
  MegaHeaderSectionCodec,
  EditorialSwitchSectionCodec,
  VideoImageSectionCodec,
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
export type PreFooterSection = t.TypeOf<typeof PreFooterSectionCodec>;
export type HeroCounterSection = t.TypeOf<typeof HeroCounterSectionCodec>;
export type MegaHeaderSection = t.TypeOf<typeof MegaHeaderSectionCodec>;
export type EditorialSwitchSection = t.TypeOf<
  typeof EditorialSwitchSectionCodec
>;
export type VideoImageSection = t.TypeOf<typeof VideoImageSectionCodec>;
