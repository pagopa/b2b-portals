import { CtaButtonProps } from '../common/Common.types';

export interface MegaMenuItem {
  primary: string;
  secondary: {
    title: string;
    items: {
      label: string;
      href: string;
    }[];
  }[];
}

export interface MegaHeaderProps {
  menuItems?: MegaMenuItem[];
  logoSrc: string;
  logoAlt: string;
  ctaButton?: CtaButtonProps;
}
