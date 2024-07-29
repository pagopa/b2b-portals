import { EditorialProps } from '../Editorial/Editorial.types';

export interface EditorialSwitchBaseProps {
  title: string;
  subtitle?: string;
  theme: 'dark' | 'light';
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
}