import { FooterData } from '@/lib/fetch/footer';
import { Locale, SiteWidePageData } from '@/lib/fetch/siteWideSEO';

export const footerMockData: FooterData['data'] &
  SiteWidePageData & {
    readonly locales: ReadonlyArray<Locale>;
  } = {
  legalInfo:
    '**PagoPA S.p.A.** — Società per azioni con socio unico · Capitale sociale di euro 1.000.000 interamente versato · Sede legale in Roma, Piazza Colonna 370, CAP 00187 · N. di iscrizione a Registro Imprese di Roma, CF e P.IVA 15376371009',
  showFundedByNextGenerationEULogo: true,
  companyLink: {
    href: '#',
    ariaLabel: 'Company link',
  },
  links_aboutUs: {
    title: 'Chi siamo',
    links: [
      {
        label: 'Chi siamo',
        href: '#',
        ariaLabel: 'Chi siamo',
        showOneTrustPreferencies: null,
      },
      {
        label: 'PNRR',
        href: '#',
        ariaLabel: 'PNRR',
        showOneTrustPreferencies: null,
      },
      {
        label: 'Media',
        href: '#',
        ariaLabel: 'Media',
        showOneTrustPreferencies: null,
      },
      {
        label: 'Lavora con noi',
        href: '#',
        ariaLabel: 'Lavora con noi',
        showOneTrustPreferencies: null,
      },
    ],
  },
  links_services: {
    title: 'Prodotti e Servizi',
    links: [
      {
        label: 'App IO',
        href: '#',
        ariaLabel: 'App IO',
        showOneTrustPreferencies: null,
      },
      {
        label: 'Piattaforma pagoPA',
        href: '#',
        ariaLabel: 'Piattaforma pagoPA',
        showOneTrustPreferencies: null,
      },
      {
        label: 'SEND',
        href: '#',
        ariaLabel: 'SEND',
        showOneTrustPreferencies: null,
      },
      {
        label: 'Centro stella',
        href: '#',
        ariaLabel: 'Centro stella',
        showOneTrustPreferencies: null,
      },
      {
        label: 'Check IBAN',
        href: '#',
        ariaLabel: 'Check IBAN',
        showOneTrustPreferencies: null,
      },
      {
        label: 'Piattaforma Dati',
        href: '#',
        ariaLabel: 'Piattaforma Dati',
        showOneTrustPreferencies: null,
      },
    ],
  },
  links_resources: {
    title: 'Risorse',
    links: [
      {
        label: 'Note legali',
        href: '#',
        ariaLabel: 'Note legali',
        showOneTrustPreferencies: null,
      },
      {
        label: 'Informativa Privacy',
        href: '#',
        ariaLabel: 'Informativa Privacy',
        showOneTrustPreferencies: null,
      },
      {
        label: 'Preferenza cookie',
        href: '#',
        ariaLabel: 'Preferenza cookie',
        showOneTrustPreferencies: true,
      },
      {
        label: 'Protezione dati personali',
        href: '#',
        ariaLabel: 'Protezione dati personali',
        showOneTrustPreferencies: null,
      },
      {
        label: 'Sicurezza e qualità',
        href: '#',
        ariaLabel: 'Sicurezza e qualità',
        showOneTrustPreferencies: null,
      },
    ],
  },
  links_followUs: {
    title: 'Seguici su',
    links: [
      {
        label: 'Accessibilità',
        href: '#',
        ariaLabel: 'Accessibilità',
        showOneTrustPreferencies: null,
      },
      {
        label: 'Italiano',
        href: '#',
        ariaLabel: 'Lingua',
        showOneTrustPreferencies: null,
      },
    ],
    socialLinks: [
      {
        icon: {
          url: '/mock-social-icon.svg',
          alternativeText: 'Social Icon',
          width: 24,
          height: 24,
          mime: 'image/svg+xml',
          formats: null,
        },
        href: '#',
        ariaLabel: 'Social',
      },
    ],
  },
  locale: 'it',
  defaultLocale: 'it',
  themeVariant: 'SEND',
  locales: ['it', 'en'],
};
