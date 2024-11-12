import React from 'react';
import { Box, Grid } from '@mui/material';
import { isJSX } from '../../types/common/Common.types';
import ContainerRC from '../common/ContainerRC';
import { HeroProps } from '../../types/Hero/Hero.types';
import {
  SendBackgroundColor,
  IoBackgroundColor,
} from '../common/Common.helpers';
import { HeroTextContent, getMinHeight, getOverlay } from './Hero.helpers';

const Hero = (props: HeroProps) => {
  const {
    size,
    inverse = false,
    background,
    theme = 'dark',
    themeVariant,
    useHoverlay = true,
    image,
    sectionID,
  } = props;

  const minHeight = getMinHeight(size);
  const overlay = getOverlay(useHoverlay, theme);
  const backgroundColor =
    themeVariant === 'SEND'
      ? SendBackgroundColor(theme)
      : IoBackgroundColor(theme);

  const BackgroundImage = isJSX(background) ? (
    background
  ) : (
    <Box
      role="presentation"
      sx={{
        position: 'absolute',
        inset: 0,
        zIndex: -10,
        height: '100%',
        width: '100%',
        background: overlay,
      }}
    >
      {background &&
        <img
          src={background.src}
          srcSet={background.srcSet}
          width={0}
          height={0}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      }
    </Box>
  );

  return (
    <ContainerRC
      size="xl"
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
          alignItems="center"
        >
          {isJSX(image) ? (
            image
          ) : (
            <img
              alt={image.alt}
              src={image.src}
              srcSet={image.srcSet}
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
