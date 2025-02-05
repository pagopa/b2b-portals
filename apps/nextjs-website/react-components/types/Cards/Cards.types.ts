import { SectionProps, CtaButtonProps, Generic } from '../common/Common.types';

export interface CardsProps extends SectionProps {
  items: CardsItemProps[];
  text: {
    title?: string;
    subtitle?: string;
    body?: string | Generic;
  };
  ctaButtons?: CtaButtonProps[];
  textPosition: 'left' | 'right' | 'center' | 'none';
  bottomCTA?: CtaButtonProps;
}

export interface CardsItemProps {
  textAlign?: 'center' | 'left';
  iconURL?: string;
  label?: string;
  title: string;
  text?: string;
  links?: Array<{
    href: string;
    label: string;
    title?: string;
  }>;
  masonry?: boolean;
}