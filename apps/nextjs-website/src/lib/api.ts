/** This file contains all the functions useful to get data from external resources */
import { pipe } from 'fp-ts/lib/function';
import * as E from 'fp-ts/lib/Either';
import { AppEnv, Config, makeAppEnv } from '../AppEnv';
import { getNavigation } from './fetch/navigation';
import { navigationToPageDataArray, PageData } from './navigation';
import { PreHeaderAttributes, getPreHeader } from './fetch/preHeader';
import { FooterData, getFooter } from './fetch/footer';
import { getHeader, HeaderData } from './fetch/header';
import { Locale, SiteWideSEO, fetchSiteWideSEO } from './fetch/siteWideSEO';
import {
  PageIDs,
  PreviewPageData,
  fetchAllPageIDs,
  fetchAllPageSwitchPageIDs,
  fetchAllPressReleaseIDs,
  fetchPageFromID,
  fetchPageSwitchPageFromID,
  fetchPressReleaseFromID,
} from './fetch/preview';
import { allSublinksNonEmpty, formatHeaderLinks } from './header';
import { getPreFooter, PreFooterAttributes } from './fetch/preFooter';
import { getPressReleases, PressReleasePage } from './fetch/pressRelease';
import {
  pressReleaseToPageDataArray,
  previewPressReleaseToPreviewPageData,
} from './pressRelease';
import { makeAllAssetURLsRelative } from './fetch/parseAssetUrls';

// create AppEnv given process env
const appEnv = pipe(
  makeAppEnv(process.env),
  E.getOrElseW((errors) => {
    // eslint-disable-next-line functional/no-throw-statements
    throw errors;
  }),
);

// Return all the pages
export const getAllPages = async (
  locale: Locale,
): Promise<ReadonlyArray<PageData>> => {
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

export const getPressReleasePages = async (
  locale: Locale,
): Promise<ReadonlyArray<PressReleasePage>> => {
  const { data } = makeAllAssetURLsRelative(
    await getPressReleases({ ...appEnv, locale }),
    appEnv.config.PREVIEW_MODE === 'true',
  );
  return data;
};

// Return PreHeaderProps
export const getPreHeaderProps = async (
  locale: Locale,
): Promise<PreHeaderAttributes | null> => {
  const { data } = makeAllAssetURLsRelative(
    await getPreHeader({ ...appEnv, locale }),
    appEnv.config.PREVIEW_MODE === 'true',
  );
  return data;
};

export const getHeaderProps = async (
  locale: Locale,
  defaultLocale: Locale,
): Promise<
  HeaderData['data']['header'][0] & {
    readonly exclude: HeaderData['data']['exclude'];
  }
> => {
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

export const getFooterProps = async (
  locale: Locale,
): Promise<FooterData['data']> => {
  const { data } = makeAllAssetURLsRelative(
    await getFooter({ ...appEnv, locale }),
    appEnv.config.PREVIEW_MODE === 'true',
  );
  return data;
};

export const getPreFooterProps = async (
  locale: Locale,
): Promise<PreFooterAttributes | null> => {
  const { data } = makeAllAssetURLsRelative(
    await getPreFooter({ ...appEnv, locale }),
    appEnv.config.PREVIEW_MODE === 'true',
  );
  return data;
};

// Return PageProps given the page path
export const getPageProps = async (
  locale: Locale,
  slugString: string | undefined,
): Promise<PageData | undefined> => {
  if (slugString === undefined) {
    return undefined;
  }

  const allPages = await getAllPages(locale);
  return allPages.find((page) => slugString === page.slug.toString());
};

export const getSiteWideSEO = async (): Promise<SiteWideSEO['data']> => {
  const { data } = makeAllAssetURLsRelative(
    await fetchSiteWideSEO(appEnv),
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

export const getAllPageIDs = async (
  tenant: Config['ENVIRONMENT'],
  locale: Locale,
): Promise<PageIDs['data']> => {
  const appEnvWithRequestedTenant: AppEnv = {
    config: {
      ...appEnv.config,
      ENVIRONMENT: tenant,
    },
    fetchFun: appEnv.fetchFun,
  };
  const pageIDs = await fetchAllPageIDs({
    ...appEnvWithRequestedTenant,
    locale,
  });
  return pageIDs.data;
};

export const getAllPressReleaseIDs = async (
  tenant: Config['ENVIRONMENT'],
  locale: Locale,
): Promise<PageIDs['data']> => {
  const appEnvWithRequestedTenant: AppEnv = {
    config: {
      ...appEnv.config,
      ENVIRONMENT: tenant,
    },
    fetchFun: appEnv.fetchFun,
  };
  const pressReleaseIDs = await fetchAllPressReleaseIDs({
    ...appEnvWithRequestedTenant,
    locale,
  });
  return pressReleaseIDs.data;
};

export const getAllPageSwitchPageIDs = async (
  tenant: Config['ENVIRONMENT'],
  locale: Locale,
): Promise<PageIDs['data']> => {
  const appEnvWithRequestedTenant: AppEnv = {
    config: {
      ...appEnv.config,
      ENVIRONMENT: tenant,
    },
    fetchFun: appEnv.fetchFun,
  };
  const pageSwitchPageIDs = await fetchAllPageSwitchPageIDs({
    ...appEnvWithRequestedTenant,
    locale,
  });
  return pageSwitchPageIDs.data;
};

export const getPageDataFromID = async (
  tenant: Config['ENVIRONMENT'],
  documentID: string,
  locale: Locale,
): Promise<PreviewPageData['data']> => {
  const appEnvWithRequestedTenant: AppEnv = {
    config: {
      ...appEnv.config,
      ENVIRONMENT: tenant,
    },
    fetchFun: appEnv.fetchFun,
  };
  const { data } = await fetchPageFromID({
    ...appEnvWithRequestedTenant,
    documentID,
    locale,
  });
  return data;
};

export const getPressReleaseDataFromID = async (
  tenant: Config['ENVIRONMENT'],
  documentID: string,
  locale: Locale,
): Promise<PreviewPageData['data']> => {
  const appEnvWithRequestedTenant: AppEnv = {
    config: {
      ...appEnv.config,
      ENVIRONMENT: tenant,
    },
    fetchFun: appEnv.fetchFun,
  };
  const pressRelease = await fetchPressReleaseFromID({
    ...appEnvWithRequestedTenant,
    documentID,
    locale,
  });

  return previewPressReleaseToPreviewPageData(pressRelease).data;
};

export const getPageSwitchPageDataFromID = async (
  tenant: Config['ENVIRONMENT'],
  documentID: string,
  locale: Locale,
): Promise<PreviewPageData['data']> => {
  const appEnvWithRequestedTenant: AppEnv = {
    config: {
      ...appEnv.config,
      ENVIRONMENT: tenant,
    },
    fetchFun: appEnv.fetchFun,
  };
  const { data } = await fetchPageSwitchPageFromID({
    ...appEnvWithRequestedTenant,
    documentID,
    locale,
  });

  return data;
};

export const isPreviewMode = () => appEnv.config.PREVIEW_MODE === 'true';

export const getPreviewToken = () => appEnv.config.PREVIEW_TOKEN;
