import React from 'react';
import { Box, Typography } from '@mui/material';
import ContainerRC from '../common/ContainerRC';
import { BackgroundColor, TextColor } from '../common/Common.helpers';
import { HeroChipsProps } from '@react-components/types/HeroChips/HeroChips.types';
import { ChipsBlock } from './HeroChips.helpers';

const HeroChips = (props: HeroChipsProps) => {
  const {
    background,
    theme = 'dark',
    title,
    subtitle,
    chips,
    centerText,
    sectionID,
  } = props;

  const backgroundColor = BackgroundColor(theme);

  const textColor = TextColor(theme);

  const BackgroundImage = (
    <Box
      role='presentation'
      sx={{
        px: 4,
        position: 'absolute',
        inset: 0,
        zIndex: -10,
        height: '100%',
        width: '100%',
        objectFit: 'cover',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${background ?? ''})`,
      }}
    />
  );

  return (
    <ContainerRC
      size='xl'
      background={!background ? backgroundColor : BackgroundImage}
      direction='row'
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
        alignItems: centerText ? 'center' : 'flex-start',
        justifyContent: 'space-between',
        py: 4,
      }}
      {...(sectionID && { sectionID })}
    >
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: centerText ? 'center' : 'flex-start',
        }}
      >
        <Typography
          variant='h1'
          color={textColor}
          mb={2}
          sx={{ fontSize: { xs: '2.25rem!important', md: '3.5rem!important' } }}
          textAlign={centerText ? 'center' : 'left'}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography
            variant='body1'
            color={textColor}
            mb={2}
            sx={{ fontSize: '1rem' }}
            textAlign={centerText ? 'center' : 'left'}
          >
            {subtitle}
          </Typography>
        )}
        {chips.length > 0 && <ChipsBlock chips={chips} theme={theme} />}
      </Box>
    </ContainerRC>
  );
};

export default HeroChips;
