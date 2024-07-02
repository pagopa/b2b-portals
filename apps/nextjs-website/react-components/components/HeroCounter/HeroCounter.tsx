import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { isJSX } from '../../types/common/Common.types';
import ContainerRC from '../common/ContainerRC';
import { HeroCounterProps } from '@react-components/types/HeroCounter/HeroCounter.types';
import { BackgroundColor, TextColor } from '../common/Common.helpers';
import { HeroCounterTextContent } from './HeroCounter.helpers';

const HeroCounter = (props: HeroCounterProps) => {
  const {
    inverse = false,
    background,
    theme = 'dark',
    counterNumber = 0,
    counterText,
  } = props;

  const backgroundColor = BackgroundColor(theme);
  const textColor = TextColor(theme);

  const BackgroundImage = isJSX(background) ? (
    background
  ) : (
    <Box
      role='presentation'
      sx={{
        px: { xs: 4 },
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
      direction={inverse ? 'row-reverse' : 'row'}
    >
      <Grid item lg={1} sx={{ display: { xs: 'none', lg: 'block' } }} />
      <Grid
        item
        lg={4}
        sx={{ minHeight: '480px', width: '100%' }}
      >
        <HeroCounterTextContent {...props} />
      </Grid>
      <Grid
        item
        lg={6}
        mb={{ xs: 4, lg: 0 }}
        sx={{
          width: '100%',
          display: 'grid',
          flexDirection: 'initial',
          alignItems: 'start',
          justifyContent: 'end',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'start',
            paddingTop: '1rem',
            paddingBottom: '1rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'start',
            }}
          >
            <Typography color={textColor} sx={{ fontSize: '8rem' }}>
              {counterNumber}
            </Typography>
            <Typography variant='body1' color={textColor}>
              {counterText}
            </Typography>
          </div>
        </div>
      </Grid>
      <Grid item lg={1} sx={{ display: { xs: 'none', lg: 'block' } }} />
    </ContainerRC>
  );
};

export default HeroCounter;
