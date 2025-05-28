import { PressReleaseListSection } from '@/lib/fetch/types/PageSection';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';
import { PressReleasePage } from '@/lib/fetch/pressRelease';

export const pressReleaseListMockData: PressReleaseListSection &
  SiteWidePageData & {
    readonly pressReleasePages: ReadonlyArray<PressReleasePage>;
  } = {
  __component: 'sections.press-release-list',
  title: 'Comunicati stampa',
  sectionID: 'press-release-list',
  locale: 'it',
  defaultLocale: 'it',
  themeVariant: 'SEND',
  pressReleasePages: [
    {
      slug: 'app-io-accesso-rapido',
      seo: {
        metaTitle: 'App IO: nuova funzionalità per accesso rapido',
        metaDescription:
          'Scopri la nuova funzionalità per un accesso più semplice all’app IO.',
        keywords: null,
        canonicalURL: null,
        ogTitle: null,
        ogDescription: null,
        structuredData: {},
      },
      pressRelease: {
        date: '2024-01-31',
        title: 'App IO: arriva la nuova funzionalità per un accesso rapido',
        subtitle: null,
        body: 'Testo del comunicato stampa...',
        sectionID: 'press-1',
        backlink: {
          label: 'Torna ai comunicati stampa',
          href: '/',
        },
      },
    },
    {
      slug: 'donazioni-ucraina-pagopa',
      seo: {
        metaTitle: 'Donazioni Ucraina concluse',
        metaDescription: 'Termina l’iniziativa di donazione tramite pagoPA.',
        keywords: null,
        canonicalURL: null,
        ogTitle: null,
        ogDescription: null,
        structuredData: {},
      },
      pressRelease: {
        date: '2022-12-23',
        title:
          'Donazioni Ucraina: terminata l’iniziativa su piattaforma pagoPA e app IO',
        subtitle: null,
        body: 'Testo del comunicato stampa...',
        sectionID: 'press-2',
        backlink: {
          label: 'Torna ai comunicati stampa',
          href: '/',
        },
      },
    },
  ],
};
