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

  const checkLocale = (children: ReactNode, slug?: string[]) => {
    const isLocaleStored = !!localStorage.getItem('storedLanguage');
    const storedLanguage = localStorage.getItem('storedLanguage');
    const browserLocale = navigator.language.substring(0, 2).toLowerCase();
    const isBrowserLocaleSupported = languages.includes(browserLocale ?? '');
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

    console.log('isLocaleStored', isLocaleStored);
    console.log('browseLocale', browserLocale);
    console.log('storedLanguage', storedLanguage);
    console.log('locale', locale);
    console.log('isBrowseLocaleSupported', isBrowserLocaleSupported);
    console.log('slug array', slug);

    if (
      !isLocaleStored &&
      browserLocale !== locale &&
      isBrowserLocaleSupported
    ) {
      console.log(
        '1 - No OBJ + Lingua del browser diversa da quella attuale + Lingua del browser\
        è tra le lingue disponibili/renderizzate --> Vai alla lingua del browser\
        (in futuro sarà da mostrare il popup ma sarà un task separato) e imposta OBJ',
        `${redirectUrl(browserLocale)}`,
      );
      localStorage.setItem('storedLanguage', browserLocale);
      setReady(<></>);
      window.open(`${redirectUrl(browserLocale)}`, '_self');
      return;
    } else if (isLocaleStored && locale !== storedLanguage) {
      console.log(
        '2 - OBJ + Lingua attuale diversa da lingua in OBJ --> Reindirizza automaticamente a lingua OBJ',
        `${redirectUrl(storedLanguage ?? '')}`,
      );
      setReady(<></>);
      window.open(`${redirectUrl(storedLanguage ?? '')}`, '_self');
      return;
    } else if (
      !isLocaleStored &&
      browserLocale !== locale &&
      !isBrowserLocaleSupported
    ) {
      console.log(
        'No OBJ + Lingua del browser diversa da quella attuale + Lingua non supportata --> Non fare nulla',
      );
    } else if (!isLocaleStored && browserLocale === locale) {
      console.log(
        'No OBJ + Lingua del browser uguale a quella attuale --> Non fare nulla',
      );
    } else if (isLocaleStored && locale === storedLanguage) {
      console.log(
        'OBJ + Lingua attuale uguale a lingua in OBJ --> Non fare nulla',
      );
    }
    setReady(children);
  };

  useEffect(() => {
    checkLocale(children, slug);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug, children]);

  return ready;
}
