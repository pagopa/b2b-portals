import { getHeader } from '../fetch/header';
import { makeAllAssetURLsRelative } from '../fetch/parseAssetUrls';
import { allSublinksNonEmpty, formatHeaderLinks } from '../header';
import { appEnv } from '../api';
import { Getters } from './types';

export const getHeaderProps: Getters['getHeaderProps'] = async (
  locale,
  defaultLocale,
) => {
  const { data } = makeAllAssetURLsRelative(
    await getHeader({ ...appEnv, locale }),
    appEnv.config.PREVIEW_MODE === 'true',
  );
  const header = data.header[0];

  if (header === undefined) {
    // Disable lint for this case because we want the build to fail if user managed to not input a menu
    // eslint-disable-next-line
    throw new Error();
  }

  // Make sure every sublink points to an internal page or links to an external URL
  if (!allSublinksNonEmpty(header)) {
    // Disable lint for this case because we don't currently allow empty links in the header
    // eslint-disable-next-line
    throw new Error();
  }

  return {
    exclude: data.exclude,
    ...formatHeaderLinks(header, locale, defaultLocale),
  };
};
