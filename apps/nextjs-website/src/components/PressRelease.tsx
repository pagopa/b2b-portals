'use client';
import MarkdownRenderer from './MarkdownRenderer';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';
import { PressReleaseSection } from '@/lib/fetch/types/PageSection';
import { PressRelease as PressReleaseRC } from '@react-components/components';
import { PressReleaseProps } from '@react-components/types';

const makeTextSectionProps = ({
  locale,
  defaultLocale,
  subtitle,
  body,
  ...rest
}: PressReleaseSection &
  Omit<SiteWidePageData, 'themeVariant'>): PressReleaseProps => ({
  ...(subtitle && { subtitle }),
  body: MarkdownRenderer({ markdown: body, locale, defaultLocale }),
  ...rest,
});

const PressRelease = (
  props: PressReleaseSection & Omit<SiteWidePageData, 'themeVariant'>,
) => <PressReleaseRC {...makeTextSectionProps(props)} />;

export default PressRelease;
