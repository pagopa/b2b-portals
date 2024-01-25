'use client';
import React from 'react';
import {
  FooterProps,
  Footer as FooterEC,
} from '@pagopa/pagopa-editorial-components/dist/components/Footer';
import { Stack } from '@mui/material';
import MarkdownRenderer from './MarkdownRenderer';
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
      socialLinks: links_followUs.socialLinks.map((link) => ({
        linkType: 'internal', // unused
        ...link,
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
            '&.MuiBox-root > :nth-last-child(2)': {
              // div before NextGenEU logo
              marginBottom: '24px',
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
