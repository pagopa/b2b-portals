export interface HighlightBoxProps {
  title: string;
  body: string;
  image: {
    src: string;
    srcSet: string;
  };
  eyelet?: string;
  link?: {
    label: string;
    href: string;
  };
  sectionID: string | null;
}
