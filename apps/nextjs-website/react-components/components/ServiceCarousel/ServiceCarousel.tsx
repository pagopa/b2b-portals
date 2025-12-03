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
import { visuallyHidden } from '@mui/utils';

const ServiceCarousel = ({
  title,
  eyelet,
  description,
  cards,
  sectionID,
}: ServiceCarouselProps) => {
  let sliderRef = useRef<Slider>();
  const { palette } = useTheme();

  /* --- ref che punta all'elemento usato per stabilire allo screen reader quale slide corrente stiamo visualizzando */
  const liveRegionRef = useRef<HTMLDivElement | null>(null);

  /* --- la funzione resetAttributes è un'accortezza aggiuntiva. Poiché usiamo il parametro infinite
  Slick genera slide nascoste che servono a fare un passaggio seamless tra l'ultima e la prima diapositiva e viceversa.
  Detto ciò si impostano in maniera selettiva tabIndex e aria-hidden, soprattutto per tabIndex
  che fa sì che si eviti di avere focus su elementi nascosti.
  Vengono quindi tolte tutte le possibilità avere focus sulle slide "clonate".
  Lo screen reader legge di conseguenza  tutte le slide "vere", comprese quelle al di fuori del campo visivo.
  Ai fini dell'accessibilità questo ha senso in quanto l'ipovedente può scorrere tutte le slide senza aver bisogno
  di fare il "click" sul pulsante avanti / indietro delle slide.
  */
  const resetAttributes = () => {
    const slides = document.querySelectorAll('.slick-slide');

    slides.forEach((slide) => {
      const element = slide as HTMLElement;

      if (element.classList.contains('slick-cloned')) {
        element.setAttribute('aria-hidden', 'true');
        const article = element.querySelector('article');
        if (article) {
          article.setAttribute('tabindex', '-1');
          const link = article.querySelector('a');
          if (link) {
            link.setAttribute('tabindex', '-1');
          }
        }
      } else {
        element.removeAttribute('aria-hidden');
        const article = element.querySelector('article');
        if (article) {
          article.setAttribute('tabindex', '0');
          const link = article.querySelector('a');
          if (link) {
            link.removeAttribute('tabindex');
          }
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
            action={() => sliderRef.current?.slickPrev()}
          />
          <SliderArrowControl
            direction='right'
            action={() => sliderRef.current?.slickNext()}
          />
        </Stack>

        {/* --- allo Slider viene aggiunto il role region e la descrizione del role per lo screen reader.
        inoltre, beforeChange permetterebbe una ottimizzazione per
        lo screen reader che farà capire quale slide stiamo visualizzando ora */}
        <Slider
          role='region'
          aria-roledescription='carousel'
          beforeChange={(_current: number, next: number): void => {
            if (liveRegionRef.current) {
              liveRegionRef.current.textContent = `Slide ${next + 1} di ${cards.length}`;
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
            <div aria-label='paginazione carosello' role='navigation'>
              <CarouselDots>
                <ul>{dots}</ul>
              </CarouselDots>
            </div>
          )}
          customPaging={(_: any, index: number) => (
            <button type='button' aria-label={`Vai alla slide ${index + 1}`} />
          )}
        >
          {/* --- Parte modificata affinché vengano correttamente gestiti i role */}
          {cards.map((c, index) => (
            <div
              key={`${c.title}_${index}`}
              role='list'
              aria-roledescription='slide'
              aria-label={`Slide ${index + 1} di ${cards.length}`}
            >
              <div role='listitem'>{ServiceCard(c)}</div>
            </div>
          ))}
        </Slider>

        {/* --- "contenitore" per screen reader sulla slide corrente */}
        <Box
          ref={liveRegionRef}
          aria-live='polite'
          style={visuallyHidden}
        ></Box>
      </Stack>
    </Box>
  );
};

export default ServiceCarousel;
