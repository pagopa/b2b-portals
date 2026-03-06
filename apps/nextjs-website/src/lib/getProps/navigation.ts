import { navigationToPageDataArray } from '../navigation';
import { makeAllAssetURLsRelative } from '../fetch/parseAssetUrls';
import { getNavigation } from '../fetch/navigation';
import { getPressReleases } from '../fetch/pressRelease';
import { pressReleaseToPageDataArray } from '../pressRelease';
import { getSiteWideSEO } from './siteWideSEO';
import { appEnv } from '../api';
import { Getters } from './types';

// Return all pages
export const getAllPages: Getters['getAllPages'] = async (locale) => {
  const navigation = makeAllAssetURLsRelative(
    await getNavigation({ ...appEnv, locale }),
    appEnv.config.PREVIEW_MODE === 'true',
  );
  const pressReleases = makeAllAssetURLsRelative(
    await getPressReleases({ ...appEnv, locale }),
    appEnv.config.PREVIEW_MODE === 'true',
  );
  const { pressReleasesParentSlug } = await getSiteWideSEO();

  return [
    ...navigationToPageDataArray(navigation),
    ...pressReleaseToPageDataArray(
      pressReleases,
      pressReleasesParentSlug ?? undefined,
    ),
  ];
};

// Return PageProps given the page path
export const getPageProps: Getters['getPageProps'] = async (
  locale,
  slugString,
) => {
  if (slugString === undefined) {
    return undefined;
  }

  const allPages = await getAllPages(locale);
  return allPages.find((page) => slugString === page.slug.toString());
};
