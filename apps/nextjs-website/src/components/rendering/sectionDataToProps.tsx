import { EditorialProps } from '@pagopa/pagopa-editorial-components/dist/components/Editorial';
import { HeroProps } from '@pagopa/pagopa-editorial-components/dist/components/Hero';
import { HowToProps } from '@pagopa/pagopa-editorial-components/dist/components/HowTo';
import * as MuiIcons from '@mui/icons-material';
import {
  EditorialSectionData,
  HeroSectionData,
  HowToSectionData,
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
  image: 'http://localhost:1337' + (image.data?.attributes.url ?? ''), // TODO: Sub 'http://localhost:1337' for config.STRAPI_API_BASE_URL
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
      src={'http://localhost:1337' + (image.data?.attributes.url ?? '')} // TODO: Sub 'http://localhost:1337' for config.STRAPI_API_BASE_URL
      alt={image.data?.attributes.alternativeText ?? ''}
    />
  ),
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
