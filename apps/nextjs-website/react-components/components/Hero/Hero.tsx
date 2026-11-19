import React from 'react';
import { Box, Grid, useMediaQuery } from '@mui/material';
import { isJSX } from '../../types/common/Common.types';
import ContainerRC from '../common/ContainerRC';
import { HeroProps } from '../../types/Hero/Hero.types';
import { HeroTextContent, getMinHeight, getOverlay } from './Hero.helpers';
import { resolveThemeVariant } from '../../theme';
import { useTheme } from '@mui/material/styles';

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
    customBgColor,
  } = props;

  const { palette, breakpoints } = useTheme();
  const minHeight = getMinHeight(size);
  const overlay = getOverlay(useHoverlay, theme);
  const ctx = { palette, theme };
  const isLargeScreen = useMediaQuery(breakpoints.between('lg', 'xl'));

  const backgroundColor =
    customBgColor ??
    resolveThemeVariant<string>('sectionBackgroundColor', themeVariant, ctx);

  const BackgroundImage = isJSX(background) ? (
    background
  ) : (
    <Box
      role='presentation'
      sx={{
        position: 'absolute',
        inset: 0,
        zIndex: -10,
        height: '100%',
        width: '100%',
        background: overlay,
      }}
    >
      {background && (
        <img
          alt=''
          src={background.src}
          srcSet={background.srcSet}
          sizes={background.sizes}
          width={0}
          height={0}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      )}
    </Box>
  );

  return (
    <ContainerRC
      size='xl'
      background={!background ? backgroundColor : BackgroundImage}
      direction={inverse ? 'row-reverse' : 'row'}
      {...(sectionID && { sectionID })}
      {...(isLargeScreen &&
        size === 'big' && {
          px: '0',
        })}
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
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: { xs: 'center', lg: inverse ? 'start' : 'end' },
            marginLeft: { xs: '0px', lg: '48px' },
            marginRight: { xs: '0px', lg: '0', xl: '48px' },
          }}
          alignItems='center'
          maxWidth={{
            xs: undefined,
            lg: size === 'big' ? 'none !important' : undefined,
            xl: undefined,
          }}
          flexGrow={{
            xs: undefined,
            lg: size === 'big' ? '1 !important' : undefined,
            xl: undefined,
          }}
        >
          {isJSX(image) ? (
            image
          ) : (
            <img
              alt={image.alt}
              src={image.src}
              srcSet={image.srcSet}
              sizes={image.sizes}
              width={0}
              height={0}
              style={{
                objectFit:
                  isLargeScreen && size === 'big' ? 'cover' : 'contain',
                ...(isLargeScreen &&
                  size === 'big' && { objectPosition: '0% 50%' }),
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
