import { ThemeVariant } from '@/lib/fetch/siteWideSEO';
import { SectionProps } from '../common/Common.types';

export interface AccordionItemProps {
  header: string;
  content: string | JSX.Element;
  theme: 'light' | 'dark';
  themeVariant: ThemeVariant;
}

export interface AccordionProps extends SectionProps {
  title: string;
  subtitle?: string;
  description?: string | JSX.Element;
  accordionItems: AccordionItemProps[];
  layout: 'left' | 'center';
  textAlignment: 'left' | 'center' | 'right';
}
