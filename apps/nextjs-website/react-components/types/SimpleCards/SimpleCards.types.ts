import {
  CtaButtonProps,
  Generic,
  SectionProps,
  ThemeVariant,
} from '../common/Common.types';

export interface SimpleCardsProps extends SectionProps {
  title?: string;
  subtitle?: string;
  body?: string | Generic;
  ctaButtons?: CtaButtonProps[];
  imageURL?: string;
  imageAlt?: string;
  items: SimpleCardsItemProps[];
}

export interface SimpleCardsItemProps {
  label?: string;
  title: string;
  text?: string;
  href?: string;
  ariaLabel?: string;
  iconURL?: string;
  themeVariant: ThemeVariant;
}
