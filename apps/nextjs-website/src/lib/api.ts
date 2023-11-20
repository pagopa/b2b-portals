/** This file contains all the functions useful to get data from external resources */
import { pipe } from 'fp-ts/lib/function';
import * as E from 'fp-ts/lib/Either';
import { FooterProps } from '@pagopa/pagopa-editorial-components/dist/components/Footer';
import { LinkType } from '@pagopa/pagopa-editorial-components/dist/components/Footer/types';
import * as MuiIcons from '@mui/icons-material';
import { getNavigation } from './api/navigation/navigationAPI';
import { Page, makePageListFromNavigation } from './api/navigation/pages';
import { getFooter } from './api/footerAPI';
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

export const getFooterData = async (): Promise<
  Omit<FooterProps, 'onLanguageChanged'>
> => {
  // Omitting onLanguageChanged since we cannot pass event handler functions to server component (in this case Layout)
  const footerAPIRes = await getFooter(appEnv);
  const footerData = footerAPIRes.data.attributes;

  return {
    companyLink: {
      ariaLabel:
        footerData.companyLink.ariaLabel ?? footerData.companyLink.href,
      href: footerData.companyLink.href,
    },
    legalInfo: footerData.legalInfo, // TODO: This is rich text (basically markdown) so we should parse it into HTML --> RFC needed to determine how we're going to do this
    links: {
      aboutUs: {
        ...(footerData.links_aboutUs.title && {
          title: footerData.links_aboutUs.title,
        }),
        links: footerData.links_aboutUs.links
          .filter((link) => ['internal', 'external'].includes(link.linkType))
          .map((link) => ({
            label: link.text ?? link.href,
            href: link.href,
            ariaLabel: link.ariaLabel ?? link.href,
            linkType: link.linkType as LinkType,
          })),
      },
      followUs: {
        title: footerData.links_followUs.title ?? '',
        links: footerData.links_followUs.links
          .filter((link) => ['internal', 'external'].includes(link.linkType))
          .map((link) => ({
            label: link.text ?? link.href,
            href: link.href,
            ariaLabel: link.ariaLabel ?? link.href,
            linkType: link.linkType as LinkType,
          })),
        socialLinks: footerData.links_followUs.links
          .filter((link) => link.linkType === 'social' && link.icon)
          .map((link) => ({
            icon: link.icon as keyof typeof MuiIcons,
            href: link.href,
            ariaLabel: link.ariaLabel ?? link.href,
          })),
      },
      resources: {
        ...(footerData.links_resources.title && {
          title: footerData.links_resources.title,
        }),
        links: footerData.links_resources.links
          .filter((link) => ['internal', 'external'].includes(link.linkType))
          .map((link) => ({
            label: link.text ?? link.href,
            href: link.href,
            ariaLabel: link.ariaLabel ?? link.href,
            linkType: link.linkType as LinkType,
          })),
      },
      services: {
        ...(footerData.links_services.title && {
          title: footerData.links_services.title,
        }),
        links: footerData.links_services.links
          .filter((link) => ['internal', 'external'].includes(link.linkType))
          .map((link) => ({
            label: link.text ?? link.href,
            href: link.href,
            ariaLabel: link.ariaLabel ?? link.href,
            linkType: link.linkType as LinkType,
          })),
      },
    },
    languages: [
      {
        id: 'it',
        value: 'Italiano',
      },
    ],
    activeLanguage: {
      id: 'it',
      value: 'Italiano',
    },
  };
};
