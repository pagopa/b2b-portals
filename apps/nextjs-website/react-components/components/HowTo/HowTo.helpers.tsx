import React from 'react';
import { Typography, TypographyProps } from '@mui/material';
import { Step } from '../../types/HowTo/HowTo.types';

export const ArrowIcon = ({ color = 'none' }: { color?: string }) => (
  <svg
    aria-hidden='true'
    height='24'
    viewBox='0 0 44 24'
    width='44'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      clipRule='evenodd'
      d='m31.5429 1.04289c.3905-.39052 1.0237-.39052 1.4142 0l10.25 10.25001c.1953.1953.2929.4512.2929.7071s-.0976.5118-.2929.7071l-10.25 10.25c-.3905.3905-1.0237.3905-1.4142 0s-.3905-1.0237 0-1.4142l8.5429-8.5429h-38.5858c-.552284 0-1-.4477-1-1s.447716-1 1-1h38.5858l-8.5429-8.5429c-.3905-.39051-.3905-1.02369 0-1.41421z'
      fill={color}
      fillRule='evenodd'
    />
  </svg>
);

export const groupStepsByRows = (
  steps: ReadonlyArray<Step>,
  rowMaxSteps: number
): Step[][] => {
  const numSteps = steps.length;
  return new Array(Math.ceil(numSteps / rowMaxSteps))
    .fill(undefined)
    .map((_, i) => steps.slice(i * rowMaxSteps, i * rowMaxSteps + rowMaxSteps));
};

export const HowToStepNum = ({
  variant = 'body1',
  component = 'p',
  color,
  stepNum,
}: {
  variant?: TypographyProps['variant'];
  component?: TypographyProps['component'];
  color: string;
  stepNum: number;
}) => (
  <Typography color={color} variant={variant} component={component}>
    {`0${stepNum}`}
  </Typography>
);
