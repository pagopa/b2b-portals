/** This file contains all the functions useful to get data from external resources */
import { pipe } from 'fp-ts/lib/function';
import * as E from 'fp-ts/lib/Either';
import { FooterProps } from '@pagopa/pagopa-editorial-components/dist/components/Footer';
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

export const getFooterData = async (): Promise<FooterProps> => {
  const footerAPIRes = await getFooter(appEnv);

  return {
    companyLink: {
      ariaLabel: footerAPIRes.data.attributes.companyLink.ariaLabel,
      href: footerAPIRes.data.attributes.companyLink.href,
    },
    legalInfo: footerAPIRes.data.attributes.legalInfo,
    links: {
      aboutUs: {
        links: footerAPIRes.data.attributes.links_aboutUs.links.map((link) => ({
          ariaLabel: link.ariaLabel,
          href: link.href,
          label: link.text,
          linkType: link.linkType,
        })),
        title: footerAPIRes.data.attributes.links_aboutUs.title,
      },
      followUs: {
        links: footerAPIRes.data.attributes.links_followUs.links
          .filter((link) => link.linkType !== 'social')
          .map((link) => ({
            ariaLabel: link.ariaLabel,
            href: link.href,
            label: link.text,
            linkType: link.linkType,
          })),
        socialLinks: footerAPIRes.data.attributes.links_followUs.links
          .filter((link) => link.linkType === 'social')
          .map((socialLink) => ({
            ariaLabel: socialLink.ariaLabel,
            href: socialLink.href,
            icon: socialLink.icon,
          })),
        title: footerAPIRes.data.attributes.links_followUs.title,
      },
      resources: {
        links: footerAPIRes.data.attributes.links_resources.links.map(
          (link) => ({
            ariaLabel: link.ariaLabel,
            href: link.href,
            label: link.text,
            linkType: link.linkType,
          })
        ),
        title: footerAPIRes.data.attributes.links_resources.title,
      },
      services: {
        links: footerAPIRes.data.attributes.links_services.links.map(
          (link) => ({
            ariaLabel: link.ariaLabel,
            href: link.href,
            label: link.text,
            linkType: link.linkType,
          })
        ),
        title: footerAPIRes.data.attributes.links_services.title,
      },
    },
  };
};
