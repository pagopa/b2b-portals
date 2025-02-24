'use client';
import MarkdownRenderer from './MarkdownRenderer';
import { StripeLink as StripeLinkRC } from '@react-components/components';
import { StripeLinkProps } from '@react-components/types';
import { StripeLinkSection } from '@/lib/fetch/types/PageSection';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';
import { LocalizeURL } from '@/lib/linkLocalization';

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
  ...(icon && {
    iconURL: icon.url,
  }),
  link: {
    label: link.label,
    href: LocalizeURL({ URL: link.href, locale, defaultLocale }),
  },
  ...rest,
});

const StripeLink = (props: StripeLinkSection & SiteWidePageData) => (
  <StripeLinkRC {...makeStripeLinkProps(props)} />
);

export default StripeLink;
