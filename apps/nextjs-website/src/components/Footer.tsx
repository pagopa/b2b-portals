'use client';
import React from 'react';
import {
  FooterProps,
  Footer as FooterEC,
} from '@pagopa/pagopa-editorial-components/dist/components/Footer';
import { Stack } from '@mui/material';
import { MDtoJSX } from './rendering/MDtoJSX';

const RefineFooterProps = (
  props: Omit<FooterProps, 'onLanguageChanged'>
): Omit<FooterProps, 'onLanguageChanged'> => ({
  ...props,
  legalInfo: MDtoJSX(props.legalInfo as string, 'caption'),
});

const Footer: React.FC<Omit<FooterProps, 'onLanguageChanged'>> = (
  footerData
) => (
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
    <FooterEC
      {...RefineFooterProps(footerData)}
      onLanguageChanged={() => true}
    />
  </Stack>
);
export default Footer;
