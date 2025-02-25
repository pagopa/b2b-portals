import { CtaButtonProps } from '../common/Common.types';
import { HeaderSideDrawerProps } from '../Header/Header.types';

export interface MegaMenuItem {
  primary: string;
  secondary: {
    title: string;
    items: {
      label: string;
      href: string;
      badge?: string;
    }[];
  }[];
  ctaButton?: CtaButtonProps;
}

export interface MegaHeaderProps {
  menuItems: MegaMenuItem[];
  logo: {
    src: string;
    alt: string;
    href: string;
  }
  ctaButton?: CtaButtonProps;
  appCtaButton?: CtaButtonProps;
  drawer?: HeaderSideDrawerProps;
}
