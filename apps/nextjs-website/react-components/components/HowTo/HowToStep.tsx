import React from 'react';
import { Stack, Box, useTheme, Theme } from '@mui/material';
import { HowToStepProps } from '../../types/HowTo/HowTo.types';
import { ArrowIcon } from './HowTo.helpers';
import { TextColor, TextAlternativeColor } from '../common/Common.helpers';
import { Title, Body } from '../common/Common';
import { HowToStepNum } from './HowTo.helpers';
import Image from 'next/image';

const customStyles = ({ palette }: Theme, theme: 'light' | 'dark') =>
  theme === 'dark'
    ? {
        a: {
          color: `${palette.primary.contrastText} !important`,
          fontWeight: '700 !important',
          textDecorationColor: `${palette.primary.contrastText} !important`,
          '&:hover': {
            color: `${palette.primary.contrastText} !important`,
          },
        },
      }
    : {
        a: {
          color: `${palette.primary.main} !important`,
          fontWeight: '700 !important',
          textDecorationColor: `${palette.primary.main} !important`,
          '&:hover': {
            color: `${palette.primary.main} !important`,
          },
        },
      };

export const HowToStep = ({
  index,
  iconURL,
  title,
  description,
  theme,
  isLastStep,
}: HowToStepProps) => {
  const muiTheme = useTheme();
  const isDarkTheme = theme === 'dark';
  const stepNum = index + 1;
  const customHowToColour = isDarkTheme ? 'white' : 'primary';
  const color2 = TextAlternativeColor(theme);
  const color3 = TextColor(theme);

  return (
    <Stack
      spacing={1}
      component='article'
      sx={{
        maxWidth: '15em',
        minWidth: 'auto',
        ...customStyles(muiTheme, theme),
      }}
    >
      {/** Step with icon */}
      {iconURL && (
        <Stack spacing={1.2}>
          <Stack spacing={1.2}>
            <HowToStepNum variant='overline' color={color2} stepNum={stepNum} />
            <Stack
              justifyContent='space-between'
              alignItems='center'
              direction='row'
              color={isDarkTheme ? 'white' : undefined}
            >
              <Image
                src={iconURL}
                alt=''
                height={64}
                width={64}
              />
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

          {/** Step title */}
          <Title
            variant='h6'
            component='p'
            textColor={color3}
            title={title}
            textAlign='left'
          />

          {/** Step description */}
          <Body textColor={color3} body={description} />
        </Stack>
      )}

      {/** Step without icon */}
      {!iconURL && (
        <Stack spacing={1.2}>
          <HowToStepNum
            variant='h6'
            component='p'
            color={customHowToColour}
            stepNum={stepNum}
            marginBottom={12}
          />

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              width: '100%',
              opacity: 1,
              transform: { xs: 'rotate(90deg)', md: 'none' },
              minHeight: '2em',
            }}
          >
            {!isLastStep && <ArrowIcon color={color2} />}
          </Box>

          <Title
            variant='h6'
            component='p'
            textColor={color3}
            title={title}
            textAlign='left'
          />

          <Body textColor={color3} body={description} />
        </Stack>
      )}
    </Stack>
  );
};