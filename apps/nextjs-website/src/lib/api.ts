/** This file contains all the functions useful to get data from external resources */
import { pipe } from 'fp-ts/lib/function';
import * as E from 'fp-ts/lib/Either';
import { PreHeaderProps } from '@pagopa/pagopa-editorial-components/dist/components/PreHeader';
import { HeaderProps } from '@pagopa/pagopa-editorial-components/dist/components/Header/Header';
import { type AvatarProps } from '@mui/material';
import { getNavigation } from './api/navigation/navigationAPI';
import { Page, makePageListFromNavigation } from './api/navigation/pages';
import { getPreHeader } from './api/preHeaderAPI';
import { getHeader } from './api/HeaderAPI';
import { makeMenuFromNavigation } from './api/navigation/menu';
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

export const getHeaderData = async (): Promise<HeaderProps> => {
  const headerAPIRes = await getHeader(appEnv);
  const menuAPIRes = await getNavigation('main-navigation', appEnv);

  return {
    theme: headerAPIRes.data.attributes.theme,
    avatar: headerAPIRes.data.attributes.avatar?.data.attributes
      .url as AvatarProps,
    beta: headerAPIRes.data.attributes.beta,
    reverse: headerAPIRes.data.attributes.reverse,
    product: {
      name: headerAPIRes.data.attributes.productName,
      href: '/',
    },
    ...(headerAPIRes.data.attributes.ctaButtons && {
      ctaButtons: headerAPIRes.data.attributes.ctaButtons,
    }),
    menu: Array.from(
      makeMenuFromNavigation(menuAPIRes, headerAPIRes.data.attributes.theme)
    ),
  };
};
