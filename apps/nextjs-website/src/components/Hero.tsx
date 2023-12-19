'use client';
import React from 'react';
import { Hero as HeroEC } from '@pagopa/pagopa-editorial-components';
import { Icon, Stack, useTheme } from '@mui/material';
import { ExtendedHeroProps } from '@/lib/fetch/types/ExtendedPropTypes';
import { formatValidMuiIcon, isValidMuiIcon } from '@/utils';

const AddIconToButtons = (
  props: ExtendedHeroProps & { sectionID: string | undefined }
) => ({
  ...props,
  ...(props.ctaButtons && {
    ctaButtons: props.ctaButtons.map((ctaBtn) => ({
      ...ctaBtn,
      ...(isValidMuiIcon(ctaBtn.icon) && {
        startIcon: <Icon>{formatValidMuiIcon(ctaBtn.icon)}</Icon>,
      }),
    })),
  }),
});

const Hero: React.FC<ExtendedHeroProps & { sectionID: string | undefined }> = (
  HeroData
) => {
  const theme = useTheme();

  return (
    <section id={HeroData.sectionID}>
      <Stack
        sx={{
          h1: {
            color:
              HeroData.theme === 'dark'
                ? 'primary.contrastText'
                : 'text.primary',
          },
          p: {
            color:
              HeroData.theme === 'dark'
                ? 'primary.contrastText'
                : 'text.primary',
          },
          ':first-of-type': {
            ':first-of-type': {
              backgroundColor:
                HeroData.theme === 'dark' ? 'primary.dark' : 'background.paper',
              backgroundImage:
                HeroData.background != null
                  ? `url('${HeroData.background}')`
                  : 'none',
            },
          },
          '.MuiGrid-root': {
            '.MuiGrid-root': {
              ':first-of-type': {
                padding: '0',
                [theme.breakpoints.up('md')]: {
                  padding: '0 2rem',
                },
              },
            },
          },
          '.MuiBox-root': {
            '.MuiGrid-root': {
              ':first-of-type': {
                padding: '0',
                [theme.breakpoints.up('md')]: {
                  padding: '0 2rem',
                },
              },
            },
          },
        }}
      >
        <HeroEC {...AddIconToButtons(HeroData)} />
      </Stack>
    </section>
  );
};

export default Hero;
