'use client';
import MarkdownRenderer from './MarkdownRenderer';
import { HowTo as HowToRC } from '@react-components/components';
import { HowToProps } from '@react-components/types';
import { HowToSection } from '@/lib/fetch/types/PageSection';
import { ThemeVariant } from '@/lib/fetch/siteWideSEO';

const makeHowToProps = ({
  link,
  steps,
  ...rest
}: HowToSection & { themeVariant: ThemeVariant }): HowToProps => ({
  ...(link && { link }),
  steps: steps.map((step) => ({
    title: step.title,
    description: MarkdownRenderer({ markdown: step.description }),
    ...(step.icon.data && {
      iconURL: step.icon.data.attributes.url,
    }),
  })),
  ...rest,
});

const HowTo = (props: HowToSection & { themeVariant: ThemeVariant }) => (
  <HowToRC {...makeHowToProps(props)} />
);

export default HowTo;
