import { HeroCounterSection } from '@/lib/fetch/types/PageSection';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';

export const heroCounterMockData: HeroCounterSection & SiteWidePageData = {
  __component: 'sections.hero-counter',
  title: 'Enti locali',
  subtitle: `In questa pagina puoi consultare la lista in costante aggiornamento di tutti gli Enti nazionali e locali che sono saliti a bordo di IO, con il dettaglio dei rispettivi servizi già a disposizione dei cittadini.`,
  theme: 'dark',
  sectionID: 'mock-hero-counter-section',
  background: {
    url: 'https://notifichedigitali.pagopa.it/static/images/hero-enti-background.png',
    alternativeText: 'Mock background',
    width: 1920,
    height: 1080,
    mime: 'image/png',
    formats: null,
  },
  counter: {
    number: 1242,
    text: 'Enti disponibili',
  },
  link: {
    label: 'Sto cercando un Ente nazionale',
    href: '#',
  },
  locale: 'it',
  defaultLocale: 'it',
  themeVariant: 'SEND',
};
