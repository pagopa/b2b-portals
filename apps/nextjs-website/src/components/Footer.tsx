'use client';
import MarkdownRenderer from './MarkdownRenderer';
import Icon from './Icon';
import { Footer as FooterRC } from '@react-components/components';
import { FooterProps } from '@react-components/types';
import { FooterData } from '@/lib/fetch/footer';

const makeFooterProps = ({
  legalInfo,
  links_aboutUs,
  links_services,
  links_resources,
  links_followUs,
  ...rest
}: FooterData['data']['attributes']): FooterProps => ({
  legalInfo: MarkdownRenderer({
    markdown: legalInfo,
    variant: 'caption',
  }),
  links: {
    aboutUs: {
      links: links_aboutUs.links.map((link) => ({
        linkType: 'internal', // unused
        ...link,
      })),
      ...(links_aboutUs.title && { title: links_aboutUs.title }),
    },
    services: {
      links: links_services.links.map((link) => ({
        linkType: 'internal', // unused
        ...link,
      })),
      ...(links_services.title && { title: links_services.title }),
    },
    resources: {
      links: links_resources.links.map((link) => ({
        linkType: 'internal', // unused
        ...link,
      })),
      ...(links_resources.title && { title: links_resources.title }),
    },
    followUs: {
      title: links_followUs.title,
      links: links_followUs.links.map((link) => ({
        linkType: 'internal', // unused
        ...link,
      })),
      socialLinks: links_followUs.socialLinks.map(
        ({ icon, href, ariaLabel }) => ({
          icon: Icon(icon),
          href,
          linktype: 'external', // default
          'aria-label': ariaLabel,
          // above conversion is needed because social icons just pass through all props other than icon
          // this means we need to format them as if they were HTML attributes
        })
      ),
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
  onLanguageChanged: () => true,
  ...rest,
});

const Footer = (props: FooterData['data']['attributes']) => (
  <FooterRC {...makeFooterProps(props)} />
);
export default Footer;
