'use client';
import { HowToProps } from '@pagopa/pagopa-editorial-components/dist/components/HowTo';
import { HowTo as HowToEC } from '@pagopa/pagopa-editorial-components';
import { Stack } from '@mui/material';
// Temporarily importing the entirety of MuiIcons
// Will be subbed for a small set of allowed icons
// Reference task B2BP-271
import * as MuiIcons from '@mui/icons-material';
import { isValidMuiIcon } from './Icons';
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
          icon: step.icon as keyof typeof MuiIcons, // Temporary (see at the top of the file)
        }),
        color: step.iconColor,
      },
    }),
  })),
  ...rest,
});

const HowTo = (props: HowToSection) => (
  <section id={props.sectionID || undefined}>
    <Stack
      sx={{
        '.MuiSvgIcon-fontSizeMedium': { width: '64px', height: '64px' },
        '.MuiTypography-root': {
          fontFamily: '"Titillium Web",sans-serif;',
        },
      }}
    >
      <HowToEC {...makeHowToProps(props)} />
    </Stack>
  </section>
);

export default HowTo;
