import { HeroProps } from '@pagopa/pagopa-editorial-components/dist/components/Hero';
import { HeroSectionData } from '@/lib/fetch/page';

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
