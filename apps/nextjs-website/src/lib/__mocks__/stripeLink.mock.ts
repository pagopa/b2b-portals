import { StripeLinkSection } from '@/lib/fetch/types/PageSection';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';

export const stripeLinkMockData: StripeLinkSection & SiteWidePageData = {
  __component: 'sections.stripe-link',
  theme: 'dark',
  themeVariant: 'SEND',
  subtitle: 'StripeLink Subtitle con [link](https://io.italia.it)',
  icon: {
    url: 'https://d2mk0pc4ejgxx6.cloudfront.net/dark_icon_dee9ab4f99.svg',
    alternativeText: 'Icona',
    width: 32,
    height: 32,
    mime: 'image/svg+xml',
    formats: null,
  },
  link: {
    label: 'Scopri di più',
    href: '/scopri-di-piu',
  },
  sectionID: 'stripe-link-section',
  locale: 'it',
  defaultLocale: 'it',
};
