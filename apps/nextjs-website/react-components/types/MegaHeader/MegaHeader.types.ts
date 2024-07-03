import { ReactElement } from 'react';

export interface MenuItem {
  primary: string;
  secondary: { title: string; items: string[] }[];
}

export interface SocialMediaLink {
  icon: ReactElement;
  href: string;
}

export interface MegaHeaderProps {
  menuItems: MenuItem[];
  socialMediaLinks: SocialMediaLink[];
}
