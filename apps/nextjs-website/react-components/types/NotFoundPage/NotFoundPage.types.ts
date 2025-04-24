type Locale = 'it' | 'en' | 'fr' | 'de' | 'sl';

export interface NotFoundPageProps {
  disableRedirect?: boolean;
  defaultLocale: Locale;
  validLocales: Array<Locale>;
}
