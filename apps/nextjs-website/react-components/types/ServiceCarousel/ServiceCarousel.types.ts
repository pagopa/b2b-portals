export interface ServiceCardProps {
  readonly title: string;
  readonly link: {
    readonly label: string;
    readonly href: string;
  };
  readonly description?: string;
  readonly imageURL?: string;
}

export interface ServiceCarouselProps {
  readonly title: string;
  readonly eyelet?: string;
  readonly description?: string;
  cards: ReadonlyArray<ServiceCardProps>;
}
