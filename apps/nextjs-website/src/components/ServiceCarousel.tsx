'use client';
import { Locale, SiteWidePageData } from '@/lib/fetch/siteWideSEO';
import { ServiceCarouselSection } from '@/lib/fetch/types/PageSection';
import { ServiceCarousel as ServiceCarouselRC } from '@react-components/components';
import { LocalizeURL } from '@/lib/linkLocalization';
import { ServiceCarouselProps } from '@react-components/types';

const serviceCarouselLabels: Record<Locale, ServiceCarouselProps['labels']> = {
  it: {
    pagination: 'Paginazione carosello',
    goToSlide: (index) => `Vai alla slide ${index + 1}`,
    slideOf: (index, total) => `Slide ${index + 1} di ${total}`,
    cardPrevious: 'Card precedente',
    cardNext: 'Card successiva',
  },
  en: {
    pagination: 'Karussell-Seitennummerierung',
    goToSlide: (index) => `Go to slide ${index + 1}`,
    slideOf: (index, total) => `Slide ${index + 1} of ${total}`,
    cardPrevious: 'Previous card',
    cardNext: 'Next card',
  },
  de: {
    pagination: 'Paginazione carosello',
    goToSlide: (index) => `Weiter zu Folie ${index + 1}`,
    slideOf: (index, total) => `Folie ${index + 1} von ${total}`,
    cardPrevious: 'vorherige Karte',
    cardNext: 'nächste Karte',
  },
  fr: {
    pagination: 'Pagination du carrousel',
    goToSlide: (index) => `Passez à la diapositive ${index + 1}`,
    slideOf: (index, total) => `Diapositive ${index + 1} sur ${total}`,
    cardPrevious: 'carte précédente',
    cardNext: 'carte suivante',
  },
  sl: {
    pagination: 'Vrtiljak straničenja',
    goToSlide: (index) => `pojdi na diapozitiv ${index + 1}`,
    slideOf: (index, total) => `Diapozitiv ${index + 1} od ${total}`,
    cardPrevious: 'prejšnja kartica',
    cardNext: 'naslednja karta',
  },
};

const makeServiceCarouselProps = ({
  locale,
  defaultLocale,
  eyelet,
  description,
  cards,
  ...rest
}: ServiceCarouselSection & SiteWidePageData): ServiceCarouselProps => ({
  ...rest,
  ...(eyelet && { eyelet }),
  ...(description && { description }),
  labels: serviceCarouselLabels[locale],
  cards: cards.map((card) => ({
    title: card.title,
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
});

const ServiceCarousel = (props: ServiceCarouselSection & SiteWidePageData) => (
  <ServiceCarouselRC {...makeServiceCarouselProps(props)} />
);

export default ServiceCarousel;
