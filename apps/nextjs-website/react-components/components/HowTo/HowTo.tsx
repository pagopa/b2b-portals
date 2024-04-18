import React from 'react';
import { Box, Grid, Link, Stack } from '@mui/material';
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
    link,
    rowMaxSteps = 4,
    stepsAlignment = 'center',
  } = props;
  const textColor = TextColor(theme);
  const backgroundColor = BackgroundColorAlternative(theme);

  const alignment = { center: 'center', left: 'start', right: 'end' }[
    stepsAlignment
  ];

  const stepsRows = groupStepsByRows(steps, rowMaxSteps);

  return (
    <ContainerRC background={backgroundColor} py={{ xs: 6, md: 8 }}>
      <Grid item xs={12}>
        {/** Section title */}
        <Title
          variant='h4'
          component='p'
          textColor={textColor}
          title={title}
          marginBottom={8}
        />
      </Grid>
      <Grid item>
        {/** Steps */}
        {stepsRows.map((stepRow, i) => (
          <Stack
            direction={{ md: 'row' }}
            justifyContent={alignment}
            spacing={{ xs: 4, md: 8 }}
            sx={{ mt: i > 0 ? { xs: 4, md: 8 } : 0 }}
            key={i}
          >
            {stepRow.map((step, j) => (
              <Box key={j} flex={0.25}>
                <HowToStep
                  index={i * rowMaxSteps + j}
                  theme={theme}
                  isLastStep={i * rowMaxSteps + j === steps.length - 1}
                  {...step}
                />
              </Box>
            ))}
          </Stack>
        ))}

        {/** Link */}
        {link && (
          <Link
            sx={{ display: 'flex', alignItems: 'center', mt: 6 }}
            href={link.href}
            target={link.target}
            color={textColor}
            underline='none'
            fontWeight={600}
          >
            {link.label}
            <ArrowForwardIcon
              sx={{ ml: 1, mt: 0.5 }}
              fontSize='small'
              aria-hidden='true'
            />
          </Link>
        )}
      </Grid>
    </ContainerRC>
  );
};

export default HowTo;
