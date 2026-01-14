import { SectionProps } from '../common/Common.types';

export interface ServiceCardProps {
  readonly title: string;
  readonly link: {
    readonly label: string;
    readonly href: string;
  };
  readonly description?: string;
  readonly image?: {
    readonly url: string;
    readonly alternativeText?: string;
  };
}

export interface ServiceCarouselProps extends Omit<SectionProps, 'theme'> {
  readonly title: string;
  readonly eyelet?: string;
  readonly description?: string;
  readonly labels: {
    cardNext: string;
    cardPrevious: string;
    pagination: string;
    goToSlide: (index: number) => string;
    slideOf: (index: number, total: number) => string;
  };
  cards: ReadonlyArray<ServiceCardProps>;
}
