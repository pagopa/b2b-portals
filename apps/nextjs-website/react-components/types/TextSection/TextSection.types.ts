import { LinkProps } from '../common/Common.types';

export interface TextSectionProps {
  title?: string;
  body: JSX.Element;
  eyelet?: string;
  subtitle?: JSX.Element;
  link?: LinkProps;
  sectionID: string | null;
}
