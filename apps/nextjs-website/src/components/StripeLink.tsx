'use client';
import { StripeLink as StripeLinkEC } from '@pagopa/pagopa-editorial-components';
import { StripeLinkProps } from '@pagopa/pagopa-editorial-components/dist/components/StripeLink';
import { Stack } from '@mui/material';
import MarkdownRenderer from './MarkdownRenderer';
import { StripeLinkSection } from '@/lib/fetch/types/PageSection';

const makeStripeLinkProps = ({
  subtitle,
  icon,
  buttonText,
  ...rest
}: StripeLinkSection): StripeLinkProps => ({
  subtitle: MarkdownRenderer({ markdown: subtitle, variant: 'body2' }),
  ...(icon && {
    icon: {
      icon,
    },
  }),
  ...(buttonText && { buttonText }),
  ...rest,
});

const StripeLink = (props: StripeLinkSection) => {
  const color =
    props.theme === 'dark' ? 'primary.contrastText' : 'primary.main';

  return (
    <Stack
      sx={{
        '.MuiSvgIcon-root': {
          color,
        },
        '.MuiButton-root': {
          fontWeight: 700,
          fontSize: '1rem',
          '.MuiSvgIcon-root': {
            color,
          },
        },
        '.MuiTypography-root': {
          color,
        },
      }}
    >
      <StripeLinkEC {...makeStripeLinkProps(props)} />
    </Stack>
  );
};

export default StripeLink;
