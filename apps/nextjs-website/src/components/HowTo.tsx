'use client';
import { HowToProps } from '@pagopa/pagopa-editorial-components/dist/components/HowTo';
import { HowTo as HowToEC } from '@pagopa/pagopa-editorial-components';
import { Icon } from '@mui/material';
import { formatValidMuiIcon, isValidMuiIcon } from './Icons';
import MarkdownRenderer from './MarkdownRenderer';
import { HowToSection } from '@/lib/fetch/types/PageSection';

const makeHowToProps = ({
  rowMaxSteps,
  link,
  steps,
  ...rest
}: HowToSection): HowToProps => ({
  ...(rowMaxSteps && { rowMaxSteps }),
  ...(link && {
    link: {
      href: link.href,
      label: link.text ?? link.href,
    },
  }),
  steps: steps.map((step) => ({
    title: step.title,
    description: MarkdownRenderer({ markdown: step.description ?? '' }),
    ...(step.icon && {
      stepIcon: {
        ...(isValidMuiIcon(step.icon) && {
          icon: <Icon>{formatValidMuiIcon(step.icon)}</Icon>,
        }),
        color: step.iconColor,
      },
    }),
  })),
  ...rest,
});

const HowTo = (props: HowToSection) => (
  <section id={props.sectionID || undefined}>
    <HowToEC {...makeHowToProps(props)} />
  </section>
);

export default HowTo;
