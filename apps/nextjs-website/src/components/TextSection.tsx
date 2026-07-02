'use client';
import MarkdownRenderer from './MarkdownRenderer';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';
import { TextSectionSection } from '@/lib/fetch/types/PageSection';
import { TextSection as TextSectionRC } from '@react-components/components';
import { LocalizeURL } from '@/lib/linkLocalization';
import { TextSectionProps } from '@react-components/types';

const makeTextSectionProps = ({
  locale,
  defaultLocale,
  themeVariant,
  eyelet,
  subtitle,
  body,
  title,
  link,
  ...rest
}: TextSectionSection & SiteWidePageData): TextSectionProps => ({
  themeVariant,
  ...(eyelet && { eyelet }),
  ...(subtitle && {
    subtitle: MarkdownRenderer({ markdown: subtitle, locale, defaultLocale }),
  }),
  body: MarkdownRenderer({ markdown: body, locale, defaultLocale }),
  ...(title && { title }),
  ...(link && {
    link: {
      label: link.label,
      href: LocalizeURL({ URL: link.href, locale, defaultLocale }),
      ...(link.ariaLabel && { ariaLabel: link.ariaLabel }),
    },
  }),
  ...rest,
});

const TextSection = (props: TextSectionSection & SiteWidePageData) => (
  <TextSectionRC {...makeTextSectionProps(props)} />
);

export default TextSection;
