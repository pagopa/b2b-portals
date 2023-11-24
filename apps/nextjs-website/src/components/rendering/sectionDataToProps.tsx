import { EditorialProps } from '@pagopa/pagopa-editorial-components/dist/components/Editorial';
import { HeroProps } from '@pagopa/pagopa-editorial-components/dist/components/Hero';
import { EditorialSectionData, FeatureSectionData, HeroSectionData } from '@/lib/fetch/page';
import { FeatureProps } from '@pagopa/pagopa-editorial-components/dist/components/Feature/Feature';

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
  image: 'http://localhost:1337' + (image.data?.attributes.url ?? ''), // TODO: Sub "http://localhost:1337" for config.STRAPI_API_BASE_URL
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
      src={'http://localhost:1337' + (image.data?.attributes.url ?? '')} // TODO: Sub "http://localhost:1337" for config.STRAPI_API_BASE_URL
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
  items: items.map(item => ({ 
    icon: item.icon,
    iconColor: item.iconColor,
    title: item.title,
    subtitle: item.subtitle,
    linkText: item.linkText,
    linkURL: item.linkURL,
  })),
});
