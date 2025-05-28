import { StatsSection } from '@/lib/fetch/types/PageSection';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';

export const statsMockData: StatsSection & SiteWidePageData = {
  __component: 'sections.stats',
  sectionID: 'stats-section',
  title: 'Siamo in tanti',
  eyelet: 'I NUMERI',
  body: 'Ogni giorno si uniscono nuovi enti e servizi, e sempre più persone usano IO.',
  items: [
    {
      title: '647M',
      description: 'messaggi inviati dagli enti su IO',
      icon: {
        url: 'https://io.italia.it/assets/img/io-it-logo-blue.svg',
        alternativeText: 'Icona messaggi',
        width: 64,
        height: 64,
        mime: 'image/svg+xml',
        formats: null,
      },
    },
    {
      title: '8M',
      description: 'metodi di pagamento aggiunti dalle persone',
      icon: {
        url: 'https://io.italia.it/assets/img/io-it-logo-blue.svg',
        alternativeText: 'Icona pagamenti',
        width: 64,
        height: 64,
        mime: 'image/svg+xml',
        formats: null,
      },
    },
    {
      title: '319.629',
      description: 'servizi locali e nazionali disponibili',
      icon: {
        url: 'https://io.italia.it/assets/img/io-it-logo-blue.svg',
        alternativeText: 'Icona servizi',
        width: 64,
        height: 64,
        mime: 'image/svg+xml',
        formats: null,
      },
    },
  ],
  locale: 'it',
  defaultLocale: 'it',
  themeVariant: 'SEND',
};
