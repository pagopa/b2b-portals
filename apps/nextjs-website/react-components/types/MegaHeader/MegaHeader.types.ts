export interface MegaMenuItem {
  primary: string;
  secondary: { title: string; items: string[] }[];
}

export interface MegaHeaderProps {
  menuItems?: MegaMenuItem[];
  logoSrc: string;
  logoAlt: string;
  buttonHref: string;
}
