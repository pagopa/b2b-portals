export interface TextSectionProps {
  title?: string;
  body: JSX.Element;
  eyelet?: string;
  subtitle?: JSX.Element;
  link?: {
    label: string;
    href: string;
  };
  sectionID: string | null;
}
