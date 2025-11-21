import { ThemeVariant } from '@/lib/fetch/siteWideSEO';
import { EditorialProps } from '../Editorial/Editorial.types';

export interface EditorialSwitchBaseProps {
  title: string;
  titleTag?: 'h1' | 'h2';
  subtitle?: JSX.Element;
  theme: 'dark' | 'light';
  themeVariant: ThemeVariant;
}

export interface EditorialSwitchSection {
  id: number;
  buttonText: string;
  content: EditorialProps;
}

export interface EditorialSwitchProps extends EditorialSwitchBaseProps {
  sections: EditorialSwitchSection[];
}

export interface ButtonSwitchRowBlockProps {
  buttons: { id: number; text: string }[];
  onButtonClick: (sectionID: number) => void;
  selectedButton: { id: number; text: string };
  theme: 'dark' | 'light';
  themeVariant: ThemeVariant;
}
