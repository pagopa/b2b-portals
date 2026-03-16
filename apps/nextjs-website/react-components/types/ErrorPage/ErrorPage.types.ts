type Locale = 'it' | 'en' | 'fr' | 'de' | 'sl';

export interface ErrorPageProps {
  defaultLocale: Locale;
  validLocales: Array<Locale>;
}
