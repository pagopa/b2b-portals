import { LinkProps, StackProps } from "@mui/material";
import { CommonProps } from "../common/Common.types";
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