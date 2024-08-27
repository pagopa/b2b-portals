import { CommonProps, CtaButtonProps, Generic } from '../common/Common.types';

export interface CardsProps extends CommonProps {
  items: CardsItemProps[];
  text: {
    title?: string;
    subtitle?: string;
    body?: string | Generic;
  };
  ctaButtons?: CtaButtonProps[];
  textPosition?: 'left' | 'right' | 'center';
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
