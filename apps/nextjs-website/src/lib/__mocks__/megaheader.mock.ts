import { MegaHeaderData } from '@/lib/fetch/header';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';

export const megaHeaderMockData: MegaHeaderData & SiteWidePageData = {
  __component: 'headers.mega-header',
  themeVariant: 'SEND',
  logo: {
    url: 'https://io.italia.it/assets/img/io-it-logo-blue.svg',
    alternativeText: 'Logo IO',
    width: 120,
    height: 60,
    mime: 'image/svg+xml',
    formats: null,
  },
  ctaButton: {
    text: 'Assistenza',
    href: '/assistenza',
    variant: 'contained',
    size: 'medium',
    icon: 'HelpOutlineOutlined',
  },
  mobileCtaButton: {
    text: 'Aiuto',
    href: '/aiuto',
    variant: 'contained',
    size: 'medium',
    icon: 'HelpOutlineOutlined',
  },
  mixpanelCtaClickEvent: null,
  drawer: {
    title: 'Drawer Title',
    subtitle: 'Questo è un drawer con sottotitolo',
    buttonText: 'Apri Drawer',
    ctaCard: {
      title: 'Titolo Card CTA',
      subtitle: 'Sottotitolo Card CTA **markdown**',
      buttonText: 'Vai alla CTA',
      href: '/cta',
    },
    linkCards: [
      {
        title: 'Titolo Card Link 1',
        subtitle: 'Sottotitolo Card Link **markdown**',
        buttonText: 'Apri link',
        href: '/card-link-1',
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
  menu: {
    trackSublinkClickEvent: null,
    links: [
      {
        label: 'Scopri IO',
        sublinkGroups: [
          {
            title: 'COSA PUOI FARE CON IO',
            sublinks: [
              {
                label: 'Gestire scadenze',
                sectionID: null,
                page: { slug: 'scadenze' },
                externalURL: null,
                isNew: false,
              },
              {
                label: 'Firmare digitalmente',
                sectionID: null,
                page: { slug: 'firma' },
                externalURL: null,
                isNew: true,
              },
            ],
          },
        ],
        ctaButton: {
          text: 'Scopri IO',
          href: '/scopri',
          variant: 'contained',
          size: 'medium',
          icon: null,
        },
      },
    ],
  },
  locale: 'it',
  defaultLocale: 'it',
};
