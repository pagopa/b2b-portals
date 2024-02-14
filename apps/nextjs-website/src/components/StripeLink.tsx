'use client';
import { StripeLink as StripeLinkEC } from '@pagopa/pagopa-editorial-components';
import { StripeLinkProps } from '@pagopa/pagopa-editorial-components/dist/components/StripeLink';
import { Icon } from '@mui/material';
import { StripeLinkSection } from '@/lib/fetch/types/PageSection';
import { formatValidMuiIcon } from '@/components/Icons';

const makeStripeLinkProps = ({
  theme,
  subtitle,
  icon,
  buttonText,
  ...rest
}: StripeLinkSection): StripeLinkProps => ({
  theme,
  subtitle,
  ...(icon && {
    startIcon: <Icon>{formatValidMuiIcon(icon)}</Icon>,
  }),
  buttonText,
  ...rest,
});

const StripeLink = (props: StripeLinkSection) => (
  <section>
    <StripeLinkEC {...makeStripeLinkProps(props)} />
  </section>
);

export default StripeLink;
