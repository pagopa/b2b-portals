'use client';
import React from 'react';
import { PreHeader as PreHeaderEC } from '@pagopa/pagopa-editorial-components/dist/components/PreHeader';
import '@/styles/preHeader.css';
import Icon from '@mui/material/Icon';
import * as MuiIcons from '@mui/icons-material';
import { PreHeader } from '@/lib/fetch/preHeader';
// TODO: Component styles are loaded client-side (even if we move the import to a server side component above this one). This causes a flash of the unstyled component (even when everything is rendered as static HTML) that needs to be fixed.

const formatValidMuiIcon = (input?: string | null): string | null => {
  if (!input || !(input in MuiIcons)) {
    return null;
  }

  // Convert from camel case (anExample) or pascal case (AnExample) to snake case (an_example)
  return input
    .replace(/(?:^|\.?)([A-Z])/g, (_, y) => `_${y.toLowerCase()}`)
    .split(/^_/)
    .join('');
};

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
        },
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
        },
        startIcon: <Icon>{formatValidMuiIcon(ctaBtn.icon)}</Icon>,
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
