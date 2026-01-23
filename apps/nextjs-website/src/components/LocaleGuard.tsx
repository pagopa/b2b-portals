'use client';

import { ReactNode, useEffect, useState } from 'react';

interface Props {
  children: ReactNode;
  slug: string[] | undefined;
}

export default function LocaleGuard({ slug, children }: Props) {
  const [ready, setReady] = useState<ReactNode>(<></>);

  useEffect(() => {
    const languages = ['it', 'en', 'de', 'fr', 'sl'];
    const defaultLocale = 'it';
    const browserLocale = navigator.language.substring(0, 2).toLowerCase();
    const isBrowserDefaultLocale = browserLocale === defaultLocale;
    const storedLanguage = localStorage.getItem('storedLanguage');

    if (storedLanguage && languages.includes(storedLanguage)) {
      // Locale is already set. The user was already there.
      setReady(children);
      return;
    }

    if (slug && slug.length > 0) {
      // Verify is locale is present in the first slug
      const localeSlug = slug[0] ?? '';
      if (languages.includes(localeSlug) && !storedLanguage) {
        // Should set local storage?
        localStorage.setItem('storedLanguage', localeSlug);
        // Or a popup which helps the user to switch to in his own language pages?
      }
      setReady(children);
      return;
    }

    // When no slug is present it means it's default home page
    if (isBrowserDefaultLocale) {
      // browser locale is the same as website default locale
      localStorage.setItem('storedLanguage', browserLocale);
      setReady(children);
    } else if (languages.includes(browserLocale)) {
      // switch to proper locale home page
      localStorage.setItem('storedLanguage', browserLocale);
      window.open(`/${browserLocale}`, '_self');
      setReady(<></>);
    } else {
      localStorage.setItem('storedLanguage', defaultLocale);
      setReady(children);
    }
  }, [slug, children]);

  return ready;
}
