export interface AccordionItemProps {
  header: string;
  content: string | JSX.Element;
  theme: 'light' | 'dark';
}

export interface AccordionProps {
  title: string;
  subtitle?: string;
  description?: string | JSX.Element;
  accordionItems: AccordionItemProps[];
  theme: 'light' | 'dark';
  layout?: 'left' | 'center' | 'right';
}