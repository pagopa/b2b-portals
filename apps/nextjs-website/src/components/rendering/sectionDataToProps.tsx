import { HeroProps } from '@pagopa/pagopa-editorial-components/dist/components/Hero';
import { EditorialProps } from '@pagopa/pagopa-editorial-components/dist/components/Editorial';
import { FeatureProps } from '@pagopa/pagopa-editorial-components/dist/components/Feature/Feature';
import { HowToProps } from '@pagopa/pagopa-editorial-components/dist/components/HowTo';
import { BannerLinkProps } from '@pagopa/pagopa-editorial-components/dist/components/BannerLink';
import * as MuiIcons from '@mui/icons-material';
import {
  HeroSectionData,
  EditorialSectionData,
  FeatureSectionData,
  HowToSectionData,
  BannerlinkSectionData,
} from '@/lib/fetch/page';

export const SectionDataToHeroProps = ({
  title,
  subtitle,
  inverse,
  size,
  useHoverlay,
  image,
  background,
  ctaButtons,
}: HeroSectionData): HeroProps => ({
  title,
  subtitle, // TODO: Parse rich text (markdown)
  useHoverlay,
  size,
  image: 'http://localhost:1337' + (image.data?.attributes.url ?? ''), // TODO: Sub 'http://localhost:1337' for Media Library URL
  altText: image.data?.attributes.alternativeText ?? '',
  inverse,
  background: background.data?.attributes.url,
  ctaButtons,
});

export const SectionDataToEditorialProps = ({
  title,
  eyelet,
  body,
  pattern,
  width,
  reversed,
  image,
  ctaButtons,
}: EditorialSectionData): EditorialProps => ({
  title,
  ...(eyelet && { eyelet }),
  body, // TODO: Parse rich text (markdown)
  reversed,
  width,
  pattern,
  ctaButtons,
  image: (
    <img
      src={'http://localhost:1337' + (image.data?.attributes.url ?? '')} // TODO: Sub 'http://localhost:1337' for Media Library URL
      alt={image.data?.attributes.alternativeText ?? ''}
    />
  ),
});

export const SectionDataToFeatureProps = ({
  title,
  theme,
  showCarouselMobile,
  items,
}: FeatureSectionData): FeatureProps => ({
  title,
  theme,
  showCarouselMobile,
  items: items.map((item) => ({
    icon: item.icon,
    iconColor: item.iconColor,
    title: item.title,
    subtitle: item.subtitle,
    linkText: item.linkText,
    linkURL: item.linkURL,
  })),
});

export const SectionDataToHowToProps = ({
  title,
  theme,
  rowMaxSteps,
  stepsAlignment,
  link,
  steps,
}: HowToSectionData): HowToProps => ({
  title,
  theme,
  ...(rowMaxSteps && { rowMaxSteps }),
  stepsAlignment,
  ...(link && {
    link: {
      href: link.href,
      label: link.text ?? link.href,
    },
  }),
  steps: steps.map((step) => ({
    title: step.title,
    description: step.description, // TODO: Parse rich text (markdown)
    ...(step.icon && {
      stepIcon: {
        icon: step.icon as keyof typeof MuiIcons,
        color: step.iconColor,
      },
    }),
  })),
});

export const SectionDataToBannerlinkProps = ({
  title,
  body,
  reverse,
  ctaButtons,
  theme,
}: BannerlinkSectionData): BannerLinkProps => ({
  title,
  body, // TODO: Parse rich text (markdown)
  reverse,
  ctaButtons,
  theme,
});
