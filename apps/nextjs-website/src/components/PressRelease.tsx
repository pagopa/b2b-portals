'use client';
import MarkdownRenderer from './MarkdownRenderer';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';
import { PressReleaseSection } from '@/lib/fetch/types/PageSection';
import { PressRelease as PressReleaseRC } from '@react-components/components';
import { PressReleaseProps } from '@react-components/types';

const formatDateToLocale = (dateString: string, locale: string): string => {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    return dateString;
  }

  return date.toLocaleDateString(locale, {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
};

const makeTextSectionProps = ({
  locale,
  defaultLocale,
  subtitle,
  body,
  date,
  backlink,
  ...rest
}: PressReleaseSection &
  Omit<SiteWidePageData, 'themeVariant'>): PressReleaseProps => ({
  ...(subtitle && { subtitle }),
  body: MarkdownRenderer({ markdown: body, locale, defaultLocale }),
  date: formatDateToLocale(date, locale),
  ...(backlink && { backlink }),
  ...rest,
});

const PressRelease = (
  props: PressReleaseSection & Omit<SiteWidePageData, 'themeVariant'>
) => <PressReleaseRC {...makeTextSectionProps(props)} />;

export default PressRelease;
