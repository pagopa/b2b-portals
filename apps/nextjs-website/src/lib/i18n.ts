import { Locale } from '@/lib/fetch/siteWideSEO';

export type I18nObject = {
  readonly [key in Locale]: {
    readonly translation: Readonly<
      Record<
        string,
        string | ((...args: ReadonlyArray<string | number>) => string)
      >
    >;
  };
};

const i18n = (
  locale: Locale,
  defaultLocale: Locale,
  data: I18nObject,
  template: string,
  args: ReadonlyArray<string | number> = [],
): string => {
  const currentLocale = data[locale] ?? data[defaultLocale];
  const templateKey = currentLocale.translation[template];

  if (!templateKey) return '';

  if (typeof templateKey === 'function') {
    return templateKey(...args) ?? '';
  }

  return templateKey ?? '';
};

export const createI18n =
  (locale: Locale, defaultLocale: Locale, data: I18nObject) =>
  (template: string, ...args: ReadonlyArray<string | number>) =>
    i18n(locale, defaultLocale, data, template, args);
