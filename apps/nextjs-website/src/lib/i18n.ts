import { Locale } from '@/lib/fetch/siteWideSEO';

export type I18nObject = {
  readonly [key in Locale]: {
    readonly translation: Readonly<Record<string, string>>;
  };
};

const i18n = (
  locale: Locale,
  defaultLocale: Locale,
  data: I18nObject,
  template: string,
  params?: Record<string, string | number>,
) => {
  const currentLocale = data[locale] ?? data[defaultLocale];
  const templateKey = currentLocale.translation[template];
  if (params && templateKey) {
    return templateKey.replace(/{{\s*(\w+)\s*}}/g, (_, key) => {
      return String(params[key] ?? '');
    });
  }
  return templateKey ?? '';
};

export const createI18n =
  (locale: Locale, defaultLocale: Locale, data: I18nObject) =>
  (template: string, params?: Record<string, string | number>) =>
    i18n(locale, defaultLocale, data, template, params);
