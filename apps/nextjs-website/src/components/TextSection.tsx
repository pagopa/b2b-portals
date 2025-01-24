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
  eyelet,
  subtitle,
  body,
  title,
  link,
  ...rest
}: TextSectionSection &
  Omit<SiteWidePageData, 'themeVariant'>): TextSectionProps => ({
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
    },
  }),
  ...rest,
});

const TextSection = (
  props: TextSectionSection & Omit<SiteWidePageData, 'themeVariant'>,
) => <TextSectionRC {...makeTextSectionProps(props)} />;

export default TextSection;
