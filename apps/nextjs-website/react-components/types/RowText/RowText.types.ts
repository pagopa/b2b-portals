export interface RowTextProps {
  title: string;
  subtitle?: string;
  body?: JSX.Element;
  layout: 'left' | 'center';
  sectionID: string | null;
}
