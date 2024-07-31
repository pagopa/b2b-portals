import { LinkProps, StackProps } from "@mui/material";
import { CommonProps, CtaButtonProps } from "../common/Common.types";
import { EIconProps } from "@react-components/components/common/EIcon";

export interface CardData {
  readonly title: string;
  readonly subtitle: string;
  readonly stackIcon: EIconProps;
  readonly buttonText: string;
  readonly href: string;
}

export interface HeaderProps extends HeaderTitleProps, NavigationProps {
  ctaButtons?: CtaButtonProps[];
  drawerMenuTitle: string;
  ctaTitle: string;
  ctaButtonText: string;
  ctaHref: string;
  ctaBodyText: string;
  drawerCardsData: CardData[];
}

interface DropdownLink extends LinkProps {
  label: string;
}

export type DropdownItem = DropdownLink;

export interface MenuDropdownProp
  extends Partial<Omit<LinkProps, 'children'>>,
    CommonProps {
  label: string;
  active?: boolean;
  items?: DropdownItem[];
  isOpen?: boolean;
  onClick?: () => void;
  isMobile?: boolean;
  onDropdownClick?: () => void;
}

export interface NavigationProps extends CommonProps {
  menu: MenuDropdownProp[];
}

export interface HeaderTitleProps extends CommonProps {
  product: {
    name: string;
    href?: string;
  };
  beta?: boolean;
  logo?: {
    src: string;
    alt: string;
    href: string;
  };
}

export interface DialogBubbleProps extends StackProps {
  children: React.ReactNode;
}

// Define MenuItem type
export type MenuItem = MenuDropdownProp;

export interface HeaderCtasProps {
  onOpenDrawer: () => void;
  ctaButtons?: CtaButtonProps[] | undefined;
  theme: 'dark' | 'light';
}