'use client';
import { HowToProps } from '@pagopa/pagopa-editorial-components/dist/components/HowTo';
import { HowTo as HowToEC } from '@pagopa/pagopa-editorial-components';
import { Stack, useTheme } from '@mui/material';
import MarkdownRenderer from './MarkdownRenderer';
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
        ...(rest.theme === 'light' && { color: 'primary.main' }),
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
            ...(props.theme === 'dark' && {
              backgroundColor: 'custom.backgroundColorDark',
            }),
            ...(props.theme === 'light' && {
              backgroundColor: 'custom.backgroundColorLightGrey',
            }),
            img: {
              display: 'none',
            },
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
          '.MuiTypography-overline': {
            ...(props.theme === 'light' && { color: 'primary.dark' }),
            fontWeight: '400',
            opacity: '1',
          },
        }}
      >
        <HowToEC {...makeHowToProps(props)} />
      </Stack>
    </section>
  );
};

export default HowTo;
