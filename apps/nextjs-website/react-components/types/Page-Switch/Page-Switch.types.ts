import { EditorialProps } from '../Editorial/Editorial.types';
import { CardsProps } from '../Cards/Cards.types';
import { BannerLinkProps } from '../BannerLink/BannerLink.types';
import { ThemeVariant } from '@/lib/fetch/siteWideSEO';

export interface PageSwitchBaseProps {
  title: string;
  subtitle?: JSX.Element;
  theme: 'dark' | 'light';
  themeVariant: ThemeVariant;
}

export interface PageSwitchPage {
  id: number;
  buttonText: string;
  sections: PageSwitchContent[];
}

export type PageSwitchContent =
  | { type: 'Editorial'; props: EditorialProps }
  | { type: 'Cards'; props: CardsProps }
  | { type: 'BannerLink'; props: BannerLinkProps };

export interface PageSwitchProps extends PageSwitchBaseProps {
  pages: PageSwitchPage[];
}

export interface ButtonSwitchRowBlockProps {
  buttons: { id: number; text: string }[];
  onButtonClick: (sectionID: number) => void;
  selectedButton: { id: number; text: string };
  theme: 'dark' | 'light';
  themeVariant: ThemeVariant;
}
