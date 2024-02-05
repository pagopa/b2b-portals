'use client';
import {
  PreHeader as PreHeaderEC,
  PreHeaderProps,
} from '@pagopa/pagopa-editorial-components/dist/components/PreHeader';
import Icon from '@mui/material/Icon';
import { Stack } from '@mui/material';
import { CtaProps } from '@pagopa/pagopa-editorial-components/dist/components/Ctas';
import { PreHeader } from '@/lib/fetch/preHeader';
import { formatValidMuiIcon } from '@/components/Icons';

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
const makeCtas = (
  ctaButtons: PreHeader['data']['attributes']['leftCtas'],
  side: 'left' | 'right'
): CtaProps => ({
  theme: 'light',
  ctaButtons: ctaButtons.map((ctaBtn) => ({
    ...ctaBtn,
    target: '_blank',
    rel: 'noopener noreferrer',
    disableRipple: ctaBtn.variant === 'naked',
    disableTouchRipple: ctaBtn.variant === 'naked',
    sx: {
      fontWeight: side === 'left' ? 'bold' : '600',
      letterSpacing: side === 'left' ? '0' : '.3px',
      ...(ctaBtn.variant === 'naked' && { ...preHeaderNakedButtonStyle }),
    },
    ...(ctaBtn.icon && {
      startIcon: <Icon>{formatValidMuiIcon(ctaBtn.icon)}</Icon>,
    }),
  })),
});

const makePreHeaderProps = (
  props: PreHeader['data']['attributes']
): PreHeaderProps => ({
  leftCtas: makeCtas(props.leftCtas, 'left'),
  rightCtas: makeCtas(props.rightCtas, 'right'),
});

const PreHeader = (preHeaderData: PreHeader['data']['attributes']) => (
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
        '.MuiStack-root': {
          alignItems: 'center',
        },
      },
    }}
  >
    <PreHeaderEC {...makePreHeaderProps(preHeaderData)} />
  </Stack>
);

export default PreHeader;
