import { Box, Stack, Typography, useTheme } from '@mui/material';
import { ServiceCarouselProps } from '../../types/ServiceCarousel/ServiceCarousel.types';
import { Body, Title } from '../common/Common';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CSSProperties, useRef } from 'react';
import {
  CarouselDots,
  ServiceCard,
  SliderArrowControl,
} from './ServiceCarousel.helpers';
//import { useKeenSlider } from 'keen-slider/react';
//import 'keen-slider/keen-slider.min.css';

/* 
  --- Alternative per il corretto funzionamento dello Slick Slider e altra proposta di usare Keen Slider.
  Nota: Keen Slider deve essere installato:
    npm install keen-slider
  produce circa 50 criticità durante l'installazione per via delle versioni npm, react e altro.

  In entrambi i casi, è stato fatto un ritocco a ServiceCard, vedasi anche tale funzione.
*/

const ServiceCarousel = ({
  title,
  eyelet,
  description,
  cards,
  sectionID,
}: ServiceCarouselProps) => {
  let sliderRef = useRef<Slider>();
  const { palette } = useTheme();

  /* --- hook per keen slider e definizione parametri */
  /*
  const [keenRef] = useKeenSlider<HTMLUListElement>({
    loop: true, // è identico a "infinite" di Slick ma sembra essere buggato
    mode: 'snap', // definisce la modalità di aggancio dello slide mentre scrolla. C'è anche il free mode volendo.
    slides: {
      // 'auto' si basa sulla larghezza specifica di ogni slide anziché usare numeri per definire quante slide far vedere
      perView: 'auto',
    },
  });
  */

  /* --- stile CSS per Screen Reader only */
  const srOnly: CSSProperties = {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: 0,
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    border: 0,
  };

  /* --- ref che punta all'elemento usato per stabilire allo screen reader quale slide corrente stiamo visualizzando */
  const liveRegionRef = useRef<HTMLDivElement | null>(null);

  /* --- la funzione resetAttributes è un'accortezza aggiuntiva. Poiché usiamo il parametro infinite
  Slick genera slide nascoste che servono a fare un passaggio seamless tra l'ultima e la prima diapositiva e viceversa.
  Detto ciò si impostano in maniera  tabIndex e aria-hidden, soprattutto per tabIndex
  che fa sì che si eviti di avere focus su elementi nascosti.
  Questo va preso come esempio perché il parametro "infinite" è problematico in quanto Slick appunto
  clona slide ai lati del carosello. Difatti dovremmo anche togliere il focusable ai pulsanti CTA.
  Bisogna valutare di poter disattivare l'infinite.
  */
  const resetAttributes = () => {
    const slides = document.querySelectorAll('.slick-slide');

    slides.forEach((slide) => {
      const element = slide as HTMLElement;

      if (element.classList.contains('slick-active')) {
        element.removeAttribute('aria-hidden');
        const article = element.querySelector('article');
        console.log('0', article);
        if (article) {
          article.setAttribute('tabindex', '0');
        }
      } else {
        element.setAttribute('aria-hidden', 'true');
        const article = element.querySelector('article');
        console.log('-', article);
        if (article) {
          article.removeAttribute('tabindex');
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
            <CarouselDots>
              <ul>{dots}</ul>
            </CarouselDots>
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
        <div ref={liveRegionRef} aria-live='polite' style={srOnly}></div>

        {/* --- Questo che segue è keen slider, l'alternativa allo Slick. */}
        {/*
        <Box component={'ul'} className='keen-slider' ref={keenRef} p={0} m={0}>
          {cards.map((card) => (
            <li
              className='keen-slider__slide'
              style={{ width: 'fit-content !important' }}
            >
              {ServiceCard(card)}
            </li>
          ))}
        </Box>
        */}
      </Stack>
    </Box>
  );
};

export default ServiceCarousel;
