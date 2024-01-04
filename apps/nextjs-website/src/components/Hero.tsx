'use client';
import React from 'react';
import { Hero as HeroEC } from '@pagopa/pagopa-editorial-components';
import { HeroProps } from '@pagopa/pagopa-editorial-components/dist/components/Hero/index';
import { Stack, useTheme } from '@mui/material';
import { HeroSection } from '@/lib/fetch/types/PageSection';

const makeHeroProps = (props: HeroSection): HeroProps => ({
  ...props,
  image: props.image?.url,
  altText: props.image?.alternativeText ?? '',
  background: props.background?.url,
});

const Hero = (props: HeroSection) => {
  const theme = useTheme();

  return (
    <section id={props.sectionID || undefined}>
      <Stack
        sx={{
          '.MuiGrid-root': {
            '.MuiGrid-root': {
              ':first-of-type': {
                padding: '0',
                [theme.breakpoints.up('md')]: {
                  padding: '0 0.5rem',
                },
              },
            },
          },
          '.MuiBox-root': {
            ':first-of-type': {
              padding: '0 0.8rem',
              [theme.breakpoints.up('md')]: {
                padding: '0 0.5rem',
              },
            },
          },
          '.MuiContainer-root': {
            '.MuiGrid-root': {
              '.MuiGrid-root': {
                '.MuiStack-root': {
                  ':first-of-type': {
                    margin: '0',
                    padding: '2rem 0 0 0',
                    [theme.breakpoints.up('lg')]: {
                      margin: '0',
                      padding: '0',
                    },
                  },
                },
              },
            },
          },
          '.MuiTypography-root': {
            color:
              props.theme === 'dark' ? 'primary.contrastText' : 'text.primary',
            a: {
              color:
                props.theme === 'dark'
                  ? 'primary.contrastText'
                  : 'text.primary',
            },
          },
        }}
      >
        <HeroEC {...makeHeroProps(props)} />
      </Stack>
    </section>
  );
};

export default Hero;
