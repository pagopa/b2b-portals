import { Box, Stack, Typography, useTheme } from '@mui/material';
import { ServiceCarouselProps } from '../../types/ServiceCarousel/ServiceCarousel.types';
import { Body, Title } from '../common/Common';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useId, useRef, useState } from 'react';
import { ServiceCard, SliderArrowControl } from './ServiceCarousel.helpers';
import { visuallyHidden } from '@mui/utils';

const ServiceCarousel = ({
  title,
  eyelet,
  description,
  cards,
  sectionID,
  labels,
  themeVariant,
}: ServiceCarouselProps) => {
  const sliderRef = useRef<Slider>(null);
  const { palette } = useTheme();
  const [currentCard, setCurrentCard] = useState(cards[0]);
  const liveRegionRef = useRef<HTMLDivElement>();
  const titleId = useId();
  const carouselId = useId();

  const resetAttributes = () => {
    const slickList = document.querySelector('.slick-list');
    if (!slickList) return;
    const listRect = slickList.getBoundingClientRect();
    if (listRect.width === 0) return;

    document.querySelectorAll('.slick-slide').forEach((slide) => {
      const el = slide as HTMLElement;
      const slideRect = el.getBoundingClientRect();
      const isVisible =
        !el.classList.contains('slick-cloned') &&
        slideRect.right > listRect.left &&
        slideRect.left < listRect.right;

      if (isVisible && el.getAttribute('aria-hidden') !== null) {
        el.removeAttribute('aria-hidden');
        const link = el.querySelector('article a');
        if (link) link.removeAttribute('tabindex');
      } else if (!isVisible && el.getAttribute('aria-hidden') !== 'true') {
        el.setAttribute('aria-hidden', 'true');
        const link = el.querySelector('article a');
        if (link) link.setAttribute('tabindex', '-1');
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
          id={titleId}
        />

        {description && (
          <Body body={description} textColor={palette.text.primary} />
        )}
      </Stack>

      {/* Cards */}
      <Stack
        gap={{ xs: 3.375, sm: 3.375, md: 4 }}
        width={'100%'}
        sx={{ position: 'relative' }}
      >
        <SliderArrowControl
          direction='left'
          ariaLabel={labels.cardPrevious}
          ariaControls={carouselId}
          action={() => sliderRef.current?.slickPrev()}
          themeVariant={themeVariant}
        />

        <div
          id={carouselId}
          role='region'
          aria-roledescription='carosello'
          aria-labelledby={titleId}
        >
          <Slider
            beforeChange={(_current: number, next: number) => {
              if (liveRegionRef.current) {
                setCurrentCard(cards[next]);
              }
            }}
            onReInit={resetAttributes}
            afterChange={resetAttributes}
            speed={500}
            variableWidth={true}
            infinite={true}
            arrows={false}
            dots={false}
            swipeToSlide={true}
            ref={sliderRef}
          >
            {cards.map((c, index) => (
              <div
                key={`${c.title}_${index}`}
                role='group'
                aria-roledescription='slide'
                aria-label={labels.slideOf(index, cards.length)}
              >
                {ServiceCard(c, themeVariant)}
              </div>
            ))}
          </Slider>
        </div>
        <SliderArrowControl
          direction='right'
          ariaLabel={labels.cardNext}
          ariaControls={carouselId}
          action={() => sliderRef.current?.slickNext()}
          themeVariant={themeVariant}
        />
        <Box ref={liveRegionRef} aria-live='polite' style={visuallyHidden}>
          {currentCard && ServiceCard(currentCard, themeVariant, true)}
        </Box>
      </Stack>
    </Box>
  );
};

export default ServiceCarousel;
