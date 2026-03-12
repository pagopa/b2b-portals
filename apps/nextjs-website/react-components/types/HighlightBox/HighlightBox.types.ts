import { LinkProps } from '../common/Common.types';

export interface HighlightBoxProps {
  title: string;
  body: string;
  image: {
    src: string;
    srcSet: string;
    sizes: string;
  };
  eyelet?: string;
  link?: LinkProps;
  sectionID: string | null;
}
