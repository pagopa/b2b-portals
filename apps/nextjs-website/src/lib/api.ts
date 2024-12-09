/** This file contains all the functions useful to get data from external resources */
import { pipe } from 'fp-ts/lib/function';
import * as E from 'fp-ts/lib/Either';
import { AppEnv, Config, makeAppEnv } from '../AppEnv';
import { getNavigation } from './fetch/navigation';
import { navigationToPageDataArray, PageData } from './navigation';
import { PreHeaderAttributes, getPreHeader } from './fetch/preHeader';
import { FooterData, getFooter } from './fetch/footer';
import { getHeader, HeaderData } from './fetch/header';
import { SiteWideSEO, fetchSiteWideSEO } from './fetch/siteWideSEO';
import {
  PageIDs,
  PreviewPageData,
  fetchAllPageIDs,
  fetchPageFromID,
} from './fetch/preview';
import { formatHeaderLinks } from './header';
import { getPreFooter, PreFooterAttributes } from './fetch/preFooter';
import { getPressReleases, PressReleasePage } from './fetch/pressRelease';
import { pressReleaseToPageDataArray } from './pressRelease';

// create AppEnv given process env
const appEnv = pipe(
  makeAppEnv(process.env),
  E.getOrElseW((errors) => {
    // eslint-disable-next-line functional/no-throw-statements
    throw errors;
  })
);

// Return all the pages
export const getAllPages = async (
  locale: 'it' | 'en'
): Promise<ReadonlyArray<PageData>> => {
  const navigation = await getNavigation({ ...appEnv, locale });
  const pressReleases = await getPressReleases({ ...appEnv, locale });

  return [
    ...navigationToPageDataArray(navigation),
    ...pressReleaseToPageDataArray(pressReleases),
  ];
};

export const getPressReleasePages = async (
  locale: 'it' | 'en'
): Promise<ReadonlyArray<PressReleasePage>> => {
  const { data } = await getPressReleases({ ...appEnv, locale });

  return data.map((PressReleaseData) => PressReleaseData.attributes);
};

// Return PreHeaderProps
export const getPreHeaderProps = async (
  locale: 'it' | 'en'
): Promise<PreHeaderAttributes | null> => {
  const { data } = await getPreHeader({ ...appEnv, locale });
  return data?.attributes ?? null;
};

export const getHeaderProps = async (
  locale: 'it' | 'en',
  defaultLocale: 'it' | 'en'
): Promise<HeaderData['data']['attributes']['header'][0]> => {
  const {
    data: {
      attributes: { header },
    },
  } = await getHeader({ ...appEnv, locale });

  if (header[0] === undefined) {
    // Disable lint for this case because we want the build to fail if user managed to not input a menu
    // eslint-disable-next-line
    throw new Error();
  }

  return formatHeaderLinks(header[0], locale, defaultLocale);
};

export const getFooterProps = async (
  locale: 'it' | 'en'
): Promise<FooterData['data']['attributes']> => {
  const {
    data: { attributes },
  } = await getFooter({ ...appEnv, locale });
  return attributes;
};

export const getPreFooterProps = async (
  locale: 'it' | 'en'
): Promise<PreFooterAttributes | null> => {
  const { data } = await getPreFooter({ ...appEnv, locale });
  return data?.attributes ?? null;
};

// Return PageProps given the page path
export const getPageProps = async (
  locale: 'it' | 'en',
  slugString: string | undefined
): Promise<PageData | undefined> => {
  if (slugString === undefined) {
    return undefined;
  }

  const allPages = await getAllPages(locale);
  return allPages.find((page) => slugString === page.slug.toString());
};

export const getSiteWideSEO = async (): Promise<
  SiteWideSEO['data']['attributes']
> => {
  const {
    data: { attributes },
  } = await fetchSiteWideSEO(appEnv);
  return attributes;
};

export const getAllPageIDs = async (
  tenant: Config['ENVIRONMENT']
): Promise<PageIDs['data']> => {
  const appEnvWithRequestedTenant: AppEnv = {
    config: {
      ...appEnv.config,
      ENVIRONMENT: tenant,
    },
    fetchFun: appEnv.fetchFun,
  };
  const pageIDs_it = await fetchAllPageIDs({
    ...appEnvWithRequestedTenant,
    locale: 'it',
  });
  const pageIDs_en = await fetchAllPageIDs({
    ...appEnvWithRequestedTenant,
    locale: 'en',
  });
  return [...pageIDs_it.data, ...pageIDs_en.data];
};

export const getPageDataFromID = async (
  tenant: Config['ENVIRONMENT'],
  pageID: number
): Promise<PreviewPageData['data']['attributes']> => {
  const appEnvWithRequestedTenant: AppEnv = {
    config: {
      ...appEnv.config,
      ENVIRONMENT: tenant,
    },
    fetchFun: appEnv.fetchFun,
  };
  const {
    data: { attributes },
  } = await fetchPageFromID({ ...appEnvWithRequestedTenant, pageID });

  return attributes;
};

export const isPreviewMode = () => appEnv.config.PREVIEW_MODE === 'true';

export const getPreviewToken = () => appEnv.config.PREVIEW_TOKEN;
