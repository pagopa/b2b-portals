import {
  EditorialContentProps,
  EditorialCtaProps,
  EditorialImageProps,
} from '../Editorial/Editorial.types';
import { CommonProps } from '../common/Common.types';

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
  body: string;
  title: string;
  ctaButtons?: EditorialCtaProps['ctaButtons'];
  pattern: 'dots' | 'solid' | 'none';
  image: EditorialImageProps['image'];
}

export interface EditorialSwitchProps
  extends CommonProps,
    EditorialContentProps,
    EditorialCtaProps,
    EditorialImageProps {
  reversed?: boolean;
  width: 'wide' | 'standard' | 'center';
  toptitle: string;
  topsubtitle?: string;
  buttons: { id: string; text: string }[];
  content: ContentItem[];
}