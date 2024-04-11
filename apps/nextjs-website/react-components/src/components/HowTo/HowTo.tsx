import React from 'react';
import { Box, Grid, Link, Stack, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EContainer from '../EContainer';
import {
  groupStepsByRows,
  useBackgroundColorAlternative,
  useTextColor,
} from '../../utils/Components.helpers';
import { HowToProps } from '../../utils/Components.types';
import { HowToStep } from './HowToStep';

const HowTo = (props: HowToProps) => {
  const {
    title,
    steps,
    theme,
    link,
    rowMaxSteps = 4,
    stepsAlignment = 'center',
  } = props;
  const backgroundColor = useBackgroundColorAlternative(theme);
  const textColor = useTextColor(theme);

  const alignment = { center: 'center', left: 'start', right: 'end' }[
    stepsAlignment
  ];

  const stepsRows = groupStepsByRows(steps, rowMaxSteps);

  return (
    <EContainer background={backgroundColor} py={{ xs: 6, md: 8 }}>
      <Grid item xs={12}>
        {/** Section title */}
        <Typography
          color={textColor}
          sx={{ textAlign: 'center', mb: 8 }}
          variant='h4'
        >
          {title}
        </Typography>
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
    </EContainer>
  );
};

export default HowTo;
