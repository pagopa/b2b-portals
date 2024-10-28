import { ThemeVariant } from '@/lib/fetch/siteWideSEO';
import { EditorialProps } from '../Editorial/Editorial.types';

export interface EditorialSwitchBaseProps {
  title: string;
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
  themeVariant: ThemeVariant;
}

export interface ButtonSwitchRowBlockProps {
  buttons: { id: number; text: string }[];
  onButtonClick: (sectionID: number) => void;
  selectedButton: { id: number; text: string };
  theme: 'dark' | 'light';
}
