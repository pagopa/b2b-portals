import React from 'react';
import * as MuiIcons from '@mui/icons-material';
import { Stack, Box } from '@mui/material';
import { EIcon } from '../EIcon';
import { Generic } from '../../types/components';
import { HowToStepProps } from '../../utils/Components.types';
import {
  ArrowIcon,
  RenderHowToDescription,
  RenderHowToTitle,
  RenderHowToStepNum,
  useTextColor,
  useTextAlternativeColor,
} from '../../utils/Components.helpers';

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
  const color = isDarkTheme ? 'white' : 'primary';
  const color2 = useTextAlternativeColor(theme);
  const color3 = useTextColor(theme);

  return (
    <Stack spacing={1} component='article'>
      {/** Step with icon */}
      {stepIcon && (
        <Stack spacing={1.2}>
          <RenderHowToStepNum
            variant='overline'
            color={color2}
            stepNum={stepNum}
          />
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
        <RenderHowToStepNum
          variant='h6'
          component='p'
          color={color}
          stepNum={stepNum}
        />
      )}

      {/** Step title */}
      {RenderHowToTitle(title, color3)}

      {/** Step description */}
      {RenderHowToDescription(description, color3)}
    </Stack>
  );
};
