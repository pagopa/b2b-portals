import React from 'react';
import * as MuiIcons from '@mui/icons-material';
import { Stack, Box } from '@mui/material';
import { EIcon } from '../common/EIcon';
import { Generic } from '../../types/common/Common.types';
import { HowToStepProps } from '../../types/HowTo/HowTo.types';
import { ArrowIcon } from './HowTo.helpers';
import { TextColor, TextAlternativeColor } from '../common/Common.helpers';
import { Title, Body } from '../common/Common';
import { HowToStepNum } from './HowTo.helpers';

type IconProp = keyof typeof MuiIcons | Generic;

function isIconProp(icon: IconProp | undefined): icon is IconProp {
  return (
    icon !== undefined &&
    (typeof icon === 'string' || React.isValidElement(icon))
  );
}

export const HowToStep = ({
  index,
  stepIcon,
  title,
  description,
  theme,
  isLastStep,
}: HowToStepProps) => {
  const isDarkTheme = theme === 'dark';
  const stepNum = index + 1;
  const customHowToColour = isDarkTheme ? 'white' : 'primary';
  const color2 = TextAlternativeColor(theme);
  const color3 = TextColor(theme);

  return (
    <Stack spacing={1} component='article'>
      {/** Step with icon */}
      {stepIcon && (
        <Stack spacing={1.2}>
          <HowToStepNum variant='overline' color={color2} stepNum={stepNum} />
          <Stack
            justifyContent='space-between'
            alignItems='center'
            direction='row'
            color={isDarkTheme ? 'white' : undefined}
          >
            {stepIcon && isIconProp(stepIcon.icon) && (
              <EIcon
                {...stepIcon}
                icon={stepIcon.icon}
                color={color2}
                sx={{ width: '64px', height: '64px' }}
              />
            )}
            {!isLastStep && (
              <Box
                sx={{
                  opacity: 1,
                  transform: { xs: 'rotate(90deg)', md: 'none' },
                }}
              >
                <ArrowIcon color={color2} />
              </Box>
            )}
          </Stack>
        </Stack>
      )}

      {/** Step without icon */}
      {!stepIcon && (
        <HowToStepNum
          variant='h6'
          component='p'
          color={customHowToColour}
          stepNum={stepNum}
        />
      )}

      {/** Step title */}
      <Title variant='h5' component='p' textColor={color3} title={title} />

      {/** Step description */}
      <Body textColor={color3} body={description} />
    </Stack>
  );
};
