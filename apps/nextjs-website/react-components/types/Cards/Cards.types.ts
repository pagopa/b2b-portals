import { EIconProps } from "../../components/common/EIcon";
import { CommonProps, CtaButtonProps, Generic } from "../common/Common.types";

export interface CardsProps extends CommonProps {
  items: CardsItem[];
  text: {
    title: string;
    subtitle?: string;
    body?: string | Generic;
  };
  ctaButtons?: CtaButtonProps[];
}

export interface CardsItem {
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