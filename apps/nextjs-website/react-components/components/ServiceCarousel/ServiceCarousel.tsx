import { Box, Stack, Typography, useTheme } from '@mui/material';
import { ServiceCarouselProps } from '../../types/ServiceCarousel/ServiceCarousel.types';
import { Body, Title } from '../common/Common';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef, useState } from 'react';
import {
  CarouselDots,
  ServiceCard,
  SliderArrowControl,
} from './ServiceCarousel.helpers';
import { visuallyHidden } from '@mui/utils';

const ServiceCarousel = ({
  title,
  eyelet,
  description,
  cards,
  sectionID,
  labels,
}: ServiceCarouselProps) => {
  let sliderRef = useRef<Slider>();
  const { palette } = useTheme();
  const [currentCard, setCurrentCard] = useState(cards[0]);
  const liveRegionRef = useRef<HTMLDivElement>();

  const resetAttributes = () => {
    const slides = document.querySelectorAll('.slick-slide');

    slides.forEach((slide) => {
      const element = slide as HTMLElement;

      if (element.classList.contains('slick-active')) {
        element.removeAttribute('aria-hidden');
        const link = element.querySelector('article a');
        if (link) {
          link.removeAttribute('tabindex');
        }
      } else {
        element.setAttribute('aria-hidden', 'true');
        const link = element.querySelector('article a');
        if (link) {
          link.setAttribute('tabindex', '-1');
        }
      }
    });
  };

  return (
    <Box
      py={{ xs: 3, sm: 3, md: 6 }}
      ml={{ xs: 3, sm: 3, md: 17.75 }}
      overflow='hidden'
      component='section'
      {...(sectionID && { id: sectionID })}
      tabIndex={0}
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
          component='h2'
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
            ariaLabel={labels.cardPrevious}
            action={() => sliderRef.current?.slickPrev()}
          />
          <SliderArrowControl
            direction='right'
            ariaLabel={labels.cardNext}
            action={() => sliderRef.current?.slickNext()}
          />
        </Stack>

        <Slider
          role='region'
          aria-roledescription='carousel'
          beforeChange={(_current: number, next: number): void => {
            if (liveRegionRef.current) {
              setCurrentCard(cards[next]);
            }
          }}
          onInit={resetAttributes}
          afterChange={resetAttributes}
          speed={500}
          variableWidth={true}
          infinite={true}
          arrows={false}
          dots={true}
          swipeToSlide={true}
          // @ts-ignore Legacy use of ref
          ref={sliderRef}
          appendDots={(dots) => (
            <Box
              aria-label={labels.pagination}
              role='navigation'
              sx={{ position: 'static !important' }}
            >
              <CarouselDots>
                <ul>{dots}</ul>
              </CarouselDots>
            </Box>
          )}
          customPaging={(index: number) => (
            <button type='button' aria-label={labels.goToSlide(index)} />
          )}
        >
          {cards.map((c, index) => (
            <div
              key={`${c.title}_${index}`}
              role='list'
              aria-roledescription='slide'
              aria-label={labels.slideOf(index, cards.length)}
            >
              <div role='listitem'>{ServiceCard(c)}</div>
            </div>
          ))}
        </Slider>

        <Box ref={liveRegionRef} aria-live='polite' style={visuallyHidden}>
          {currentCard && ServiceCard(currentCard, true)}
        </Box>
      </Stack>
    </Box>
  );
};

export default ServiceCarousel;
