'use client';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';
import { ServiceCarouselSection } from '@/lib/fetch/types/PageSection';
import { ServiceCarousel as ServiceCarouselRC } from '@react-components/components';
import { LocalizeURL } from '@/lib/linkLocalization';
import { ServiceCarouselProps } from '@react-components/types';
import { createI18n } from '@/lib/i18n';

const makeServiceCarouselProps = ({
  locale,
  defaultLocale,
  eyelet,
  description,
  cards,
  ...rest
}: ServiceCarouselSection & SiteWidePageData): ServiceCarouselProps => {
  const translate = createI18n(locale, defaultLocale, {
    it: {
      translation: {
        pagination: 'Paginazione carosello',
        goToSlide: (index) => `Vai alla slide ${index}`,
        slideOf: (index, total) => `Slide ${index} di ${total}`,
        cardPrevious: 'Card precedente',
        cardNext: 'Card successiva',
      },
    },
    en: {
      translation: {
        pagination: 'Karussell-Seitennummerierung',
        goToSlide: (index) => `Go to slide ${index}`,
        slideOf: (index, total) => `Slide ${index} of ${total}`,
        cardPrevious: 'Previous card',
        cardNext: 'Next card',
      },
    },
    de: {
      translation: {
        pagination: 'Paginazione carosello',
        goToSlide: (index) => `Weiter zu Folie ${index}`,
        slideOf: (index, total) => `Folie ${index} von ${total}`,
        cardPrevious: 'vorherige Karte',
        cardNext: 'nächste Karte',
      },
    },
    fr: {
      translation: {
        pagination: 'Pagination du carrousel',
        goToSlide: (index) => `Passez à la diapositive ${index}`,
        slideOf: (index, total) => `Diapositive ${index} sur ${total}`,
        cardPrevious: 'carte précédente',
        cardNext: 'carte suivante',
      },
    },
    sl: {
      translation: {
        pagination: 'Vrtiljak straničenja',
        goToSlide: (index) => `pojdi na diapozitiv ${index}`,
        slideOf: (index, total) => `Diapozitiv ${index} od ${total}`,
        cardPrevious: 'prejšnja kartica',
        cardNext: 'naslednja karta',
      },
    },
  });

  return {
    ...rest,
    ...(eyelet && { eyelet }),
    ...(description && { description }),
    labels: {
      cardNext: translate('cardNext'),
      cardPrevious: translate('cardPrevious'),
      pagination: translate('pagination'),
    },
    cards: cards.map((card, index) => ({
      title: card.title,
      labels: {
        slideOf: translate('slideOf', index + 1, cards.length),
        goToSlide: translate('goToSlide', index + 1),
      },
      link: {
        label: card.link.label,
        href: LocalizeURL({ URL: card.link.href, locale, defaultLocale }),
      },
      ...(card.description && { description: card.description }),
      ...(card.image && {
        image: {
          url: card.image.url,
          ...(card.image.alternativeText && {
            alternativeText: card.image.alternativeText,
          }),
        },
      }),
    })),
  };
};

const ServiceCarousel = (props: ServiceCarouselSection & SiteWidePageData) => (
  <ServiceCarouselRC {...makeServiceCarouselProps(props)} />
);

export default ServiceCarousel;
