import React from 'react';
import { Box, Stack, Grid } from '@mui/material';
import Image from 'next/image';
import { isJSX } from '../../utils';
import EContainer from '../EContainer';
import { HeroProps, HeroTextProps } from '../../utils/Components.types';
import {
  RenderHeroTitle,
  RenderSubtitle,
  RenderButtons,
  getMinHeight,
  getOverlay,
  useBackgroundColor,
  useTextColor,
} from '../../utils/Components.helpers';

const HeroTextContent = ({
  title,
  subtitle,
  ctaButtons,
  theme,
  size,
}: HeroTextProps) => {
  const textColor = useTextColor(theme);

  return (
    <Stack
      justifyContent={size === 'small' ? 'center' : { md: 'center' }}
      alignItems={size === 'small' ? 'center' : 'inherit'}
      sx={{ minHeight: 'inherit' }}
      mt={{ xs: 9, lg: 0 }}
      component='section'
    >
      <Box mb={size === 'small' ? 0 : { xs: 6, md: 4 }}>
        <>
          {RenderHeroTitle({ title, textColor, size })}
          {RenderSubtitle({ subtitle, textColor })}
        </>
      </Box>
      {ctaButtons?.length ? (
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={2}
          mb={{ xs: 8, lg: 0 }}
        >
          {RenderButtons({ ctaButtons, theme })}
        </Stack>
      ) : null}
    </Stack>
  );
};

const Hero = (props: HeroProps) => {
  const {
    size,
    inverse = false,
    background,
    theme = 'dark',
    useHoverlay = true,
    image,
    altText = '',
  } = props;

  const minHeight = getMinHeight(size);
  const overlay = getOverlay(useHoverlay, theme);
  const backgroundColor = useBackgroundColor(theme);

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
    <EContainer
      background={!background ? backgroundColor : BackgroundImage}
      direction={inverse ? 'row-reverse' : 'row'}
    >
      {(size === 'medium' || size === 'big') && (
        <Grid item lg={1} sx={{ display: { xs: 'none', lg: 'block' } }} />
      )}
      <Grid
        item
        lg={size === 'small' ? 12 : 3}
        sx={{ minHeight: { lg: minHeight } }}
      >
        <HeroTextContent {...props} />
      </Grid>
      {(size === 'medium' || size === 'big') && (
        <Grid item lg={1} sx={{ display: { xs: 'none', lg: 'block' } }} />
      )}
      {(size === 'medium' || size === 'big') && image && (
        <Grid
          item
          lg={6}
          mb={{ xs: 4, lg: 0 }}
          component='figure'
          sx={{ width: '100%' }}
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
                objectPosition: 'center',
                width: '100%',
                height: '100%',
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
    </EContainer>
  );
};

export default Hero;
