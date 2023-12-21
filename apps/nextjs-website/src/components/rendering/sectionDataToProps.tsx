import { HeroProps } from '@pagopa/pagopa-editorial-components/dist/components/Hero';
import { MDtoJSX } from './MDtoJSX';
import { EditorialSection, HeroSection } from '@/lib/fetch/types/PageSection';
import { ExtendedEditorialProps } from '@/lib/fetch/types/ExtendedPropTypes';

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
  subtitle: MDtoJSX(subtitle ?? ''),
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
      src={image?.url ? 'http://localhost:1337' + image.url : undefined} // TODO: Sub "http://localhost:1337" for Media Library URL
      alt={image?.alternativeText ?? ''}
    />
  ),
  theme,
});
