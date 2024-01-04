'use client';
import React from 'react';
import { PreHeader as PreHeaderEC } from '@pagopa/pagopa-editorial-components/dist/components/PreHeader';
import Icon from '@mui/material/Icon';
// Only temporarily importing every icon. A task is planned to sub this for a restricted set of accepted icon names.
import * as MuiIcons from '@mui/icons-material';
import { Stack } from '@mui/material';
import { PreHeader } from '@/lib/fetch/preHeader';

const isValidMuiIcon = (iconName?: string | null): boolean =>
  !!iconName && iconName in MuiIcons;

const formatValidMuiIcon = (iconName?: string | null): string | null => {
  if (!iconName || !(iconName in MuiIcons)) {
    // Not using isValidMuiIcon because typescript doesn't register iconName as non-null if we do
    return null;
  }

  // Convert from camel case (anExample) or pascal case (AnExample) to snake case (an_example)
  return iconName
    .replace(/(?:^|\.?)([A-Z])/g, (_, y) => `_${y.toLowerCase()}`)
    .split(/^_/)
    .join('');
};

const preHeaderNakedButtonStyle = {
  padding: '0',
  color: 'text.primary', // Theme-aware property --> equivalent to (theme) => theme.palette.text.primary
  backgroundColor: 'transparent',
  '&:hover': {
    backgroundColor: 'transparent',
    color: 'text.secondary', // Theme-aware property --> equivalent to (theme) => theme.palette.text.secondary
  },
};

const makeCtas = (
  props: NonNullable<PreHeader['data']['attributes']['leftCtas']>,
  side: 'left' | 'right'
) => ({
  ...props,
  ctaButtons:
    props?.ctaButtons?.map((ctaBtn) => ({
      ...ctaBtn,
      target: '_blank',
      rel: 'noopener noreferrer',
      disableRipple: ctaBtn.variant === 'text', // To be replaced by 'naked' when implemented on Strapi's side
      disableTouchRipple: ctaBtn.variant === 'text', // To be replaced by 'naked' when implemented on Strapi's side
      sx: {
        fontWeight: side === 'left' ? 'bold' : '600',
        letterSpacing: side === 'left' ? '0' : '.3px',
        ...(ctaBtn.variant === 'text' && { ...preHeaderNakedButtonStyle }), // To be replaced by 'naked' when implemented on Strapi's side
      },
      ...(isValidMuiIcon(ctaBtn.icon) && {
        startIcon: <Icon>{formatValidMuiIcon(ctaBtn.icon)}</Icon>,
      }),
    })) ?? [],
});

// Add styles, SEO related values and extra JS parameters for singular components
// Styling 'naked' variant for PreHeader using 'text' variant as a base
// (since editorial-components does not accept 'naked' variant)
const makePreHeaderProps = (props: PreHeader['data']['attributes']) => ({
  ...props,
  ...(props.leftCtas && { leftCtas: makeCtas(props.leftCtas, 'left') }),
  ...(props.rightCtas && { rightCtas: makeCtas(props.rightCtas, 'right') }),
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
    <PreHeaderEC {...makePreHeaderProps(preHeaderData)} />
  </Stack>
);

export default PreHeader;
