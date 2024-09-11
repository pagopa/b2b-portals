export interface HighlightBoxProps {
  title: string;
  body: string;
  imageURL: string;
  eyelet?: string | null;
  link?: {
    label: string;
    href: string;
  };
  sectionID: string | null;
}
