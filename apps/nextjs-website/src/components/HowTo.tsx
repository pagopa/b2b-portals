'use client';
import MarkdownRenderer from './MarkdownRenderer';
import { HowTo as HowToRC } from '@react-components/components';
import { HowToProps } from '@react-components/types';
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

const HowTo = (props: HowToSection) => <HowToRC {...makeHowToProps(props)} />;

export default HowTo;
