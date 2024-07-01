export interface MenuItem {
    primary: string;
    secondary: { title: string; items: string[] }[];
  }
  
  export interface SocialMediaLink {
    icon: string; 
    href: string;
  }
  
  export interface MegaHeaderProps {
      menuItems: MenuItem[];
      socialMediaLinks: SocialMediaLink[];
  }