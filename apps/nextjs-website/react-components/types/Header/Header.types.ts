import { AvatarProps, LinkProps } from "@mui/material";
import { CommonProps, CtaButtonProps, Generic } from "../common/Common.types";

interface BottomHeaderProps extends CtaButtonProps, NavigationProps, TitleProps {}

export interface HeaderProps extends CommonProps, BottomHeaderProps {}

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

export interface TitleProps extends CommonProps {
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