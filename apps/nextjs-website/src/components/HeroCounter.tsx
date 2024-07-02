'use client';
import MarkdownRenderer from './MarkdownRenderer';
import { HeroCounter as HeroCounterRC } from '@react-components/components';
import { HeroCounterProps } from '@react-components/types';
import { HeroCounterSection } from '@/lib/fetch/types/PageSection';

const makeHeroCounterProps = ({
  subtitle,
  background,
  counterNumber,
  counterText,
  ...rest
}: HeroCounterSection): HeroCounterProps => ({
  ...rest,
  ...(subtitle && { subtitle: MarkdownRenderer({ markdown: subtitle }) }),
  counterNumber,
  counterText,
  ...(background && { background: background.url }),
});

const HeroCounter = (props: HeroCounterSection) => (
  <HeroCounterRC {...makeHeroCounterProps(props)} />
);

export default HeroCounter;
