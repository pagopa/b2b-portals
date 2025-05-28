import { StandardHeaderData } from '@/lib/fetch/header';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';

export const headerMockData: StandardHeaderData & SiteWidePageData = {
  __component: 'headers.standard-header',
  productName: 'Nome Prodotto',
  beta: true,
  logo: {
    url: 'https://notifichedigitali.pagopa.it/static/images/logo.svg',
    alternativeText: 'Logo Mock',
    width: 100,
    height: 50,
    mime: 'image/svg+xml',
    formats: null,
  },
  supportLink: '#supporto',
  menu: {
    links: [
      {
        label: 'Link senza sottolink',
        alignRight: false,
        page: { slug: 'link1' },
        sectionID: null,
        sublinks: [],
      },
      {
        label: 'Link con sottolink',
        alignRight: false,
        page: { slug: 'link2' },
        sectionID: null,
        sublinks: [
          {
            label: 'Sottolink 1',
            sectionID: null,
            page: { slug: 'link2-s1' },
            externalURL: null,
          },
          {
            label: 'Sottolink 2',
            sectionID: null,
            page: null,
            externalURL: 'https://example.com/sottolink2',
          },
        ],
      },
    ],
  },
  drawer: {
    buttonText: 'Apri Drawer',
    title: 'Titolo Drawer',
    subtitle: 'Sottotitolo Drawer',
    ctaCard: {
      title: 'Titolo Card CTA',
      subtitle: 'Sottotitolo Card **CTA** con markdown',
      buttonText: 'CTA Button',
      href: '#cta',
    },
    linkCards: [
      {
        title: 'Titolo Card 1',
        subtitle: 'Descrizione **markdown** card 1',
        buttonText: 'Vai',
        href: '#card1',
        icons: [
          {
            url: 'https://d2mk0pc4ejgxx6.cloudfront.net/light_icon_f76dbe7883.svg',
            alternativeText: null,
            width: 32,
            height: 32,
            mime: 'image/svg+xml',
            formats: null,
          },
        ],
      },
    ],
  },
  locale: 'it',
  defaultLocale: 'it',
  themeVariant: 'SEND',
};
