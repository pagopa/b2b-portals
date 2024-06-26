/** This file contains all the functions useful to get data from external resources */
import { pipe } from 'fp-ts/lib/function';
import * as E from 'fp-ts/lib/Either';
import { AppEnv, Config, makeAppEnv } from '../AppEnv';
import { Page, makePageListFromNavigation } from './pages';
import { getNavigation } from './fetch/navigation';
import { PreHeader, getPreHeader } from './fetch/preHeader';
import { FooterData, getFooter } from './fetch/footer';
import { getHeader } from './fetch/header';
import { HeaderWithNavigation, makeHeaderWithNavigation } from './header';
import { SiteWideSEO, fetchSiteWideSEO } from './fetch/siteWideSEO';
import { PageIDs, fetchAllPageIDs, fetchPageFromID } from './fetch/preview';
import { PageSection } from './fetch/types/PageSection';

// create AppEnv given process env
const appEnv = pipe(
  makeAppEnv(process.env),
  E.getOrElseW((errors) => {
    // eslint-disable-next-line functional/no-throw-statements
    throw errors;
  })
);

// Return all the pages
export const getAllPages = async (): Promise<ReadonlyArray<Page>> => {
  const navigation = await getNavigation(appEnv);
  return makePageListFromNavigation(navigation);
};

// Return PreHeaderProps
export const getPreHeaderProps = async (): Promise<
  PreHeader['data']['attributes']
> => {
  const {
    data: { attributes },
  } = await getPreHeader(appEnv);
  return attributes;
};

export const getHeaderProps = async (): Promise<HeaderWithNavigation> => {
  const header = await getHeader(appEnv);
  const navigation = await getNavigation(appEnv);
  return makeHeaderWithNavigation(navigation, header);
};

export const getFooterProps = async (): Promise<
  FooterData['data']['attributes']
> => {
  const {
    data: { attributes },
  } = await getFooter(appEnv);
  return attributes;
};

// Return PageProps given the page path
export const getPageProps = async (
  slug: ReadonlyArray<string>
): Promise<Page | undefined> => {
  const allPages = await getAllPages();
  return allPages.find((page) => slug.toString() === page.slug.toString());
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
  const { data } = await fetchAllPageIDs(appEnvWithRequestedTenant);
  return data;
};

export const getPageSectionsFromID = async (
  tenant: Config['ENVIRONMENT'],
  pageID: number
): Promise<ReadonlyArray<PageSection>> => {
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

  return attributes.sections.map((section) => {
    // eslint-disable-next-line no-underscore-dangle
    switch (section.__component) {
      case 'sections.hero':
        return {
          ...section,
          image: section.image.data?.attributes ?? null,
          background: section.background.data?.attributes ?? null,
        };

      case 'sections.editorial':
        return {
          ...section,
          image: section.image.data.attributes,
        };

      case 'sections.banner-link':
        return {
          ...section,
          decoration: section.decoration.data?.attributes ?? null,
        };

      default:
        return section;
    }
  });
};

export const isPreviewMode = () => appEnv.config.PREVIEW_MODE === 'true';

export const getPreviewToken = () => appEnv.config.PREVIEW_TOKEN;
