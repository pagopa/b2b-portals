/** This file contains all the functions useful to get data from external resources */
import { pipe } from 'fp-ts/lib/function';
import * as E from 'fp-ts/lib/Either';
import { HeaderProps } from '@pagopa/pagopa-editorial-components/dist/components/Header/Header';
import { Page, makePageListFromNavigation } from './pages';
import { getNavigation } from './fetch/navigation';
import { PreHeader, getPreHeader } from './fetch/preHeader';
import { FooterData, getFooter } from './fetch/footer';
import { getHeader } from './fetch/header';
import { makeHeaderProps } from './header';
import { makeAppEnv } from '@/AppEnv';

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
  const navigation = await getNavigation('main-navigation', appEnv);
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

export const getHeaderProps = async (): Promise<HeaderProps> => {
  const header = await getHeader(appEnv);
  const navigation = await getNavigation('main-navigation', appEnv);
  return makeHeaderProps(navigation, header);
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
