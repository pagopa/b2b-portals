import { FooterProps as FooterPropsEC } from '@pagopa/pagopa-editorial-components/dist/components/Footer';
import { FooterLinksType } from '@pagopa/mui-italia/dist/components/Footer';
import { Footer } from './fetch/footer';

export type FooterProps = Omit<FooterPropsEC, 'onLanguageChanged'>;

const generateLinks = (
  section: Footer['data']['attributes']['links_aboutUs'],
  isSocialLink = false
): ReadonlyArray<FooterLinksType> =>
  section.links.map((link) => ({
    label: link.text ?? link.href,
    href: link.href,
    ariaLabel: link.ariaLabel ?? link.href,
    linkType: link.linkType,
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
        title: attributes.links_aboutUs.title,
        links: Array.from(generateLinks(attributes.links_aboutUs)),
      },
      followUs: {
        title: attributes.links_followUs.title,
        links: Array.from(generateLinks(attributes.links_followUs)),
        socialLinks: Array.from(generateLinks(attributes.links_followUs, true)),
      },
      resources: {
        title: attributes.links_resources.title,
        links: Array.from(generateLinks(attributes.links_resources)),
      },
      services: {
        title: attributes.links_services.title,
        links: Array.from(generateLinks(attributes.links_services)),
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
