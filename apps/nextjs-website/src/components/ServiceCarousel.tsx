'use client';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';
import { ServiceCarouselSection } from '@/lib/fetch/types/PageSection';
import { ServiceCarousel as ServiceCarouselRC } from '@react-components/components';
import { LocalizeURL } from '@/lib/linkLocalization';
import { ServiceCarouselProps } from '@react-components/types';

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
  locale,
  defaultLocale,
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
