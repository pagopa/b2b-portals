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
  const containerRef = useRef<HTMLDivElement>(null);
  const { palette } = useTheme();
  const [currentCard, setCurrentCard] = useState(cards[0]);
  const liveRegionRef = useRef<HTMLDivElement>();
  const titleId = useId();
  const carouselId = useId();

  const computeSlideVisibility = () =>
    Array.from(document.querySelectorAll<HTMLElement>('.slick-slide')).map(
      (el) => ({
        el,
        isVisible: el.classList.contains('slick-active'),
        link: el.querySelector<HTMLElement>('article a'),
      }),
    );

  const applySlideVisibility = (
    slides: ReturnType<typeof computeSlideVisibility>,
  ) => {
    slides.forEach(({ el, isVisible, link }) => {
      if (isVisible) {
        el.removeAttribute('aria-hidden');
        link?.removeAttribute('tabindex');
      } else {
        el.setAttribute('aria-hidden', 'true');
        link?.setAttribute('tabindex', '-1');
      }
    });
  };

  const syncSlideAccessibility = () => {
    const slides = computeSlideVisibility();
    const activeLink = slides.find((slide) => slide.isVisible)?.link ?? null;
    const active = document.activeElement;
    if (
      activeLink &&
      active !== activeLink &&
      containerRef.current?.contains(active)
    ) {
      // Move focus off the slide that's about to become aria-hidden
      // before applying the attributes below, so focus is never left
      // inside a hidden container. onReInit fires on every slide change
      // (not just mount/resize), so this must run there too.
      activeLink.focus();
    }
    applySlideVisibility(slides);
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
        ref={containerRef}
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
            onReInit={syncSlideAccessibility}
            afterChange={syncSlideAccessibility}
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
