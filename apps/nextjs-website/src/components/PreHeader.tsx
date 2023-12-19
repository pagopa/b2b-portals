'use client';
import React from 'react';
import {
  PreHeader as PreHeaderEC,
  PreHeaderProps,
} from '@pagopa/pagopa-editorial-components/dist/components/PreHeader';
import Icon from '@mui/material/Icon';
import { Stack } from '@mui/material';
import { PreHeader } from '@/lib/fetch/preHeader';
import { formatValidMuiIcon, isValidMuiIcon } from '@/utils';

const preHeaderNakedButtonStyle = {
  padding: '0',
  color: 'text.primary', // Theme-aware property --> equivalent to (theme) => theme.palette.text.primary
  backgroundColor: 'transparent',
  '&:hover': {
    backgroundColor: 'transparent',
    color: 'text.secondary', // Theme-aware property --> equivalent to (theme) => theme.palette.text.secondary
  },
};

// Add styles, SEO related values and extra JS parameters for singular components
// Styling 'naked' variant for PreHeader using 'text' variant as a base
// (since editorial-components does not accept 'naked' variant)
const RefinePreHeaderProps = (props: PreHeader['data']['attributes']) => ({
  ...props,
  ...(props.leftCtas?.ctaButtons && {
    leftCtas: {
      ...props.leftCtas,
      ctaButtons: props.leftCtas.ctaButtons.map((ctaBtn) => ({
        ...ctaBtn,
        target: '_blank',
        rel: 'noopener noreferrer',
        disableRipple: ctaBtn.variant === 'text', // To be replaced by 'naked' when implemented on Strapi's side
        disableTouchRipple: ctaBtn.variant === 'text', // To be replaced by 'naked' when implemented on Strapi's side
        variant: ctaBtn.variant === 'text' ? 'text' : ctaBtn.variant, // To be replaced by 'naked' when implemented on Strapi's side
        sx: {
          fontWeight: 'bold',
          letterSpacing: '0',
          ...(ctaBtn.variant === 'text' && { ...preHeaderNakedButtonStyle }), // To be replaced by 'naked' when implemented on Strapi's side
        },
        ...(isValidMuiIcon(ctaBtn.icon) && {
          startIcon: <Icon>{formatValidMuiIcon(ctaBtn.icon)}</Icon>,
        }),
      })),
    },
  }),
  ...(props.rightCtas?.ctaButtons && {
    rightCtas: {
      ...props.rightCtas,
      ctaButtons: props.rightCtas.ctaButtons.map((ctaBtn) => ({
        ...ctaBtn,
        target: '_blank',
        rel: 'noopener noreferrer',
        disableRipple: ctaBtn.variant === 'text', // To be replaced by 'naked' when implemented on Strapi's side
        disableTouchRipple: ctaBtn.variant === 'text', // To be replaced by 'naked' when implemented on Strapi's side
        variant: ctaBtn.variant === 'text' ? 'text' : ctaBtn.variant, // To be replaced by 'naked' when implemented on Strapi's side
        sx: {
          fontWeight: '600',
          letterSpacing: '.3px',
          ...(ctaBtn.variant === 'text' && { ...preHeaderNakedButtonStyle }), // To be replaced by 'naked' when implemented on Strapi's side
        },
        ...(isValidMuiIcon(ctaBtn.icon) && {
          startIcon: <Icon>{formatValidMuiIcon(ctaBtn.icon)}</Icon>,
        }),
      })),
    },
  }),
});

const PreHeader: React.FC<PreHeader['data']['attributes']> = (
  preHeaderData: PreHeader['data']['attributes']
) => (
  // Using sx over styled() because, for styled() to work, the component (in this case PreHeaderEC)
  // needs to take a className parameter and set it to itself (which PreHeaderEC does not)
  <Stack
    sx={{
      borderBottom: 1,
      borderBottomColor: 'divider', // Theme-aware property --> equivalent to (theme) => theme.palette.divider
      minHeight: '48px',
      padding: '0 24px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      '> *': {
        flex: '1',
        padding: '0 !important',
      },
    }}
  >
    {/* Currently casting to PreHeaderProps due to confusing TS error
    It says that no value other than 'inherit' and 'primary' is valid for a button's color (which is not actually true) */}
    <PreHeaderEC {...(RefinePreHeaderProps(preHeaderData) as PreHeaderProps)} />
  </Stack>
);

export default PreHeader;
