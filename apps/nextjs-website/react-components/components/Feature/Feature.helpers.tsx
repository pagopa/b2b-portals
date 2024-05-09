import React from 'react';
import Slider from 'react-slick';
import { Grid } from '@mui/material';
import { FeatureStackItem } from './FeatureStackItem';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Theme } from '../../types/common/Common.types';
import { FeatureItem } from '../../types/Feature/Feature.types';

interface FeatureCarouselProps {
  items: readonly FeatureItem[];
  activeStep: number;
  handleStepChange: (step: number) => void;
  theme: Theme;
  themeComponentDirection: 'rtl' | 'ltr';
}

const FeatureCarousel = ({
  items,
  activeStep, 
  handleStepChange,
  theme,
  themeComponentDirection,
}: FeatureCarouselProps) => {
  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: activeStep,
    afterChange: (index: number) => handleStepChange(index),
    rtl: themeComponentDirection === 'rtl',
  };

  return (
    <Grid item display={{ md: 'none' }}>
      <Slider {...slickSettings}>
        {items.map((item, index) => (
          <div key={index}>
            <FeatureStackItem theme={theme} item={item} />
          </div>
        ))}
      </Slider>
    </Grid>
  );
};

export default FeatureCarousel;
