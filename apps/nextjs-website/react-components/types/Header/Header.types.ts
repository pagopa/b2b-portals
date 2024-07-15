import { LinkProps, StackProps } from "@mui/material";
import { CommonProps, CtaButtonProps } from "../common/Common.types";

export interface HeaderProps extends HeaderTitleProps, NavigationProps {
  ctaButtons?: CtaButtonProps[];
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