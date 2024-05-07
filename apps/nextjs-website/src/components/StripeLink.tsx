'use client';
import MarkdownRenderer from './MarkdownRenderer';
import { StripeLink as StripeLinkRC } from '@react-components/components';
import { StripeLinkProps } from '@react-components/types';
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
  ...(buttonText &&
    buttonText.length > 0 && {
      ctaButtons: buttonText.map(({ icon, ...button }) => ({
        ...button,
        size: 'small',
        ...(buttonText.icon && { endIcon: Icon(buttonText.icon) }),
      })),
    }),
  ...rest,
});

const StripeLink = (props: StripeLinkSection) => (
  <StripeLinkRC {...makeStripeLinkProps(props)} />
);

export default StripeLink;
