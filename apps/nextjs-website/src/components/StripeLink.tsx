'use client';
import MarkdownRenderer from './MarkdownRenderer';
import { StripeLink as StripeLinkRC } from '@react-components/components';
import { StripeLinkProps } from '@react-components/types';
import { StripeLinkSection } from '@/lib/fetch/types/PageSection';

const makeStripeLinkProps = ({
  subtitle,
  icon,
  link,
  ...rest
}: StripeLinkSection): StripeLinkProps => ({
  subtitle: MarkdownRenderer({ markdown: subtitle, variant: 'body2' }),
  ...(icon.data && {
    iconURL: icon.data.attributes.url,
  }),
  link,
  ...rest,
});

const StripeLink = (props: StripeLinkSection) => (
  <StripeLinkRC {...makeStripeLinkProps(props)} />
);

export default StripeLink;
