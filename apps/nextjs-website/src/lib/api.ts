/** This file contains all the functions useful to get data from external resources */
import { pipe } from 'fp-ts/lib/function';
import * as E from 'fp-ts/lib/Either';
import { Page, makePageListFromNavigation } from './pages';
import { getNavigation } from './fetch/navigation';
import { PreHeader, getPreHeader } from './fetch/preHeader';
import { Header, getHeader } from './fetch/header';
import { makeMenuFromNavigation } from './fetch/menu';
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

export const getHeaderProps = async (): Promise<Header['data']['attributes']> => {
  const headerAPIRes = await getHeader(appEnv);
  const menuAPIRes = await getNavigation('main-navigation', appEnv);

  return {
    theme: headerAPIRes.data.attributes.theme,
    avatar: headerAPIRes.data.attributes.avatar,
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
