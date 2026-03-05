import { makeAllAssetURLsRelative } from '../fetch/parseAssetUrls';
import { fetchSiteWideSEO, Locale } from '../fetch/siteWideSEO';
import { appEnv } from '../api';
import { Getters } from './types';

export const getSiteWideSEO: Getters['getSiteWideSEO'] = async (tenant) => {
  const { data } = makeAllAssetURLsRelative(
    await fetchSiteWideSEO(
      tenant
        ? {
            fetchFun: appEnv.fetchFun,
            config: {
              ...appEnv.config,
              ENVIRONMENT: tenant,
            },
          }
        : appEnv,
    ),
    appEnv.config.PREVIEW_MODE === 'true',
  );

  const localesArray = Object.keys(data.locales).filter(
    (key) => data.locales[key as Locale],
  ) as ReadonlyArray<Locale>;

  return {
    ...data,
    defaultLocale: localesArray.includes(data.defaultLocale) // Is defaultLocale amongst the locales selected for building?
      ? data.defaultLocale // Y: Use it as-is
      : (localesArray[0] ?? 'it'), // N: Grab the first locale as the backup defaultLocale ('it' fallback is only needed for typescript)
  };
};
