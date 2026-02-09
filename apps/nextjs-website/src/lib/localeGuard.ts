import { Locale } from './fetch/siteWideSEO';

interface DRBProps {
  readonly preferredLang: string | null;
  readonly browserLang: string;
  readonly supportedLangs: ReadonlyArray<string>;
  readonly locale: Locale;
}

interface DRBRes {
  readonly redirect?: 'preferred' | 'browser' | 'default';
  readonly localStorage?: 'write' | 'delete';
}

export const defineRedirectBehaviour = ({
  preferredLang,
  browserLang,
  supportedLangs,
  locale,
}: DRBProps): DRBRes => {
  const isPreferredLangSupported = supportedLangs.includes(preferredLang ?? '');
  const isBrowserLocaleSupported = supportedLangs.includes(browserLang);
  const isLocaleSupported = supportedLangs.includes(locale);

  if (preferredLang) {
    if (isPreferredLangSupported) {
      return preferredLang === locale ? {} : { redirect: 'preferred' };
    }

    if (!isLocaleSupported && !isBrowserLocaleSupported) {
      return { redirect: 'default', localStorage: 'delete' };
    }
    if (isBrowserLocaleSupported && browserLang !== locale) {
      return { redirect: 'browser', localStorage: 'write' };
    }
    return { localStorage: 'delete' };
  }

  if (isBrowserLocaleSupported) {
    return browserLang === locale
      ? {}
      : {
          redirect: 'browser',
          localStorage: 'write',
        };
  }

  return isLocaleSupported ? {} : { redirect: 'default' };
};
