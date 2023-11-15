/** This file contains all the functions useful to get data from external resources */
import { pipe } from 'fp-ts/lib/function';
import * as E from 'fp-ts/lib/Either';
import { PreHeaderProps } from '@pagopa/pagopa-editorial-components/dist/components/PreHeader';
import { getNavigation } from './api/navigation/navigationAPI';
import { Page, makePageListFromNavigation } from './api/navigation/pages';
import { getPreHeader } from './api/preHeaderAPI';
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

// Return data for preHeader
export const getPreHeaderData = async (): Promise<PreHeaderProps> => {
  const preHeaderAPIRes = await getPreHeader(appEnv);
  return preHeaderAPIRes.data.attributes;
};
