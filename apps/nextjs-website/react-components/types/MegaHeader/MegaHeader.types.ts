export interface MenuItem {
  primary: string;
  secondary: { title: string; items: string[] }[];
}

export interface MegaHeaderProps {
  menuItems?: MenuItem[];
  logoSrc: string;
  logoAlt: string;
  buttonHref: string;
}