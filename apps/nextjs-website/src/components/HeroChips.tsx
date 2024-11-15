'use client';
import MarkdownRenderer from './MarkdownRenderer';
import { HeroChips as HeroChipsRC } from '@react-components/components';
import { HeroChipsProps } from '@react-components/types';
import { HeroChipsSection } from '@/lib/fetch/types/PageSection';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';

const makeHeroChipsProps = ({
  locale,
  defaultLocale,
  subtitle,
  background,
  ...rest
}: HeroChipsSection & SiteWidePageData): HeroChipsProps => ({
  ...rest,
  ...(subtitle && {
    subtitle: MarkdownRenderer({ markdown: subtitle, locale, defaultLocale }),
  }),
  ...(background.data && { background: background.data.attributes.url }),
});

const HeroChips = (props: HeroChipsSection & SiteWidePageData) => (
  <HeroChipsRC {...makeHeroChipsProps(props)} />
);

export default HeroChips;
