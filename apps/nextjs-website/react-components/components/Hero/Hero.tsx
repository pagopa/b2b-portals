import React from 'react';
import { Box, Grid } from '@mui/material';
import Image from 'next/image';
import { isJSX } from '../../types/common/Common.types';
import ContainerRC from '../common/ContainerRC';
import { HeroProps } from '../../types/Hero/Hero.types';
import { BackgroundColor } from '../common/Common.helpers';
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
    sectionID,
  } = props;

  const minHeight = getMinHeight(size);
  const overlay = getOverlay(useHoverlay, theme);
  const backgroundColor = BackgroundColor(theme);

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
      {...(sectionID && { sectionID })}
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
      {(size === 'medium' || size === 'big') && image && (
        <Grid
          item
          lg={6}
          mb={{ xs: 4, lg: 0 }}
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: { xs: 'center', lg: inverse ? 'start' : 'end' },
          }}
          alignItems='center'
        >
          {isJSX(image) ? (
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
          )}
        </Grid>
      )}
      {(size === 'medium' || size === 'big') && (
        <Grid item lg={1} sx={{ display: { xs: 'none', lg: 'block' } }} />
      )}
    </ContainerRC>
  );
};

export default Hero;
