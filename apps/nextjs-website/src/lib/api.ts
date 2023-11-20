/** This file contains all the functions useful to get data from external resources */
import { pipe } from 'fp-ts/lib/function';
import * as E from 'fp-ts/lib/Either';
import * as MuiIcons from '@mui/icons-material';
import { Page, makePageListFromNavigation } from './pages';
import { getNavigation } from './fetch/navigation';
import { PreHeader, getPreHeader } from './fetch/preHeader';
import { LinkTypes } from './fetch/types/LinkTypes';
import { Footer, getFooter } from './fetch/footer';
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

const generateLinks = (
  section: {
    title: string;
    links: LinkData[];
  },
  isSocialLink = false
) => {
  const filteredLinks = section.links.filter((link) =>
    isSocialLink
      ? link.linkType === 'social' && link.icon
      : ['internal', 'external'].includes(link.linkType)
  );

  return {
    ...(section.title && { title: section.title }),
    links: filteredLinks.map((link) => ({
      label: link.text ?? link.href,
      href: link.href,
      ariaLabel: link.ariaLabel ?? link.href,
      linkType: link.linkType as LinkTypes,
      ...(isSocialLink && { icon: link.icon as keyof typeof MuiIcons }),
    })),
  };
};

export const getFooterProps = async (): Promise<
  Omit<Footer['data']['attributes'], 'onLanguageChanged'>
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
        title: footerData.links_aboutUs.title ?? '',
        links: generateLinks(footerData.links_aboutUs),
      },
      followUs: {
        title: footerData.links_followUs.title ?? '',
        links: generateLinks(footerData.links_followUs),
        socialLinks: generateLinks(footerData.links_followUs, true).links,
      },
      resources: {
        title: footerData.links_resources.title ?? '',
        links: generateLinks(footerData.links_resources),
      },
      services: {
        title: footerData.links_services.title ?? '',
        links: generateLinks(footerData.links_services),
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
