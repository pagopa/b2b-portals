import { FeatureProps } from '@pagopa/pagopa-editorial-components/dist/components/Feature/Feature';
import { HowToProps } from '@pagopa/pagopa-editorial-components/dist/components/HowTo';
import * as MuiIcons from '@mui/icons-material';
import { MDtoJSX } from './MDtoJSX';
import {
  ExtendedEditorialProps,
  ExtendedHeroProps,
} from '@/lib/fetch/types/ExtendedPropTypes';
import { EditorialSection, HeroSection } from '@/lib/fetch/types/PageSection';
import { FeatureSectionData, HowToSectionData } from '@/lib/fetch/page';

export const SectionDataToHeroProps = ({
  title,
  subtitle,
  inverse,
  size,
  useHoverlay,
  image,
  background,
  ctaButtons,
  theme,
}: HeroSection): ExtendedHeroProps => ({
  title,
  subtitle: MDtoJSX(subtitle ?? ''),
  useHoverlay,
  size,
  image: image?.url ? 'http://localhost:1337' + image.url : undefined, // TODO: Sub 'http://localhost:1337' for MEDIA_LIBRARY_URL
  altText: image?.alternativeText ?? '',
  inverse,
  background: background?.url
    ? 'http://localhost:1337' + background.url // TODO: Sub 'http://localhost:1337' for MEDIA_LIBRARY_URL
    : undefined,
  ctaButtons: ctaButtons.map((ctaBtn) => ({
    ...ctaBtn,
    color: theme === 'dark' ? 'negative' : 'primary',
  })),
  theme,
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
  theme,
}: EditorialSection): ExtendedEditorialProps => ({
  title,
  ...(eyelet && { eyelet }),
  body: MDtoJSX(body, 'body2'),
  reversed,
  width,
  pattern,
  ctaButtons: ctaButtons.map((ctaBtn) => ({
    ...ctaBtn,
    color: theme === 'dark' ? 'negative' : 'primary',
  })),
  image: (
    <img
      src={image?.url ? 'http://localhost:1337' + image.url : undefined} // TODO: Sub 'http://localhost:1337' for Media Library URL
      alt={image?.alternativeText ?? ''}
    />
  ),
  theme,
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
