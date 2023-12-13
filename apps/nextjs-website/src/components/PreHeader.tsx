'use client';
import React from 'react';
import {
  PreHeader as PreHeaderEC,
  PreHeaderProps,
} from '@pagopa/pagopa-editorial-components/dist/components/PreHeader';
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

const preHeaderTextButtonStyle = {
  padding: '0',
  color: '#17324D',
  backgroundColor: 'transparent',
  '&:hover': {
    backgroundColor: 'transparent',
    color: 'rgba(23, 50, 77, 0.8)',
  },
};

// Add styles, SEO related values and extra JS parameters for singular components
// Styling 'text' variant as 'naked' for PreHeader (since editorial-components does not accept 'naked' variant)
const RefinePreHeaderProps = (props: PreHeader['data']['attributes']) => ({
  ...props,
  ...(props.leftCtas?.ctaButtons && {
    leftCtas: {
      ...props.leftCtas,
      ctaButtons: props.leftCtas.ctaButtons.map((ctaBtn) => ({
        ...ctaBtn,
        disableRipple: ctaBtn.variant === 'text',
        disableTouchRipple: ctaBtn.variant === 'text',
        target: '_blank',
        rel: 'noopener noreferrer',
        sx: {
          fontWeight: 'bold',
          letterSpacing: '0',
          ...(ctaBtn.variant === 'text' && { ...preHeaderTextButtonStyle }),
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
        disableRipple: ctaBtn.variant === 'text',
        disableTouchRipple: ctaBtn.variant === 'text',
        target: '_blank',
        rel: 'noopener noreferrer',
        sx: {
          fontWeight: '600',
          letterSpacing: '.3px',
          ...(ctaBtn.variant === 'text' && { ...preHeaderTextButtonStyle }),
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
  <Stack
    sx={{
      borderBottom: '1px solid #E3E7EB',
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
    It says that no value other than "inherit" and "primary" is valid for a button's color (which is not actually true) */}
    <PreHeaderEC {...(RefinePreHeaderProps(preHeaderData) as PreHeaderProps)} />
  </Stack>
);

export default PreHeader;
