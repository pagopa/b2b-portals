'use client';
import { ThemeVariant } from '@/lib/fetch/siteWideSEO';
import { ServiceCarouselSection } from '@/lib/fetch/types/PageSection';
import { ServiceCarousel as ServiceCarouselRC } from '@react-components/components';
import { ServiceCarouselProps } from '@react-components/types';

const makeServiceCarouselProps = ({
  eyelet,
  description,
  cards,
  ...rest
}: ServiceCarouselSection & {
  themeVariant: ThemeVariant;
}): ServiceCarouselProps => ({
  ...rest,
  ...(eyelet && { eyelet }),
  ...(description && { description }),
  cards: cards.map((card) => ({
    title: card.title,
    link: card.link,
    ...(card.description && { description: card.description }),
    ...(card.image.data && { imageURL: card.image.data.attributes.url }),
  })),
});

const ServiceCarousel = (
  props: ServiceCarouselSection & { themeVariant: ThemeVariant }
) => <ServiceCarouselRC {...makeServiceCarouselProps(props)} />;

export default ServiceCarousel;
