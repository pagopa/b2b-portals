'use client';
import { HowToProps } from '@pagopa/pagopa-editorial-components/dist/components/HowTo';
import { HowTo as HowToEC } from '@pagopa/pagopa-editorial-components';
import * as MuiIcons from '@mui/icons-material';
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
    description: step.description, // TODO: Parse rich text (markdown)
    ...(step.icon && {
      stepIcon: {
        icon: step.icon as keyof typeof MuiIcons,
        color: step.iconColor,
      },
    }),
  })),
  ...rest,
});

const HowTo = (props: HowToSection) => (
  <section>
    <HowToEC {...makeHowToProps(props)} />
  </section>
);

export default HowTo;
