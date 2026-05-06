import React, { useState } from 'react';
import { Grid, useTheme } from '@mui/material';
import ContainerRC from '../common/ContainerRC';
import { TextColor } from '../common/Common.helpers';
import { Title } from '../common/Common';
import { FeatureProps } from '../../types/Feature/Feature.types';
import { FeatureStackItem } from './FeatureStackItem';
import FeatureCarousel from './Feature.helpers';
import {
  resolveByThemeVariant,
  variantSectionBackgroundAlternativeGreyMap,
} from '../../theme';

const Feature = ({
  title,
  items,
  theme,
  themeVariant,
  showCarouselMobile,
  background,
  sectionID,
  labels,
}: FeatureProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const muiTheme = useTheme();
  const { palette } = muiTheme;
  const ctx = { palette, theme };

  const handleStepChange = (step?: number) => {
    if (step !== undefined) {
      setActiveStep(step);
    }
    return step;
  };

  const textColor = TextColor(theme);

  const backgroundColorAlternative = resolveByThemeVariant(
    variantSectionBackgroundAlternativeGreyMap,
    themeVariant,
    ctx,
  );

  return (
    <ContainerRC
      background={background ?? backgroundColorAlternative}
      py={{ xs: 4, sm: 4, md: 8 }}
      {...(sectionID && { sectionID })}
    >
      <Grid item xs={12}>
        <Title
          variant='h4'
          component='h2'
          textColor={textColor}
          title={title}
        />
      </Grid>
      <Grid item mt={8} justifyContent='center' sx={{ width: '100%' }}>
        <Grid
          component='ul'
          container
          spacing={{ xs: 6, md: 4 }}
          justifyContent='center'
          sx={{
            padding: 0,
            listStyle: 'none',
            '& > li': {
              padding: 0,
            },
          }}
        >
          {items.map((item, index) => (
            <Grid
              md={3}
              item
              component='li'
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
        </Grid>
        {showCarouselMobile && (
          <FeatureCarousel
            labels={labels}
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
    </ContainerRC>
  );
};

export default Feature;
