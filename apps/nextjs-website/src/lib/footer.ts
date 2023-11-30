import { FooterProps as FooterPropsEC } from '@pagopa/pagopa-editorial-components/dist/components/Footer';
import * as icons from '@mui/icons-material';
import { Footer } from './fetch/footer';

type IconNames = keyof typeof icons;
export type FooterProps = Omit<FooterPropsEC, 'onLanguageChanged'>;

type Link = Footer['data']['attributes']['links_aboutUs']['links'][0];

const makeLink = ({ text, linkType, ariaLabel, href }: Link) => {
  const base = {
    label: text ?? href,
    href,
    ariaLabel: ariaLabel ?? href,
  };
  return linkType !== 'social' ? [{ ...base, linkType }] : [];
};

const makeSocialLink = ({ text, icon, linkType, ariaLabel, href }: Link) => {
  const base = {
    href,
    ariaLabel: ariaLabel ?? href,
    // This cast is required until the task B2BP-271 is done
    ...(icon && { icon: icon as IconNames }),
  };
  return linkType === 'social' ? [{ ...base, linkType }] : [];
};

export const makeFooterProps = (footer: Footer): FooterProps => {
  const { attributes } = footer.data;
  return {
    companyLink: {
      ariaLabel:
        attributes.companyLink.ariaLabel ?? attributes.companyLink.href,
      href: attributes.companyLink.href,
    },
    legalInfo: attributes.legalInfo,
    links: {
      aboutUs: {
        ...(attributes.links_aboutUs.title && {
          title: attributes.links_aboutUs.title,
        }),
        links: attributes.links_aboutUs.links.flatMap(makeLink),
      },
      resources: {
        ...(attributes.links_resources.title && {
          title: attributes.links_resources.title,
        }),
        links: attributes.links_resources.links.flatMap(makeLink),
      },
      services: {
        ...(attributes.links_services.title && {
          title: attributes.links_services.title,
        }),
        links: attributes.links_services.links.flatMap(makeLink),
      },
      followUs: {
        title: attributes.links_followUs.title || '',
        links: attributes.links_followUs.links.flatMap(makeLink),
        socialLinks: attributes.links_followUs.links.flatMap(makeSocialLink),
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
