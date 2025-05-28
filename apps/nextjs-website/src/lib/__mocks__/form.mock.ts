import { FormSection } from '@/lib/fetch/types/PageSection';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';

export const formMockData: FormSection & SiteWidePageData = {
  __component: 'sections.form',
  title: 'Resta aggiornato, iscriviti alla newsletter!',
  subtitle: 'Riceverai solo notizie rilevanti.',
  showName: true,
  showSurname: true,
  showOrganization: true,
  categoriesTitle: 'Vorrei ricevere news sul progetto IO in qualità di*:',
  defaultCategoryID: '1',
  categories: [
    { label: 'Cittadino', categoryID: '1', additionalInfo: null },
    { label: 'Dipendente PA', categoryID: '2', additionalInfo: null },
    {
      label: 'Partner tecnologico',
      categoryID: '3',
      additionalInfo: '(es. software house)',
    },
    { label: 'Sviluppatore', categoryID: '4', additionalInfo: null },
    { label: 'Giornalista', categoryID: '5', additionalInfo: null },
  ],
  theme: 'light',
  recaptchaSiteKey: 'mock-recaptcha-key',
  listID: 'mock-list-id',
  clientID: 'io',
  sectionID: 'mock-form-section',
  buttonLabel: 'Iscriviti',
  notes:
    'Form protetto tramite reCAPTCHA e Google **Privacy Policy** e **Termini di servizio** applicati.',
  background: {
    url: '/mock-bg.jpg',
    alternativeText: 'Background mock',
    width: 1920,
    height: 1080,
    mime: 'image/jpeg',
    formats: null,
  },
  placeholderName: 'Nome',
  placeholderSurname: 'Cognome',
  placeholderEmail: 'Email',
  placeholderOrganization: 'Organizzazione',
  locale: 'it',
  defaultLocale: 'it',
  themeVariant: 'SEND',
};
