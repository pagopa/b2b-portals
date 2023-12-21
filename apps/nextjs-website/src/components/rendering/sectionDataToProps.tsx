import { MDtoJSX } from './MDtoJSX';
import { HeroSection } from '@/lib/fetch/types/PageSection';
import { ExtendedHeroProps } from '@/lib/fetch/types/ExtendedPropTypes';

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
