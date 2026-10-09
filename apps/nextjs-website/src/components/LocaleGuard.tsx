'use client';

import { Locale } from '@/lib/fetch/siteWideSEO';
import { defineRedirectBehaviour } from '@/lib/localeGuard';
import { useLayoutEffect, useState, useEffect } from 'react';

interface LocaleGuardProps {
  children: React.ReactNode;
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
}: LocaleGuardProps) {
  const [ready, setReady] = useState<boolean>(false);

  useLayoutEffect(() => {
    const preferredLang = localStorage.getItem('preferredLang');
    const browserLang = navigator.language.substring(0, 2).toLowerCase();

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

    const redirect = expectedBehaviour.redirect;

    if (redirect) {
      const targetLocale =
        redirect === 'preferred'
          ? preferredLang
          : redirect === 'browser'
            ? browserLang
            : defaultLocale;

      const path =
        targetLocale === defaultLocale
          ? noLocaleSlug
          : [targetLocale, ...noLocaleSlug];

      const targetUrl = new URL(`/${path.join('/')}`, window.location.origin);
      // eslint-disable-next-line functional/immutable-data
      targetUrl.hash = window.location.hash;

      window.location.replace(targetUrl.toString());
    }

    setReady(!redirect);
  }, [languages, locale, defaultLocale, noLocaleSlug]);

  useEffect(() => {
    if (!ready || !window.location.hash) return;
    const sectionId = window.location.hash.substring(1);
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView();
    }
  }, [ready]);

  return ready ? children : null;
}
