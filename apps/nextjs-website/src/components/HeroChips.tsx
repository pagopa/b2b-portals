'use client';
import MarkdownRenderer from './MarkdownRenderer';
import { HeroChips as HeroChipsRC } from '@react-components/components';
import { HeroChipsProps } from '@react-components/types';
import { HeroChipsSection } from '@/lib/fetch/types/PageSection';

const makeHeroChipsProps = ({
  subtitle,
  background,
  ...rest
}: HeroChipsSection): HeroChipsProps => ({
  ...rest,
  ...(subtitle && { subtitle: MarkdownRenderer({ markdown: subtitle }) }),
  ...(background.data && { background: background.data.attributes.url }),

  // TODO: implement chips
});

const HeroChips = (props: HeroChipsSection) => (
  <HeroChipsRC {...makeHeroChipsProps(props)} />
);

export default HeroChips;
