'use client';
import MarkdownRenderer from './MarkdownRenderer';
import { HowTo as HowToEC } from './react-components/src';
import { HowToProps } from './react-components/src/index-props';
import { HowToSection } from '@/lib/fetch/types/PageSection';

const makeHowToProps = ({
  link,
  steps,
  ...rest
}: HowToSection): HowToProps => ({
  ...(link && { link }),
  steps: steps.map((step) => ({
    title: step.title,
    description: MarkdownRenderer({ markdown: step.description }),
    ...(step.icon && {
      stepIcon: {
        icon: step.icon,
      },
    }),
  })),
  ...rest,
});

const HowTo = (props: HowToSection) => <HowToEC {...makeHowToProps(props)} />;

export default HowTo;
