'use client';

import { Locale } from '@/lib/fetch/siteWideSEO';
import { defineRedirectBehaviour } from '@/lib/localeGuard';
import { useLayoutEffect, useState } from 'react';

interface Props {
  children: JSX.Element;
  noLocaleSlug: string[];
  locale: Locale;
  defaultLocale: Locale;
  languages: string[];
}

export default function LocaleGuard({
  noLocaleSlug,
  children,
  languages,
  locale,
  defaultLocale,
}: Props) {
  const [ready, setReady] = useState<boolean>(false);
  const preferredLang = localStorage.getItem('preferredLang');
  const browserLang = navigator.language.substring(0, 2).toLowerCase();

  useLayoutEffect(() => {
    const expectedBehaviour = defineRedirectBehaviour({
      preferredLang,
      browserLang,
      supportedLangs: languages,
      locale,
    });

    switch (expectedBehaviour.localStorage) {
      case 'write':
        localStorage.setItem('preferredLang', browserLang);
        break;
      case 'delete':
        localStorage.removeItem('preferredLang');
        break;
    }

    switch (expectedBehaviour.redirect) {
      case 'default':
        window.open(`/${noLocaleSlug.join('/')}`, '_self');
        break;
      case 'browser':
        window.open(
          browserLang === defaultLocale
            ? `/${noLocaleSlug.join('/')}`
            : `/${[browserLang].concat(noLocaleSlug).join('/')}`,
          '_self',
        );
        break;
      case 'preferred':
        window.open(
          preferredLang === defaultLocale
            ? `/${noLocaleSlug.join('/')}`
            : `/${[preferredLang].concat(noLocaleSlug).join('/')}`,
          '_self',
        );
        break;
    }

    setReady(!expectedBehaviour.redirect);
  }, [browserLang, languages, locale, noLocaleSlug, preferredLang]);

  return ready ? children : null;
}
