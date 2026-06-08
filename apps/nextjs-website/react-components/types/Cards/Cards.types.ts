import {
  SectionProps,
  CtaButtonProps,
  Generic,
  LinkProps,
  ThemeVariant,
} from '../common/Common.types';

export interface CardsProps extends SectionProps {
  items: CardsItemProps[];
  text: {
    title?: string;
    subtitle?: string;
    body?: string | Generic;
  };
  titleTag?: 'h1' | 'h2';
  ctaButtons?: CtaButtonProps[];
  textPosition: 'left' | 'right' | 'center' | 'none';
  bottomCTA?: CtaButtonProps;
  customBgColor?: string;
}

export interface CardsItemProps {
  textAlign?: 'center' | 'left';
  iconURL?: string;
  label?: string;
  title: string;
  text?: JSX.Element;
  links?: Array<
    LinkProps & {
      title?: string;
    }
  >;
  masonry?: boolean;
  themeVariant: ThemeVariant;
}
