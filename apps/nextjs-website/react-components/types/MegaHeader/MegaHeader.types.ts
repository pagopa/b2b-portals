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
  trackSublinkClickEvent?: string;
  menuItems: MegaMenuItem[];
  logo: {
    src: string;
    alt: string;
    href: string;
  }
  ctaButton?: CtaButtonProps;
  mobileCtaButton?: CtaButtonProps;
  drawer?: HeaderSideDrawerProps;
  socialLinks?: HeaderSocialLink[];
  toggleAriaLabelsOpen?: string;
  toggleAriaLabelsClose?: string;
}

export interface HeaderSocialLink {
  iconURL: string;
  href: string;
  ariaLabel: string;
}
