'use client';
import MarkdownRenderer from './MarkdownRenderer';
import { Hero as HeroRC } from '@react-components/components';
import { HeroProps } from '@react-components/types';
import { HeroSection } from '@/lib/fetch/types/PageSection';
import Icon from '@/components/Icon';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';
import { makeSrcSetFromStrapiImageData } from '@/lib/image';
import { LocalizeURL } from '@/lib/linkLocalization';

const makeHeroProps = ({
  locale,
  defaultLocale,
  subtitle,
  image,
  background,
  ctaButtons,
  storeButtons,
  link,
  titleTag,
  ...rest
}: HeroSection & SiteWidePageData): HeroProps => ({
  ...rest,
  useHoverlay: false,
  ...(titleTag && { titleTag }),
  ...(subtitle && {
    subtitle: MarkdownRenderer({ markdown: subtitle, locale, defaultLocale }),
  }),
  ...(image && {
    image: {
      src: image.url,
      srcSet: makeSrcSetFromStrapiImageData(image),
      ...(image.alternativeText && {
        alt: image.alternativeText,
      }),
    },
  }),
  ...(background && {
    background: {
      src: background.url,
      srcSet: makeSrcSetFromStrapiImageData(background),
    },
  }),
  ...(ctaButtons &&
    ctaButtons.length > 0 && {
      ctaButtons: ctaButtons.map(({ icon, href, ...ctaBtn }) => ({
        ...ctaBtn,
        ...(icon && { startIcon: Icon(icon) }),
        href: LocalizeURL({ URL: href, locale, defaultLocale }),
      })),
    }),
  ...(storeButtons && {
    storeButtons: {
      ...(storeButtons.hrefGoogle && { hrefGoogle: storeButtons.hrefGoogle }),
      ...(storeButtons.hrefApple && { hrefApple: storeButtons.hrefApple }),
    },
  }),
  ...(link && {
    link: {
      label: link.label,
      href: LocalizeURL({ URL: link.href, locale, defaultLocale }),
    },
  }),
});

const Hero = (props: HeroSection & SiteWidePageData) => (
  <HeroRC {...makeHeroProps(props)} />
);

export default Hero;
