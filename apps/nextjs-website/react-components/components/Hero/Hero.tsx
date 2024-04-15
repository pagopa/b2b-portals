import React from 'react';
import { Box, Stack, Grid } from '@mui/material';
import Image from 'next/image';
import { isJSX } from '../../types/common/Common.types';
import ContainerRC from '../common/ContainerRC';
import { HeroProps, HeroTextProps } from '../../types/Hero/Hero.types';
import {
  Title,
  Subtitle,
  CtaButtons,
} from '../common/Common';
import { BackgroundColor, TextColor } from '../common/Common.helpers';
import { getMinHeight, getOverlay } from './Hero.helpers';

const HeroTextContent = ({
  title,
  subtitle,
  ctaButtons,
  theme,
  size,
}: HeroTextProps) => {
  const textColor = TextColor(theme);

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
          <Title
            variant='h1'
            textColor={textColor}
            title={title}
            textAlign='left'
            marginBottom={size === 'small' ? 0 : 2}
          />
          <Subtitle
            variant='body2'
            textColor={textColor}
            subtitle={subtitle}
            textAlign='left'
          />
        </>
      </Box>
      {ctaButtons?.length ? (
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={2}
          mb={{ xs: 8, lg: 0 }}
        >
          {CtaButtons({
            ctaButtons: ctaButtons.map((button) => ({
              ...button,
              sx: { width: { md: 'auto', xs: '100%' } },
            })),
            theme,
          })}
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
    </ContainerRC>
  );
};

export default Hero;
