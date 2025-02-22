import React, { useState } from 'react';
import { Grid, useTheme } from '@mui/material';
import ContainerRC from '../common/ContainerRC';
import {
  TextColor,
  SendBackgroundColorAlternativeGrey,
  IoBackgroundColorAlternativeGrey,
} from '../common/Common.helpers';
import { Title } from '../common/Common';
import { FeatureProps } from '../../types/Feature/Feature.types';
import { FeatureStackItem } from './FeatureStackItem';
import FeatureCarousel from './Feature.helpers';

const Feature = ({
  title,
  items,
  theme,
  themeVariant,
  showCarouselMobile,
  background,
  sectionID,
}: FeatureProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const muiTheme = useTheme();

  const handleStepChange = (step?: number) => {
    if (step) {
      setActiveStep(step);
    }
    return step;
  };

  const textColor = TextColor(theme);

  const backgroundColorAlernative =
    themeVariant === 'SEND'
      ? SendBackgroundColorAlternativeGrey(theme)
      : IoBackgroundColorAlternativeGrey(theme);

  return (
    <ContainerRC
      background={background ?? backgroundColorAlernative}
      py={{ xs: 4, sm: 4, md: 8 }}
      {...(sectionID && { sectionID })}
    >
      <Grid item xs={12}>
        <Title variant='h4' textColor={textColor} title={title} />
      </Grid>
      <Grid item mt={8} justifyContent='center' sx={{ width: '100%' }}>
        <Grid container spacing={{ xs: 6, md: 4 }} justifyContent='center'>
          {items.map((item, index) => (
            <Grid
              md={3}
              item
              display={showCarouselMobile ? { xs: 'none', md: 'block' } : {}}
              key={index}
            >
              <FeatureStackItem
                theme={theme}
                item={item}
                themeVariant={themeVariant}
              />
            </Grid>
          ))}
          {showCarouselMobile && (
            <FeatureCarousel
              items={items}
              activeStep={activeStep}
              handleStepChange={handleStepChange}
              theme={theme}
              themeVariant={themeVariant}
              themeComponentDirection={
                muiTheme.direction === 'rtl' ? 'rtl' : 'ltr'
              }
            />
          )}
        </Grid>
      </Grid>
    </ContainerRC>
  );
};

export default Feature;
