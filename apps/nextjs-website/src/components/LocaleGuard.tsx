'use client';

import { Locale } from '@/lib/fetch/siteWideSEO';
import { useEffect, useState } from 'react';

interface Props {
  children: JSX.Element;
  slug: string[] | undefined;
  locale: Locale;
  defaultLocale: Locale;
  languages: string[];
}

export default function LocaleGuard({
  slug,
  children,
  defaultLocale,
  languages,
  locale,
}: Props) {
  const [ready, setReady] = useState<boolean>(false);

  const checkLocale = (locale: Locale) => {
    const isLocaleStored = !!localStorage.getItem('preferredLang');
    const preferredLang = localStorage.getItem('preferredLang') ?? '';
    const browserLocale = navigator.language.substring(0, 2).toLowerCase();
    const isBrowserLocaleSupported = languages.includes(browserLocale ?? '');
    const isLocaleSupported = languages.includes(locale);
    const isPreferredLangSupported = languages.includes(preferredLang);
    const redirectUrl = (lang: string) => {
      const slugWithoutLocale =
        slug === undefined
          ? []
          : languages.includes(slug[0] ?? '')
            ? slug.slice(1)
            : slug;

      const slugs = (lang !== defaultLocale ? [lang] : []).concat(
        slugWithoutLocale,
      );
      return `/${slugs.join('/')}`;
    };

    if (!isLocaleStored) {
      if (browserLocale !== locale && isBrowserLocaleSupported) {
        localStorage.setItem('preferredLang', browserLocale);
        setReady(false);
        window.open(`${redirectUrl(browserLocale)}`, '_self');
        return;
      }
      if (!isLocaleSupported) {
        setReady(false);
        window.open(`${redirectUrl(defaultLocale)}`, '_self');
        return;
      }
    } else {
      if (preferredLang !== locale) {
        setReady(false);
        if (isPreferredLangSupported) {
          window.open(`${redirectUrl(preferredLang)}`, '_self');
        } else {
          localStorage.removeItem('preferredLang');
          window.open(`${redirectUrl(defaultLocale)}`, '_self');
        }
        return;
      }
    }
    setReady(true);
  };

  useEffect(() => {
    checkLocale(locale);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug, children, locale]);

  return ready ? children : null;
}
