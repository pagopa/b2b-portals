import React from 'react';
import { Box, Grid, Link, Typography, useTheme } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ContainerRC from '../common/ContainerRC';
import { TextColor } from '../common/Common.helpers';
import { HowToProps } from '../../types/HowTo/HowTo.types';
import { HowToStep } from './HowToStep';
import { resolveThemeVariant } from '../../theme';
import {
  CtaButtons,
  isValidExternalLink,
  LinkIcon,
  Title,
} from '../common/Common';

const HowTo = (props: HowToProps) => {
  const {
    title,
    steps,
    theme,
    themeVariant,
    link,
    rowMaxSteps = 4,
    stepsAlignment = 'center',
    sectionID,
    customBgColor,
    ctaButton,
  } = props;

  const textColor = TextColor(theme);
  const { palette, spacing } = useTheme();
  const ctx = { palette, theme };

  const backgroundColor =
    customBgColor ??
    resolveThemeVariant<string>(
      'sectionBackgroundAlternativeGrey',
      themeVariant,
      ctx,
    );

  const alignment = { center: 'center', left: 'flex-start', right: 'flex-end' }[
    stepsAlignment
  ];

  const linkColor = resolveThemeVariant<string>(
    'contentLinkColor',
    themeVariant,
    ctx,
  );

  return (
    <ContainerRC
      background={backgroundColor}
      py={{ xs: 6, md: 8 }}
      {...(sectionID && { sectionID })}
    >
      <Grid item xs={12}>
        {/** Section title */}
        <Title
          variant='h4'
          component='h2'
          textColor={textColor}
          title={title}
          marginBottom={32}
        />
      </Grid>

      <Grid
        item
        container
        direction='column'
        justifyContent='center'
        alignItems={alignment}
        gap='24px'
        sx={{ paddingLeft: '2em', paddingRight: '2em' }}
      >
        {/** Steps */}
        <Box
          component='ol'
          sx={{
            display: { md: 'grid' },
            gridTemplateColumns: 'auto '.repeat(rowMaxSteps).trim(),
            p: 0,
            marginBlockStart: 0,
            marginBlockEnd: 0,
            listStyleType: 'none',
            gap: { xs: spacing(4), md: spacing(8) },
          }}
        >
          {steps.map((step, j) => (
            <Box
              component='li'
              key={j}
              flex={0.25}
              width='100%'
              sx={{
                minWidth: 'auto',
                p: 0,
                '&:not(:first-child)': {
                  mt: {
                    xs: 4,
                    sm: 0,
                  },
                },
              }}
            >
              <HowToStep
                {...step}
                index={j + 1}
                theme={theme}
                themeVariant={themeVariant}
                isLastStep={j === steps.length - 1}
              />
            </Box>
          ))}
        </Box>
        {/** CTA button or link */}
        {ctaButton ? (
          <Box sx={{ mt: 6 }}>
            {CtaButtons({
              ctaButtons: [ctaButton],
              theme,
              themeVariant,
            })}
          </Box>
        ) : link ? (
          <Typography component='span' display='contents'>
            <Link
              sx={{
                display: 'flex',
                alignItems: 'center',
                mt: 6,
                alignSelf: 'flex-start',
              }}
              {...(link.ariaLabel && { 'aria-label': link.ariaLabel })}
              href={link.href}
              target={link.target}
              color={linkColor}
              underline='none'
              fontWeight={600}
            >
              {link.label}
              <LinkIcon
                showExternalLinkIcon={isValidExternalLink(link.href)}
                {...(link.target && { externaLinkIconTarget: link.target })}
                internalLinkIcon={
                  <ArrowForwardIcon
                    sx={{ ml: 1 }}
                    fontSize='small'
                    aria-hidden='true'
                  />
                }
              />
            </Link>
          </Typography>
        ) : null}
      </Grid>
    </ContainerRC>
  );
};

export default HowTo;
