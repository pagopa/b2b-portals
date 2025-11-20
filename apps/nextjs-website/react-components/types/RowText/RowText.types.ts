export interface RowTextProps {
  title: string;
  titleTag?: 'h1' | 'h2';
  subtitle?: string;
  body?: JSX.Element;
  layout: 'left' | 'center';
  sectionID: string | null;
}
