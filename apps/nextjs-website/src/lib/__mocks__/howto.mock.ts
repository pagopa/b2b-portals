import * as t from 'io-ts';
import { HowToSection } from '@/lib/fetch/types/PageSection';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';

export const howToMockData: HowToSection & SiteWidePageData = {
  __component: 'sections.how-to',
  title: 'Come iniziare',
  theme: 'dark',
  rowMaxSteps: 4 as t.TypeOf<typeof t.Int>,
  stepsAlignment: 'center',
  sectionID: 'how-to-section',
  link: {
    label: 'Scopri di più',
    href: '/',
  },
  steps: [
    {
      title: 'Registrati',
      description: 'Crea un account con <strong>SPID</strong> o <em>CIE</em>.',
      icon: {
        url: 'https://d2mk0pc4ejgxx6.cloudfront.net/dark_icon_dee9ab4f99.svg',
        alternativeText: null,
        width: 24,
        height: 24,
        mime: 'image/svg+xml',
        formats: null,
      },
    },
    {
      title: 'Accedi ai servizi',
      description: 'Naviga nell’app e scopri i servizi disponibili.',
      icon: {
        url: 'https://d2mk0pc4ejgxx6.cloudfront.net/dark_icon_dee9ab4f99.svg',
        alternativeText: null,
        width: 24,
        height: 24,
        mime: 'image/svg+xml',
        formats: null,
      },
    },
    {
      title: 'Ricevi notifiche',
      description:
        'Resta aggiornato con le <strong>notifiche</strong> importanti.',
      icon: {
        url: 'https://d2mk0pc4ejgxx6.cloudfront.net/dark_icon_dee9ab4f99.svg',
        alternativeText: null,
        width: 24,
        height: 24,
        mime: 'image/svg+xml',
        formats: null,
      },
    },
    {
      title: 'Paga online',
      description: 'Paga comodamente dal tuo smartphone.',
      icon: {
        url: 'https://d2mk0pc4ejgxx6.cloudfront.net/dark_icon_dee9ab4f99.svg',
        alternativeText: null,
        width: 24,
        height: 24,
        mime: 'image/svg+xml',
        formats: null,
      },
    },
  ],
  locale: 'it',
  defaultLocale: 'it',
  themeVariant: 'SEND',
};
