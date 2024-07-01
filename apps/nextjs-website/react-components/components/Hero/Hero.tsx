import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { isJSX } from '../../types/common/Common.types';
import ContainerRC from '../common/ContainerRC';
import { HeroProps } from '../../types/Hero/Hero.types';
import { BackgroundColor, TextColor } from '../common/Common.helpers';
import { HeroTextContent, getMinHeight, getOverlay } from './Hero.helpers';

const Hero = (props: HeroProps) => {
  const {
    size,
    inverse = false,
    background,
    theme = 'dark',
    useHoverlay = true,
    image,
    altText = '',
    displayMode = 'image',
    counterNumber = 0,
    counterText,
  } = props;

  const minHeight = getMinHeight(size);
  const overlay = getOverlay(useHoverlay, theme);
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
        backgroundImage: `${overlay}url(${background ?? ''})`,
      }}
    />
  );

  return (
    <ContainerRC
      size='xl'
      background={!background ? backgroundColor : BackgroundImage}
      direction={inverse ? 'row-reverse' : 'row'}
    >
      {(size === 'medium' || size === 'big') && (
        <Grid item lg={1} sx={{ display: { xs: 'none', lg: 'block' } }} />
      )}
      <Grid
        item
        lg={size === 'small' ? 12 : 4}
        sx={{ minHeight: { lg: minHeight }, width: '100%' }}
      >
        <HeroTextContent {...props} />
      </Grid>
      {(size === 'medium' || size === 'big') && (
        <Grid
          item
          lg={6}
          mb={{ xs: 4, lg: 0 }}
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: displayMode === 'counter' ? 'end' : 'center',
            justifyContent: 'center',
            bgcolor: 'green',
          }}
        >
          {displayMode === 'image' && image ? (
            isJSX(image) ? (
              image
            ) : (
              <Image
                alt={altText}
                src={image}
                width={0}
                height={0}
                style={{
                  objectFit: 'contain',
                  width: '80%',
                  height: '80%',
                  maxHeight: minHeight,
                  userSelect: 'none',
                }}
              />
            )
          ) : displayMode === 'counter' ? (
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'start',
                backgroundColor: 'gray',
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
                  backgroundColor: 'red',
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
          ) : null}
        </Grid>
      )}
      {(size === 'medium' || size === 'big') && (
        <Grid item lg={1} sx={{ display: { xs: 'none', lg: 'block' } }} />
      )}
    </ContainerRC>
  );
};

export default Hero;
