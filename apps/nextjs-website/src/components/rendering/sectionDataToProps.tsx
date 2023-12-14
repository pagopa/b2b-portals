import { HeroProps } from '@pagopa/pagopa-editorial-components/dist/components/Hero';
import { EditorialProps } from '@pagopa/pagopa-editorial-components/dist/components/Editorial';
import { EditorialSection, HeroSection } from '@/lib/fetch/types/PageSection';

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
  image: image?.url ? 'http://localhost:1337' + image.url : undefined, // TODO: Sub "http://localhost:1337" for Media Library URL
  altText: image?.alternativeText ?? '',
  inverse,
  background: background?.url,
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
}: EditorialSection): EditorialProps => ({
  title,
  ...(eyelet && { eyelet }),
  body, // TODO: Parse rich text (markdown)
  reversed,
  width,
  pattern,
  ctaButtons,
  image: (
    <img
      src={image?.url ? 'http://localhost:1337' + image.url : undefined} // TODO: Sub "http://localhost:1337" for Media Library URL
      alt={image?.alternativeText ?? ''}
    />
  ),
});
