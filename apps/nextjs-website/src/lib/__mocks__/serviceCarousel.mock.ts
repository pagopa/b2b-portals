import { ServiceCarouselSection } from '@/lib/fetch/types/PageSection';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';

export const serviceCarouselMockData: ServiceCarouselSection &
  SiteWidePageData = {
  __component: 'sections.service-carousel',
  title: 'Le funzionalità su IO',
  eyelet: 'FIORE',
  description:
    'Piattaforma Notifiche digitalizza e semplifica la gestione delle comunicazioni a valore legale. Gli enti mittenti non devono che depositare l’atto da notificare: sarà la piattaforma a occuparsi dell’invio, per via digitale o analogica.',
  sectionID: 'service-carousel',
  cards: Array.from({ length: 5 }).map((_, i) => ({
    title: `Funzionalità ${i + 1}`,
    description:
      'Con pagoPA integrata nell’app, paghi in modo rapido e sicuro i servizi di tutti gli Enti della Pubblica Amministrazione.',
    link: {
      label: 'Scopri funzionalità',
      href: '/funzionalita',
    },
    image: {
      url: 'https://d2mk0pc4ejgxx6.cloudfront.net/light_icon_f76dbe7883.svg',
      alternativeText: 'Icona funzionalità',
      width: 64,
      height: 64,
      mime: 'image/svg+xml',
      formats: null,
    },
  })),
  locale: 'it',
  defaultLocale: 'it',
  themeVariant: 'SEND',
};
