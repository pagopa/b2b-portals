'use client';
import { StripeLink as StripeLinkEC } from '@pagopa/pagopa-editorial-components';
import { StripeLinkProps } from '@pagopa/pagopa-editorial-components/dist/components/StripeLink';
import { Stack } from '@mui/material';
import { StripeLinkSection } from '@/lib/fetch/types/PageSection';

const makeStripeLinkProps = ({
  icon,
  buttonText,
  ...rest
}: StripeLinkSection): StripeLinkProps => ({
  ...(icon && {
    icon: {
      icon,
    },
  }),
  ...(buttonText && { buttonText }),
  ...rest,
});

const StripeLink = (props: StripeLinkSection) => (
  <Stack
    sx={{
      '.MuiSvgIcon-root': {
        color: props.theme === 'dark' ? 'primary.contrastText' : 'text.primary',
      },
      '.MuiButton-root': {
        fontWeight: 700,
        fontSize: '1rem',
      },
    }}
  >
    <StripeLinkEC {...makeStripeLinkProps(props)} />
  </Stack>
);

export default StripeLink;
