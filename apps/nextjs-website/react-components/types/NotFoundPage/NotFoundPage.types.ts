import { ThemeVariant } from '../common/Common.types';

type Locale = 'it' | 'en' | 'fr' | 'de' | 'sl';

export interface NotFoundPageProps {
  disableRedirect?: boolean;
  defaultLocale: Locale;
  validLocales: Array<Locale>;
  themeVariant: ThemeVariant;
  custom404Image?: {
    readonly alternativeText: string | null;
    readonly url: string;
    readonly width: number;
    readonly height: number;
  } | null;
}
