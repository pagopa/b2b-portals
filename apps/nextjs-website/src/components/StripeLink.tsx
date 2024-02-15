'use client';
import { StripeLink as StripeLinkEC } from '@pagopa/pagopa-editorial-components';
import { StripeLinkProps } from '@pagopa/pagopa-editorial-components/dist/components/StripeLink';
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
  <StripeLinkEC {...makeStripeLinkProps(props)} />
);

export default StripeLink;
