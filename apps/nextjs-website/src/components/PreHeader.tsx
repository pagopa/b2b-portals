'use client';
import React from 'react';
import { PreHeader as PreHeaderEC } from '@pagopa/pagopa-editorial-components/dist/components/PreHeader';
import '@/styles/preHeader.css';
import Icon from '@mui/material/Icon';
// Only temporarily importing every icon. A task is planned to sub this for a restricted set of accepted icon names.
import * as MuiIcons from '@mui/icons-material';
import { PreHeader } from '@/lib/fetch/preHeader';
import buttonStyles from '@/styles/sx/button.json';

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

// Add styles, SEO related values and extra JS parameters for singular components
const RefinePreHeaderProps = (props: PreHeader['data']['attributes']) => ({
  ...props,
  ...(props.leftCtas?.ctaButtons && {
    leftCtas: {
      ...props.leftCtas,
      ctaButtons: props.leftCtas.ctaButtons.map((ctaBtn) => ({
        ...ctaBtn,
        disableRipple: true,
        disableTouchRipple: true,
        target: '_blank',
        rel: 'noopener noreferrer',
        sx: {
          fontWeight: 'bold',
          letterSpacing: '0',
          ...buttonStyles.common,
          ...(props.leftCtas &&
            buttonStyles[ctaBtn.variant][props.leftCtas.theme]),
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
        disableRipple: true,
        disableTouchRipple: true,
        target: '_blank',
        rel: 'noopener noreferrer',
        sx: {
          fontWeight: '600',
          letterSpacing: '.3px',
          ...buttonStyles.common,
          ...(props.rightCtas &&
            buttonStyles[ctaBtn.variant][props.rightCtas.theme]),
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
  <div id='pre-header'>
    <PreHeaderEC {...RefinePreHeaderProps(preHeaderData)} />
  </div>
);

export default PreHeader;
