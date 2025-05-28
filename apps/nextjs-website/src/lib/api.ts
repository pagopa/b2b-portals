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
import { footerMockData } from './__mocks__/footer.mock';
import { preHeaderMockData } from './__mocks__/preHeader.mock';
import { preFooterMockData } from './__mocks__/preFooter.mock';
import { editorialMockData } from './__mocks__/editorial.mock';
import { headerMockData } from './__mocks__/header.mock';

// create AppEnv given process env
const appEnv = pipe(
  makeAppEnv(process.env),
  E.getOrElseW((errors) => {
    // eslint-disable-next-line functional/no-throw-statements
    throw errors;
  }),
);

const isDryBuild = process.env['USE_MOCK'] === 'true';

// Return all the pages
export const getAllPages = async (
  locale: Locale,
): Promise<ReadonlyArray<PageData>> => {
  if (isDryBuild) {
    return [
      {
        slug: ['mock'],
        seo: {
          metaTitle: 'Mock Title',
          metaDescription: 'Mock description',
          keywords: 'mock,keywords',
          canonicalURL: 'https://example.com/mock',
          structuredData: {},
          ogTitle: 'Mock OG Title',
          ogDescription: 'Mock OG Description',
        },
        sections: [editorialMockData],
      },
    ];
  }

  const navigation = await getNavigation({ ...appEnv, locale });
  const pressReleases = await getPressReleases({ ...appEnv, locale });

  return [
    ...navigationToPageDataArray(navigation),
    ...pressReleaseToPageDataArray(pressReleases),
  ];
};

export const getPressReleasePages = async (
  locale: Locale,
): Promise<ReadonlyArray<PressReleasePage>> => {
  const { data } = await getPressReleases({ ...appEnv, locale });
  return data;
};

// Return PreHeaderProps
export const getPreHeaderProps = async (
  locale: Locale,
): Promise<PreHeaderAttributes | null> => {
  if (isDryBuild) return preHeaderMockData;
  const { data } = await getPreHeader({ ...appEnv, locale });
  return data;
};

export const getHeaderProps = async (
  locale: Locale,
  defaultLocale: Locale,
): Promise<HeaderData['data']['header'][0]> => {
  if (isDryBuild) return headerMockData;
  const { data } = await getHeader({ ...appEnv, locale });
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

  return formatHeaderLinks(header, locale, defaultLocale);
};

export const getFooterProps = async (
  locale: Locale,
): Promise<FooterData['data']> => {
  if (isDryBuild) return footerMockData;
  const { data } = await getFooter({ ...appEnv, locale });
  return data;
};

export const getPreFooterProps = async (
  locale: Locale,
): Promise<PreFooterAttributes | null> => {
  if (isDryBuild) return preFooterMockData;
  const { data } = await getPreFooter({ ...appEnv, locale });
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
  if (isDryBuild) {
    return {
      themeVariant: 'SEND',
      defaultLocale: 'it',
      locales: {
        it: true,
        en: false,
        fr: false,
        de: false,
        sl: false,
      },
      metaImage: {
        alternativeText: 'Mock Meta Image',
        url: '/meta.jpg',
        width: 1200,
        height: 630,
        mime: 'image/jpeg',
        formats: {
          small: { url: '/meta-small.jpg' },
        },
      },
      favicon: {
        alternativeText: 'Favicon',
        url: '/favicon.ico',
        width: 48,
        height: 48,
        mime: 'image/x-icon',
        formats: {
          small: { url: '/favicon-small.ico' },
        },
      },
      appleTouchIcon: {
        alternativeText: 'Apple Touch Icon',
        url: '/apple-touch-icon.png',
        width: 180,
        height: 180,
        mime: 'image/png',
        formats: {
          small: { url: '/apple-touch-icon-small.png' },
        },
      },
      analytics: {
        oneTrustDomainID: 'mock-onetrust-id',
        mixpanel: {
          token: 'mock-token',
          apiHost: null,
          cookieDomain: null,
          debug: false,
          ip: false,
        },
      },
    };
  }

  const { data } = await fetchSiteWideSEO(appEnv);

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
