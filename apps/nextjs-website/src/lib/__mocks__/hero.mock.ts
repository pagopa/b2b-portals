import { HeroSection } from '@/lib/fetch/types/PageSection';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';

export const heroMockData: HeroSection & SiteWidePageData = {
  __component: 'sections.hero',
  title: 'Mock Hero Title',
  titleTag: 'h1',
  subtitle: 'Questo è un **sottotitolo** mock per la Hero section.',
  theme: 'dark',
  inverse: false,
  size: 'big',
  sectionID: 'mock-hero-section',
  image: {
    url: 'https://notifichedigitali.pagopa.it/static/images/hero-enti-foreground.png',
    alternativeText: 'Mock Hero Image',
    width: 800,
    height: 600,
    mime: 'image/png',
    formats: null,
  },
  background: {
    url: 'https://notifichedigitali.pagopa.it/static/images/hero-enti-background.png',
    alternativeText: 'Mock Background Image',
    width: 1600,
    height: 900,
    mime: 'image/png',
    formats: null,
  },
  ctaButtons: [
    {
      text: 'Mock CTA 1',
      href: '#mock1',
      variant: 'contained',
      size: 'medium',
      icon: 'HelpOutlineOutlined',
    },
    {
      text: 'Mock CTA 2',
      href: '#mock2',
      variant: 'outlined',
      size: 'medium',
      icon: null,
    },
  ],
  storeButtons: {
    hrefGoogle: 'https://play.google.com',
    hrefApple: 'https://apple.com',
  },
  link: {
    label: 'Scopri di più',
    href: '/scopri-di-piu',
  },
  locale: 'it',
  defaultLocale: 'it',
  themeVariant: 'SEND',
};
