/** This file contains all the functions useful to get data from external resources */
import { pipe } from 'fp-ts/lib/function';
import * as E from 'fp-ts/lib/Either';
import { AppEnv, Config, makeAppEnv } from '../AppEnv';
import { getNavigation, PageData } from './fetch/navigation';
import { PreHeaderData, getPreHeader } from './fetch/preHeader';
import { FooterData, getFooter } from './fetch/footer';
import { getHeader, HeaderData } from './fetch/header';
import { SiteWideSEO, fetchSiteWideSEO } from './fetch/siteWideSEO';
import { PageIDs, fetchAllPageIDs, fetchPageFromID } from './fetch/preview';
import { PageSection } from './fetch/types/PageSection';
import { removeHomepageSlugFromMenu } from './header';

// create AppEnv given process env
const appEnv = pipe(
  makeAppEnv(process.env),
  E.getOrElseW((errors) => {
    // eslint-disable-next-line functional/no-throw-statements
    throw errors;
  })
);

// Return all the pages
export const getAllPages = async (): Promise<ReadonlyArray<PageData>> => {
  const navigation = await getNavigation(appEnv);
  return navigation.data.map((item) =>
    item.attributes.slug !== 'homepage'
      ? item.attributes
      : {
          slug: '',
          seo: item.attributes.seo,
          sections: item.attributes.sections,
        }
  );
};

// Return PreHeaderProps
export const getPreHeaderProps = async (): Promise<
  PreHeaderData['data']['attributes']
> => {
  const {
    data: { attributes },
  } = await getPreHeader(appEnv);
  return attributes;
};

export const getHeaderProps = async (): Promise<
  HeaderData['data']['attributes']
> => {
  const {
    data: { attributes },
  } = await getHeader(appEnv);
  return removeHomepageSlugFromMenu(attributes);
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
  slug: string | undefined
): Promise<PageData | undefined> => {
  if (slug === undefined) {
    return undefined;
  }

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

  return attributes.sections;
};

export const isPreviewMode = () => appEnv.config.PREVIEW_MODE === 'true';

export const getPreviewToken = () => appEnv.config.PREVIEW_TOKEN;
