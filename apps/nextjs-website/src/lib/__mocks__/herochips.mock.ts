import { HeroChipsSection } from '@/lib/fetch/types/PageSection';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';

export const heroChipsMockData: HeroChipsSection & SiteWidePageData = {
  __component: 'sections.hero-chips',
  title: 'Enti locali',
  subtitle: null,
  theme: 'dark',
  sectionID: 'mock-hero-chips-section',
  background: {
    url: 'https://notifichedigitali.pagopa.it/static/images/hero-enti-background.png',
    alternativeText: 'Background immagine mock',
    width: 1920,
    height: 1080,
    mime: 'image/png',
    formats: null,
  },
  chips: [
    { label: 'Notifiche', targetID: 'notifiche' },
    { label: 'SEND', targetID: 'send' },
    { label: 'Recapiti', targetID: 'recapiti' },
    {
      label: 'Documenti e comunicazioni',
      targetID: 'documenti-e-comunicazioni',
    },
    {
      label: 'Ricezione di una notifica',
      targetID: 'ricezione-di-una-notifica',
    },
    { label: 'Perfezionamento', targetID: 'perfezionamento' },
    { label: 'Annullamento', targetID: 'annullamento' },
    { label: 'Accessibilità', targetID: 'accessibilita' },
  ],
  locale: 'it',
  defaultLocale: 'it',
  themeVariant: 'SEND',
};
