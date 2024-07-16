import { EditorialCtaProps } from '../Editorial/Editorial.types';

export interface TitleSubtitleBlockProps {
  toptitle: string;
  topsubtitle?: string;
  theme: 'dark' | 'light';
}

export interface ButtonSwitchRowBlockProps {
  buttons: { id: string; text: string }[];
  onButtonClick: (button: { id: string; text: string }) => void;
  selectedButton: { id: string; text: string };
  theme: 'dark' | 'light';
}

export interface ContentItem {
  id: string;
  eyelet: string;
  body: string | JSX.Element;
  title: string;
  ctaButtons?: EditorialCtaProps['ctaButtons'];
  pattern: 'dots' | 'solid' | 'none';
  image: {
    src: string;
    alt: string;
  };
}

export interface Section {
  button: {
    id: string;
    text: string;
  };
  content: ContentItem;
}

export interface EditorialSwitchProps {
  sections: Section[];
  theme: 'light' | 'dark';
  reversed?: boolean;
  width?: 'wide' | 'standard' | 'center';
  toptitle: string;
  topsubtitle?: string;
  pattern?: 'dots' | 'solid' | 'none';
}