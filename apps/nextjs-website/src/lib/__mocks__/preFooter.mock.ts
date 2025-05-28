import { PreFooterAttributes } from '@/lib/fetch/preFooter';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';

export const preFooterMockData: PreFooterAttributes & SiteWidePageData = {
  title: 'Scarica l’app IO',
  theme: 'light',
  layout: 'left',
  background: {
    url: 'https://assets.innovazione.gov.it/1610704590-io.png',
    alternativeText: null,
    width: 1920,
    height: 1080,
    mime: 'image/png',
    formats: null,
  },
  storeButtons: {
    hrefApple: 'https://www.apple.com/it/app-store/',
    hrefGoogle: 'https://play.google.com/store',
  },
  ctaButtons: [],
  exclude: [],
  locale: 'it',
  defaultLocale: 'it',
  themeVariant: 'SEND',
};
