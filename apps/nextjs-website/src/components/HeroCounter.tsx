'use client';
import MarkdownRenderer from './MarkdownRenderer';
import { HeroCounter as HeroCounterRC } from '@react-components/components';
import { HeroCounterProps } from '@react-components/types';
import { HeroCounterSection } from '@/lib/fetch/types/PageSection';
import { ThemeVariant } from '@/lib/fetch/siteWideSEO';

const makeHeroCounterProps = ({
  subtitle,
  background,
  link,
  ...rest
}: HeroCounterSection & { themeVariant: ThemeVariant }): HeroCounterProps => ({
  ...rest,
  ...(subtitle && { subtitle: MarkdownRenderer({ markdown: subtitle }) }),
  ...(background.data && { background: background.data.attributes.url }),
  ...(link && { link }),
});

const HeroCounter = (
  props: HeroCounterSection & { themeVariant: ThemeVariant }
) => <HeroCounterRC {...makeHeroCounterProps(props)} />;

export default HeroCounter;
