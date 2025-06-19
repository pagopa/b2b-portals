import { getAllPages } from '@/lib/api';
import { Locale } from '@/lib/fetch/siteWideSEO';

const labelMap: Record<Locale, string> = {
  it: 'Italiano',
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
  sl: 'Slovenski',
};

export type LocalizedSlug = {
  readonly id: Locale;
  readonly value: string;
  readonly href: string;
};

export const getLocalizedSlugs = async ({
  currentSlug,
  defaultLocale,
  availableLocales,
}: {
  readonly currentSlug: readonly string[];
  readonly defaultLocale: Locale;
  readonly availableLocales: readonly Locale[];
}): Promise<readonly LocalizedSlug[]> => {
  const localized = await Promise.all(
    availableLocales.map(async (locale) => {
      const allPages = await getAllPages(locale);
      const matching = allPages.find(
        (page) => page.slug.join('/') === currentSlug.join('/'),
      );

      const href = matching
        ? locale === defaultLocale
          ? `/${matching.slug.join('/')}`
          : `/${locale}/${matching.slug.join('/')}`
        : locale === defaultLocale
          ? '/'
          : `/${locale}`;

      return {
        id: locale,
        value: labelMap[locale],
        href,
      };
    }),
  );

  return localized;
};
