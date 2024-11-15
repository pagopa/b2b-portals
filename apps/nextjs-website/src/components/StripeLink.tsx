'use client';
import MarkdownRenderer from './MarkdownRenderer';
import { StripeLink as StripeLinkRC } from '@react-components/components';
import { StripeLinkProps } from '@react-components/types';
import { StripeLinkSection } from '@/lib/fetch/types/PageSection';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';

const makeStripeLinkProps = ({
  locale,
  defaultLocale,
  subtitle,
  icon,
  link,
  ...rest
}: StripeLinkSection & SiteWidePageData): StripeLinkProps => ({
  subtitle: MarkdownRenderer({
    markdown: subtitle,
    locale,
    defaultLocale,
    variant: 'body2',
  }),
  ...(icon.data && {
    iconURL: icon.data.attributes.url,
  }),
  link,
  ...rest,
});

const StripeLink = (props: StripeLinkSection & SiteWidePageData) => (
  <StripeLinkRC {...makeStripeLinkProps(props)} />
);

export default StripeLink;
