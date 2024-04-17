import { useState } from 'react';
import { Grid, MobileStepper, useTheme } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import ContainerRC from '../common/ContainerRC';
import {
  TextColor,
  BackgroundColorAlternative,
} from '../common/Common.helpers';
import { Title } from '../common/Common';
import { FeatureProps } from '../../types/Feature/Feature.types';
import { FeatureStackItem } from './FeatureStackItem';

const Feature = (props: FeatureProps) => {
  const { title, items, theme, showCarouselMobile, background } = props;
  const [activeStep, setActiveStep] = useState(0);
  const themeComponent = useTheme();

  const handleStepChange = (step: number) => {
    setActiveStep(step);
    return step;
  };

  const textColor = TextColor(theme);
  const backgroundColorAlernative = BackgroundColorAlternative(theme);

  return (
    <ContainerRC
      background={background ?? backgroundColorAlernative}
      py={{
        xs: 4,
        sm: 4,
        md: 8,
      }}
    >
      <Grid item xs={12}>
        <Title variant='h4' textColor={textColor} title={title} />
      </Grid>
      <Grid item mt={8} justifyContent='center'>
        <Grid container spacing={{ xs: 6, md: 4 }} justifyContent='center'>
          {items.map((item, index) => (
            <Grid
              md={3}
              item
              display={showCarouselMobile ? { xs: 'none', md: 'block' } : {}}
              key={index}
            >
              <FeatureStackItem theme={theme} item={item} />
            </Grid>
          ))}
          {showCarouselMobile && (
            <Grid item display={{ md: 'none' }}>
              <SwipeableViews
                axis={themeComponent.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
                autoPlay={false}
              >
                {items.map((item, index) => (
                  <FeatureStackItem theme={theme} item={item} key={index} />
                ))}
              </SwipeableViews>
              <MobileStepper
                sx={{
                  my: 2,
                  justifyContent: 'center',
                  bgcolor:
                    theme === 'light' ? 'background.paper' : 'primary.main',
                  '& .MuiMobileStepper-dotActive': {
                    backgroundColor:
                      theme === 'light' ? 'primary.main' : 'background.paper',
                  },
                }}
                variant='dots'
                steps={items.length}
                position='static'
                activeStep={activeStep}
                backButton={undefined}
                nextButton={undefined}
              />
            </Grid>
          )}
        </Grid>
      </Grid>
    </ContainerRC>
  );
};

export default Feature;
