import { HeroProps } from '@pagopa/pagopa-editorial-components/dist/components/Hero';
import { HeroSection } from '@/lib/fetch/types/PageSection';

export const SectionDataToHeroProps = ({
  title,
  subtitle,
  inverse,
  size,
  useHoverlay,
  image,
  background,
  ctaButtons,
}: HeroSection): HeroProps => ({
  title,
  subtitle, // TODO: Parse rich text (markdown)
  useHoverlay,
  size,
  image: image?.url ? 'http://localhost:1337' + image.url : undefined, // TODO: Sub 'http://localhost:1337' for config.STRAPI_API_BASE_URL
  altText: image?.alternativeText ?? '',
  inverse,
  background: background?.url
    ? 'http://localhost:1337' + background.url
    : undefined, // TODO: Sub 'http://localhost:1337' for config.STRAPI_API_BASE_URL
  ctaButtons,
});
