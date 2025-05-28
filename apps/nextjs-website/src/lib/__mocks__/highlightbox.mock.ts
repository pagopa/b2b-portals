import { HighlightBoxSection } from '@/lib/fetch/types/PageSection';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';

export const highlightBoxMockData: HighlightBoxSection & SiteWidePageData = {
  __component: 'sections.highlight-box',
  title: 'Sta arrivando IT Wallet!',
  body: `Se hai tra 18 e 35 anni compiuti puoi richiedere su IO la Carta Giovani Nazionale, istituita dal Dipartimento per le Politiche Giovanili e il Servizio Civile Universale. La carta dà diritto a sconti e agevolazioni per l’accesso ad attività culturali, sportive e ricreative, anche con finalità formative.`,
  eyelet: 'In arrivo su IO',
  link: {
    label: 'Scopri di più',
    href: '/',
  },
  image: {
    url: 'https://notifichedigitali.pagopa.it/static/images/hero-cittadini-foreground.png',
    alternativeText: 'Mock Highlight Image',
    width: 1200,
    height: 800,
    mime: 'image/png',
    formats: null,
  },
  sectionID: 'highlight-box-1',
  locale: 'it',
  defaultLocale: 'it',
  themeVariant: 'SEND',
};
