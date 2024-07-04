export interface MenuItem {
  primary: string;
  secondary: { title: string; items: string[] }[];
}

export interface SocialMediaLink {
  href: string;
}

export interface MegaHeaderProps {
  menuItems: MenuItem[];
  socialMediaLinks: SocialMediaLink[];
}
