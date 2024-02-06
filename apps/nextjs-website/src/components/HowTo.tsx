'use client';
import { HowToProps } from '@pagopa/pagopa-editorial-components/dist/components/HowTo';
import { HowTo as HowToEC } from '@pagopa/pagopa-editorial-components';
import { Stack, useTheme } from '@mui/material';
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

const HowTo = (props: HowToSection) => {
  const theme = useTheme();

  return (
    <section id={props.sectionID || undefined}>
      <Stack
        sx={{
          section: {
            ...(props.theme === 'dark' && { backgroundColor: 'pagoPA.main' }),
            img: {
              display: 'none',
            },
          },
          '.MuiSvgIcon-root': {
            ...(props.theme === 'light' && { color: 'primary.main' }),
          },
          '.MuiSvgIcon-fontSizeMedium': { width: '4rem', height: '4rem' },
          '.MuiLink-root': {
            // Bottom Link
            fontFamily: '"Titillium Web",sans-serif;',
            fontSize: '1.125rem', // 18px
          },
          '.MuiTypography-body1': {
            ...(props.theme === 'dark' && { color: 'primary.contrastText' }),
            fontSize: '1rem', // 16px
          },
          [theme.breakpoints.down('md')]: {
            '.MuiGrid-item:last-child': {
              maxWidth: 300,
              marginLeft: 'auto',
              marginRight: 'auto',
            },
          },
        }}
      >
        <HowToEC {...makeHowToProps(props)} />
      </Stack>
    </section>
  );
};

export default HowTo;
