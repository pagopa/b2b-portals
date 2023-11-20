/** This file contains all the functions useful to get data from external resources */
import { pipe } from 'fp-ts/lib/function';
import * as E from 'fp-ts/lib/Either';
import { HeaderProps } from '@pagopa/pagopa-editorial-components/dist/components/Header/Header';
import { Page, makePageListFromNavigation } from './pages';
import { getNavigation } from './fetch/navigation';
import { PreHeader, getPreHeader } from './fetch/preHeader';
import { getHeader } from './fetch/header';
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

export const getHeaderProps = async (): Promise<HeaderProps> => {
  const headerAPIRes = await getHeader(appEnv);
  const headerData = headerAPIRes.data.attributes;
  const menuAPIRes = await getNavigation('main-navigation', appEnv);

  return {
    theme: headerData.theme,
    ...(headerData.avatar &&
      headerData.avatar.data && {
        avatar: {
          src: headerData.avatar.data.attributes.url,
        },
      }),
    beta: headerData.beta,
    reverse: headerData.reverse,
    product: {
      name: headerData.productName,
      href: '/',
    },
    ...(headerData.ctaButtons && {
      ctaButtons: headerData.ctaButtons,
    }),
    menu: Array.from(makeMenuFromNavigation(menuAPIRes, headerData.theme)),
  };
};
