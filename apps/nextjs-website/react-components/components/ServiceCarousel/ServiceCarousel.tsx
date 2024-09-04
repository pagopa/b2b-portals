import { Box, Stack, Typography, useTheme } from '@mui/material';
import { ServiceCarouselProps } from '../../types/ServiceCarousel/ServiceCarousel.types';
import { Body, Title } from '../common/Common';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef } from 'react';
import {
  CarouselDots,
  ServiceCard,
  SliderArrowControl,
} from './ServiceCarousel.helpers';

const ServiceCarousel = ({
  title,
  eyelet,
  description,
  cards,
}: ServiceCarouselProps) => {
  let sliderRef = useRef<Slider>();
  const { palette } = useTheme();

  return (
    <Box
      py={{ xs: 3, sm: 3, md: 6 }}
      ml={{ xs: 3, sm: 3, md: 17.75 }}
      overflow='hidden'
    >
      {/* Text Content */}
      <Stack
        gap={2}
        maxWidth={448}
        mb={{ xs: 3.375, sm: 3.375, md: 4 }}
        mr={{ xs: 3, sm: 3, md: 0 }}
      >
        {eyelet && (
          <Typography variant='overline' color={palette.text.secondary}>
            {eyelet}
          </Typography>
        )}

        <Title
          title={title}
          textColor={palette.text.primary}
          variant='h4'
          textAlign='left'
        />

        {description && (
          <Body body={description} textColor={palette.text.primary} />
        )}
      </Stack>

      {/* Cards */}
      <Stack gap={{ xs: 3.375, sm: 3.375, md: 4 }} width={'100%'}>
        <Stack
          flexDirection='row'
          alignItems='center'
          justifyContent='flex-start'
          gap={2}
          display={{ xs: 'none', sm: 'none', md: 'flex' }}
        >
          <SliderArrowControl
            direction='left'
            action={() => sliderRef.current?.slickPrev()}
          />
          <SliderArrowControl
            direction='right'
            action={() => sliderRef.current?.slickNext()}
          />
        </Stack>

        <Slider
          speed={500}
          variableWidth={true}
          infinite={false}
          arrows={false}
          dots={true}
          swipeToSlide={true}
          // @ts-ignore Legacy use of ref
          ref={sliderRef}
          appendDots={(dots) => (
            <CarouselDots>
              <ul>{dots}</ul>
            </CarouselDots>
          )}
        >
          {cards.map(ServiceCard)}
        </Slider>
      </Stack>
    </Box>
  );
};

export default ServiceCarousel;
