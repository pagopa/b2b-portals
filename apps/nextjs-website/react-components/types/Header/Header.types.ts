import { LinkProps, StackProps } from '@mui/material';
import { Theme } from '../common/Common.types';

export interface HeaderSideDrawerCtaCardProps {
  readonly title: string;
  readonly subtitle: JSX.Element;
  readonly buttonText: string;
  readonly href: string;
}

export interface HeaderSideDrawerLinkCardProps
  extends HeaderSideDrawerCtaCardProps {
  readonly icons: string[];
}

interface HeaderSideDrawerProps {
  readonly buttonText: string;
  readonly title: string;
  readonly subtitle?: string;
  readonly ctaCard: HeaderSideDrawerCtaCardProps;
  readonly linkCards: HeaderSideDrawerLinkCardProps[];
}

export interface CardData {
  readonly title: string;
  readonly subtitle: string | JSX.Element;
  readonly icons: string[];
  readonly buttonText: string;
  readonly href: string;
}

export interface HeaderProps extends HeaderTitleProps, NavigationProps {
  drawer?: HeaderSideDrawerProps;
  supportLink?: string;
}

interface DropdownLink extends LinkProps {
  label: string;
}

export type DropdownItem = DropdownLink;

export interface MenuDropdownProp extends Partial<Omit<LinkProps, 'children'>> {
  label: string;
  active?: boolean;
  items?: DropdownItem[];
  isOpen?: boolean;
  onClick?: () => void;
  isMobile?: boolean;
  onDropdownClick?: () => void;
  theme: Theme;
  alignRight?: boolean;
}

export interface NavigationProps {
  menu: MenuDropdownProp[];
  theme: Theme;
}

export interface HeaderTitleProps {
  theme: Theme;
  product: {
    name: string;
    href?: string;
  };
  beta: boolean;
  logo?: {
    src: string;
    alt: string;
    href: string;
  };
}

export interface DialogBubbleProps extends StackProps {
  children: React.ReactNode;
}

export interface HeaderCtasProps {
  onOpenDrawer: () => void;
  buttonText: string;
  theme: 'dark' | 'light';
}
