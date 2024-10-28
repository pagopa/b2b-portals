import React from 'react';
import { Box, Grid, Link, Stack, Typography, useTheme } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ContainerRC from '../common/ContainerRC';
import { groupStepsByRows } from './HowTo.helpers';
import {
  TextColor,
  BackgroundColorAlternative,
} from '../common/Common.helpers';
import { HowToProps } from '../../types/HowTo/HowTo.types';
import { HowToStep } from './HowToStep';
import { Title } from '../common/Common';

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
  } = props;
  const textColor = TextColor(theme);
  const backgroundColor = BackgroundColorAlternative(theme);
  const { palette } = useTheme();

  const alignment = { center: 'center', left: 'start', right: 'end' }[
    stepsAlignment
  ];

  const stepsRows = groupStepsByRows(steps, rowMaxSteps);

  const linkColor =
    theme === 'light'
      ? themeVariant === 'SEND'
        ? palette.primary.main
        : palette.custom.blueIO[500]
      : palette.custom.white;

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
          component='p'
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
        alignItems='center'
        gap='24px'
        sx={{ paddingLeft: '2em', paddingRight: '2em' }}
      >
        {/** Steps */}
        {stepsRows.map((stepRow, i) => (
          <Stack
            direction={{ md: 'row' }}
            justifyContent={alignment}
            spacing={{ xs: 4, md: 8 }}
            sx={{
              mt: i > 0 ? { xs: 4, md: 8 } : 0,
              marginX: 'auto',
              width: '100%',
            }}
            key={i}
          >
            {stepRow.map((step, j) => (
              <Box
                key={j}
                flex={0.25}
                width='100%'
                sx={{
                  minWidth: 'auto',
                }}
              >
                <HowToStep
                  index={i * rowMaxSteps + j}
                  theme={theme}
                  themeVariant={themeVariant}
                  isLastStep={i * rowMaxSteps + j === steps.length - 1}
                  {...step}
                />
              </Box>
            ))}
          </Stack>
        ))}

        {/** Link */}
        {link && (
          <Typography component='span' display={'contents'}>
            <Link
              sx={{
                display: 'flex',
                alignItems: 'center',
                mt: 6,
                alignSelf: 'flex-start',
              }}
              href={link.href}
              target={link.target}
              color={linkColor}
              underline='none'
              fontWeight={600}
            >
              {link.label}
              <ArrowForwardIcon
                sx={{ ml: 1 }}
                fontSize='small'
                aria-hidden='true'
              />
            </Link>
          </Typography>
        )}
      </Grid>
    </ContainerRC>
  );
};

export default HowTo;
