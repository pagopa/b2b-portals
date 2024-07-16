'use client';
import MarkdownRenderer from './MarkdownRenderer';
import { HeroCounter as HeroCounterRC } from '@react-components/components';
import { HeroCounterProps } from '@react-components/types';
import { HeroCounterSection } from '@/lib/fetch/types/PageSection';

const makeHeroCounterProps = ({
  subtitle,
  background,
  ...rest
}: HeroCounterSection): HeroCounterProps => ({
  ...rest,
  ...(subtitle && { subtitle: MarkdownRenderer({ markdown: subtitle }) }),
  ...(background.data && { background: background.data.attributes.url }),
});

const HeroCounter = (props: HeroCounterSection) => (
  <HeroCounterRC {...makeHeroCounterProps(props)} />
);

export default HeroCounter;
