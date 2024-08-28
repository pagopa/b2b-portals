import { EIconProps } from '../../components/common/EIcon';
import { SectionProps, CtaButtonProps, Generic } from '../common/Common.types';

export interface CardsProps extends SectionProps {
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
  cardIcon?: EIconProps;
  label?: string;
  title: string;
  text?: string;
  links?: Array<{
    href: string;
    text: string;
    title?: string;
  }>;
  masonry?: boolean;
}
