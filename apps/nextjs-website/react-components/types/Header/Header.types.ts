import { LinkProps, StackProps } from "@mui/material";
import { Theme } from "../common/Common.types";
import { EIconProps } from "@react-components/components/common/EIcon";
import { HeaderSideDrawer } from "@/lib/fetch/header";

export interface CardData {
  readonly title: string;
  readonly subtitle: string;
  readonly stackIcon: EIconProps;
  readonly buttonText: string;
  readonly href: string;
}

export interface HeaderProps extends HeaderTitleProps, NavigationProps {
  drawer?: HeaderSideDrawer;
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