'use client';

import { Locale } from '@/lib/fetch/siteWideSEO';
import { ReactNode, useEffect, useState } from 'react';

interface Props {
  children: ReactNode;
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
  const [ready, setReady] = useState<ReactNode>(<></>);

  const checkLocale = (children: ReactNode, locale: Locale) => {
    const isLocaleStored = !!localStorage.getItem('storedLocale');
    const storedLocale = localStorage.getItem('storedLocale') ?? '';
    const browserLocale = navigator.language.substring(0, 2).toLowerCase();
    const isBrowserLocaleSupported = languages.includes(browserLocale ?? '');
    const isLocaleSupported = languages.includes(locale);
    const isStoredLocaleSupported = languages.includes(storedLocale);
    const redirectUrl = (lang: string) =>
      `/${lang !== defaultLocale ? lang : ''}`;

    if (!isLocaleStored) {
      if (browserLocale !== locale && isBrowserLocaleSupported) {
        localStorage.setItem('storedLocale', browserLocale);
        setReady(<></>);
        window.open(`${redirectUrl(browserLocale)}`, '_self');
        return;
      }
      if (!isLocaleSupported) {
        setReady(<></>);
        window.open(`${redirectUrl(defaultLocale)}`, '_self');
        return;
      }
    } else {
      if (storedLocale !== locale) {
        setReady(<></>);
        if (isStoredLocaleSupported) {
          window.open(`${redirectUrl(storedLocale)}`, '_self');
        } else {
          localStorage.removeItem('storedLocale');
          window.open(`${redirectUrl(defaultLocale)}`, '_self');
        }
        return;
      }
    }
    setReady(children);
  };

  useEffect(() => {
    checkLocale(children, locale);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug, children, locale]);

  return ready;
}
