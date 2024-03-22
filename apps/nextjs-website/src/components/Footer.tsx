'use client';
import {
  FooterProps,
  Footer as FooterEC,
} from '@pagopa/pagopa-editorial-components/dist/components/Footer';
import { Stack } from '@mui/material';
import MarkdownRenderer from './MarkdownRenderer';
import Icon from './Icon';
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
  <Stack
    sx={{
      '.MuiTypography-root.MuiTypography-caption p': {
        // legalInfo
        margin: 0,
      },
      footer: {
        padding: 0,
        borderTop: 1,
        borderTopColor: 'divider',
        '> :first-of-type': {
          // links section
          '> *': {
            flex: 1,
            '&.MuiBox-root svg:not(.MuiSvgIcon-root)': {
              // NextGenEU logo
              marginTop: 'auto',
            },
            '&.MuiBox-root > .MuiStack-root:nth-last-of-type(1)': {
              // div before NextGenEU logo
              marginBottom: '48px',
            },
          },
        },
      },
    }}
  >
    <FooterEC {...makeFooterProps(props)} />
  </Stack>
);
export default Footer;
