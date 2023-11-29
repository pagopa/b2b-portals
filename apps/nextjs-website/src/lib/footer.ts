import { FooterProps as FooterPropsEC } from '@pagopa/pagopa-editorial-components/dist/components/Footer';
import {
  FooterLinksType,
  LinkType,
} from '@pagopa/pagopa-editorial-components/dist/components/Footer/types';
import { Footer } from './fetch/footer';
export type FooterProps = Omit<FooterPropsEC, 'onLanguageChanged'>;

const generateLinks = (
  section: Footer['data']['attributes']['links_aboutUs'],
  isSocialLink = false
): ReadonlyArray<FooterLinksType> =>
  section.links
    .filter((link) =>
      isSocialLink
        ? link.linkType === 'social' && link.icon
        : ['internal', 'external'].includes(link.linkType)
    )
    .map((link) => ({
      label: link.text ?? link.href,
      href: link.href,
      ariaLabel: link.ariaLabel ?? link.href,
      linkType: isSocialLink ? 'external' : (link.linkType as LinkType),
      ...(isSocialLink && { icon: link.icon }),
    }));

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
        links: Array.from(generateLinks(attributes.links_aboutUs)),
      },
      resources: {
        ...(attributes.links_resources.title && {
          title: attributes.links_resources.title,
        }),
        links: Array.from(generateLinks(attributes.links_resources)),
      },
      services: {
        ...(attributes.links_services.title && {
          title: attributes.links_services.title,
        }),
        links: Array.from(generateLinks(attributes.links_services)),
      },
      followUs: {
        title: attributes.links_followUs.title || '',
        links: Array.from(generateLinks(attributes.links_followUs)),
        socialLinks: Array.from(generateLinks(attributes.links_followUs, true)),
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
