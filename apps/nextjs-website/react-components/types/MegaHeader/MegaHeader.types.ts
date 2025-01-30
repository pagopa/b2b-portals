import { CtaButtonProps } from '../common/Common.types';

export interface MegaMenuItem {
  primary: string;
  secondary: {
    title: string;
    items: {
      label: string;
      href: string;
      isNew: boolean;
      badge?: string;
    }[];
  }[];
  ctaButton?: CtaButtonProps;
}

export interface MegaHeaderProps {
  menuItems?: MegaMenuItem[];
  logoSrc: string;
  logoAlt: string;
  ctaButton?: CtaButtonProps;
}
