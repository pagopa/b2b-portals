'use client';
import MarkdownRenderer from './MarkdownRenderer';
import { HeroChips as HeroChipsRC } from '@react-components/components';
import { HeroChipsProps } from '@react-components/types';
import { HeroChipsSection } from '@/lib/fetch/types/PageSection';
import { ThemeVariant } from '@/lib/fetch/siteWideSEO';

const makeHeroChipsProps = ({
  subtitle,
  background,
  ...rest
}: HeroChipsSection & { themeVariant: ThemeVariant }): HeroChipsProps => ({
  ...rest,
  ...(subtitle && { subtitle: MarkdownRenderer({ markdown: subtitle }) }),
  ...(background.data && { background: background.data.attributes.url }),
});

const HeroChips = (
  props: HeroChipsSection & { themeVariant: ThemeVariant }
) => <HeroChipsRC {...makeHeroChipsProps(props)} />;

export default HeroChips;
