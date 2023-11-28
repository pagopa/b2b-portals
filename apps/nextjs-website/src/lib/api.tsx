/** This file contains all the functions useful to get data from external resources */
import { pipe } from 'fp-ts/lib/function';
import * as E from 'fp-ts/lib/Either';
import { HeaderProps } from '@pagopa/pagopa-editorial-components/dist/components/Header/Header';
import { HelpOutlineOutlined } from '@mui/icons-material';
import { Page, makePageListFromNavigation } from './pages';
import { getNavigation } from './fetch/navigation';
import { PreHeader, getPreHeader } from './fetch/preHeader';
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

  // Remove MUI ripple effect from buttons + Explicit target + Add rel for SEO + Add styling for specific elements
  return {
    ...attributes,
    ...(attributes.leftCtas?.ctaButtons && {
      leftCtas: {
        ...attributes.leftCtas,
        ctaButtons: attributes.leftCtas.ctaButtons.map((ctaBtn) => ({
          ...ctaBtn,
          disableRipple: true,
          disableTouchRipple: true,
          target: '_blank',
          rel: 'noopener noreferrer',
          sx: {
            fontWeight: 'bold',
            letterSpacing: '0',
          },
        })),
      },
    }),
    ...(attributes.rightCtas?.ctaButtons && {
      rightCtas: {
        ...attributes.rightCtas,
        ctaButtons: attributes.rightCtas.ctaButtons.map((ctaBtn) => ({
          ...ctaBtn,
          disableRipple: true,
          disableTouchRipple: true,
          target: '_blank',
          rel: 'noopener noreferrer',
          sx: {
            fontWeight: '600',
            letterSpacing: '.3px',
          },
          startIcon: <HelpOutlineOutlined />,
          // TODO: Select startIcon based on ctaBtn.icon
        })),
      },
    }),
  };
};

export const getHeaderProps = async (): Promise<HeaderProps> => {
  const header = await getHeader(appEnv);
  const navigation = await getNavigation('main-navigation', appEnv);
  return makeHeaderProps(navigation, header);
};
