import React from 'react';
import { Stack, Box, useTheme, Typography } from '@mui/material';
import { HowToStepProps } from '../../types/HowTo/HowTo.types';
import { ArrowIcon } from './HowTo.helpers';
import { TextColor, TextAlternativeColor } from '../common/Common.helpers';
import { Title } from '../common/Common';
import { HowToStepNum } from './HowTo.helpers';
import Image from 'next/image';

export const HowToStep = ({
  index,
  iconURL,
  title,
  description,
  theme,
  themeVariant,
  isLastStep,
}: HowToStepProps) => {
  const isDarkTheme = theme === 'dark';
  const color2 = TextAlternativeColor(theme);
  const textColor = TextColor(theme);
  const { palette } = useTheme();

  const linkColor =
    theme === 'dark'
      ? palette.custom.white
      : themeVariant === 'SEND'
        ? palette.primary.main
        : palette.custom.primaryColorDark;

  return (
    <Stack
      spacing={1}
      component='article'
      sx={{
        maxWidth: '15em',
        minWidth: 'auto',
      }}
    >
      {/** Step with icon */}
      {iconURL && (
        <Stack>
          <Stack spacing={1.2}>
            <HowToStepNum variant='overline' color={color2} stepNum={index} />
            <Stack
              justifyContent='space-between'
              alignItems='center'
              direction='row'
              color={isDarkTheme ? 'white' : undefined}
            >
              <Image src={iconURL} alt='' height={64} width={64} />
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
            component='h3'
            textColor={textColor}
            title={title}
            textAlign='left'
          />

          {/** Step description */}
          <Typography
            component='div'
            variant='body2'
            sx={{
              fontSize: '18px',
              '& a': {
                fontWeight: 700,
                color: linkColor,
                textDecoration: 'underline',
                '&:hover': {
                  color: linkColor,
                },
              },
              '& p': {
                marginBottom: '0px',
                color: textColor,
              },
            }}
          >
            {description}
          </Typography>
        </Stack>
      )}

      {/** Step without icon */}
      {!iconURL && (
        <Stack>
          <HowToStepNum
            variant='h6'
            component='p'
            color={color2}
            stepNum={index}
            marginBottom={12}
          />

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              width: '100%',
              opacity: 1,
              '> svg': { transform: { xs: 'rotate(90deg)', md: 'none' } },
              minHeight: '2em',
            }}
          >
            {!isLastStep && <ArrowIcon color={color2} />}
          </Box>

          <Title
            variant='h6'
            component='h3'
            textColor={textColor}
            title={title}
            textAlign='left'
          />

          <Typography
            component='div'
            variant='body2'
            color={textColor}
            sx={{
              fontSize: '18px',
              '& a': {
                fontWeight: 700,
                color: linkColor,
                textDecoration: 'underline',
                '&:hover': {
                  color: linkColor,
                },
              },
              '& p': {
                marginBottom: '0px',
              },
            }}
          >
            {description}
          </Typography>
        </Stack>
      )}
    </Stack>
  );
};
