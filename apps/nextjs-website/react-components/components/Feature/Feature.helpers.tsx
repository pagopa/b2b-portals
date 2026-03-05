import React from 'react';
import Slider from 'react-slick';
import { alpha, Box, BoxProps, Grid, styled } from '@mui/material';
import { FeatureStackItem } from './FeatureStackItem';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FeatureCarouselProps } from '../../types/Feature/Feature.types';

interface CarouselDotsProps {
  mode: 'light' | 'dark';
}

export const CarouselDots = styled((props: CarouselDotsProps & BoxProps) => (
  <Box {...props} />
))(({ theme, mode }) => ({
  ul: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '.75rem',
    padding: '0',
    margin: '2rem 0 0 0',
    li: {
      width: '.5rem !important',
      height: '.5rem !important',
      margin: '0 !important',
      button: {
        width: '.5rem',
        height: '.5rem',
        borderRadius: '.5rem',
        backgroundColor:
          mode === 'light' ? theme.palette.grey[300] : alpha('#ffffff', 0.5),
        padding: '0',
        '::before': {
          display: 'none',
        },
        '&:focus': {
          outline:
            mode === 'dark'
              ? '#ffffff' + ' !important'
              : theme.palette.custom.blueIO[500] + ' !important',
          outlineOffset: `2px`,
        },
      },
      '&.slick-active button': {
        backgroundColor:
          mode === 'dark'
            ? '#ffffff' + ' !important'
            : theme.palette.custom.blueIO[500] + ' !important',
      },
    },
  },
}));

const FeatureCarousel = ({
  items,
  activeStep,
  handleStepChange,
  theme,
  themeVariant,
  themeComponentDirection,
  labels,
}: FeatureCarouselProps) => {
  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    component: 'ul',
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: activeStep,
    afterChange: (index?: number) => handleStepChange(index),
    rtl: themeComponentDirection === 'rtl',
    style: {
      listStyle: 'none',
    },
  };

  return (
    <Grid item display={{ md: 'none' }} sx={{ width: '100%' }}>
      <Slider
        {...slickSettings}
        role='region'
        aria-roledescription='carousel'
        appendDots={(dots) => (
          <Box aria-label={labels.pagination} role='navigation'>
            <CarouselDots mode={theme}>
              <ul>{dots}</ul>
            </CarouselDots>
          </Box>
        )}
        customPaging={(index: number) => (
          <button type='button' aria-label={labels.goToSlide(index)} />
        )}
      >
        {items.map((item, index) => (
          <div
            key={`${index}`}
            role='list'
            aria-roledescription='slide'
            aria-label={labels.slideOf(index, items.length)}
          >
            <div role='listitem'>
              <FeatureStackItem
                theme={theme}
                item={item}
                themeVariant={themeVariant}
              />
            </div>
          </div>
        ))}
      </Slider>
    </Grid>
  );
};

export default FeatureCarousel;
