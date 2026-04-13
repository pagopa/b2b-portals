'use client';
import MarkdownRenderer from './MarkdownRenderer';
import { Form as FormRC } from '@react-components/components';
import { FormProps } from '@react-components/types';
import { FormSection } from '@/lib/fetch/types/PageSection';
import { makeSrcSetFromStrapiImageData, IMAGE_SIZES } from '@/lib/image';
import { Locale, SiteWidePageData } from '@/lib/fetch/siteWideSEO';

const formLabels: Record<Locale, FormProps['labels']> = {
  it: {
    insertName: 'Inserisci il nome',
    insertSurname: 'Inserisci il cognome',
    insertEmail: 'Inserisci l’indirizzo email',
    insertInstitutionName: 'Inserisci il nome dell’ente',
    insertValidEmail: 'Inserisci un indirizzo email valido',
    name: 'Nome',
    surname: 'Cognome',
    email: 'Indirizzo e-mail',
    institutionName: 'Nome ente',
  },
  en: {
    insertName: 'Enter your first name',
    insertSurname: 'Enter your last name',
    insertEmail: 'Enter your email address',
    insertInstitutionName: 'Enter your institution name',
    insertValidEmail: 'Enter a valid email address',
    name: 'First name',
    surname: 'Surname',
    email: 'Email address',
    institutionName: 'Institution name',
  },
  fr: {
    insertName: 'Saisissez votre prénom',
    insertSurname: 'Saisissez votre nom',
    insertEmail: 'Saisissez votre adresse courriel',
    insertInstitutionName: 'Saisissez le nom de votre établissement',
    insertValidEmail: 'Saisissez une adresse courriel valide',
    name: 'Prénom',
    surname: 'Nom',
    email: 'Adresse courriel',
    institutionName: "Nom de l'établissement",
  },
  de: {
    insertName: 'Geben Sie Ihren Vornamen ein',
    insertSurname: 'Geben Sie Ihren Nachnamen ein',
    insertEmail: 'Geben Sie Ihre E-Mail-Adresse ein',
    insertInstitutionName: 'Geben Sie den Namen Ihrer Institution ein',
    insertValidEmail: 'Geben Sie eine gültige E-Mail-Adresse ein',
    name: 'Vorname',
    surname: 'Nachname',
    email: 'E-Mail-Adresse',
    institutionName: 'Name der Institution',
  },
  sl: {
    insertName: 'Vnesite svoje ime',
    insertSurname: 'Vnesite svoj priimek',
    insertEmail: 'Vnesite svoj e-poštni naslov',
    insertInstitutionName: 'Vnesite ime svoje ustanove',
    insertValidEmail: 'Vnesite veljaven e-poštni naslov',
    name: 'Ime',
    surname: 'Priimek',
    email: 'E-poštni naslov',
    institutionName: 'Ime ustanove',
  },
};

const makeFormProps = ({
  locale,
  defaultLocale,
  subtitle,
  categories,
  categoriesTitle,
  buttonLabel,
  notes,
  background,
  placeholderName,
  placeholderSurname,
  placeholderEmail,
  placeholderOrganization,
  titleTag,
  ...rest
}: FormSection & SiteWidePageData): FormProps => ({
  labels: formLabels[locale],
  categories: categories.map(({ additionalInfo, ...category }) => ({
    ...(additionalInfo && { additionalInfo }),
    ...category,
  })),
  ...(titleTag && { titleTag }),
  ...(subtitle && { subtitle }),
  ...(categoriesTitle && { categoriesTitle }),
  buttonLabel,
  ...(notes && {
    notes: MarkdownRenderer({ markdown: notes, locale, defaultLocale }),
  }),
  ...(background && {
    background: {
      src: background.url,
      srcSet: makeSrcSetFromStrapiImageData(background),
      sizes: IMAGE_SIZES.background,
    },
  }),
  ...(placeholderName && { placeholderName }),
  ...(placeholderSurname && { placeholderSurname }),
  ...(placeholderEmail && { placeholderEmail }),
  ...(placeholderOrganization && { placeholderOrganization }),
  ...rest,
});

const Form = (props: FormSection & SiteWidePageData) => (
  <FormRC {...makeFormProps(props)} />
);

export default Form;
