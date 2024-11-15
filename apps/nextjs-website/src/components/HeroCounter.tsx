'use client';
import MarkdownRenderer from './MarkdownRenderer';
import { HeroCounter as HeroCounterRC } from '@react-components/components';
import { HeroCounterProps } from '@react-components/types';
import { HeroCounterSection } from '@/lib/fetch/types/PageSection';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';

const makeHeroCounterProps = ({
  locale,
  defaultLocale,
  subtitle,
  background,
  link,
  ...rest
}: HeroCounterSection & SiteWidePageData): HeroCounterProps => ({
  ...rest,
  ...(subtitle && {
    subtitle: MarkdownRenderer({ markdown: subtitle, locale, defaultLocale }),
  }),
  ...(background.data && { background: background.data.attributes.url }),
  ...(link && { link }),
});

const HeroCounter = (props: HeroCounterSection & SiteWidePageData) => (
  <HeroCounterRC {...makeHeroCounterProps(props)} />
);

export default HeroCounter;
