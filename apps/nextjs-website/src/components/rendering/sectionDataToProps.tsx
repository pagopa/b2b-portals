import { HowToProps } from '@pagopa/pagopa-editorial-components/dist/components/HowTo';
import * as MuiIcons from '@mui/icons-material';
import { HowToSectionData } from '@/lib/fetch/page';

export const SectionDataToHowToProps = ({
  title,
  theme,
  rowMaxSteps,
  stepsAlignment,
  link,
  steps,
}: HowToSectionData): HowToProps => ({
  title,
  theme,
  ...(rowMaxSteps && { rowMaxSteps }),
  stepsAlignment,
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
});
