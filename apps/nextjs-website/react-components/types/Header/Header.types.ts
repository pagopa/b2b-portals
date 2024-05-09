import { ReactNode } from "react";
import { AvatarProps, LinkProps, StackProps } from "@mui/material";
import { CommonProps, CtaButtonProps, Generic } from "../common/Common.types";

export interface HeaderProps extends HeaderTitleProps, NavigationProps {
  ctaButtons?: CtaButtonProps[];
}

interface DropdownLink extends LinkProps {
  label: string;
}

export type DropdownItem = Generic | DropdownLink;

export interface MenuDropdownProp
  extends Partial<Omit<LinkProps, 'children'>>,
    CommonProps {
  label: string;
  active?: boolean;
  items?: DropdownItem[];
}

export interface NavigationProps extends CommonProps {
  menu: MenuDropdownProp[];
}

export interface HeaderTitleProps extends CommonProps {
  product: {
    name: string;
    href?: string;
  };
  avatar?: AvatarProps;
  beta?: boolean;
  logo?: {
    src: string;
    alt: string;
    href: string;
  };
}

export interface DialogBubbleProps extends StackProps {
  children: ReactNode;
}