export interface HighlightBoxProps {
  title: string;
  body: string;
  imageUrl: string | { data: { attributes: { url: string } } };
  eyelet?: string | null;
  buttonText?: string | null;
  buttonHref?: string | null;
  sectionID: string | null;
}
