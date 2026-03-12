import { LinkProps } from '../common/Common.types';

export interface PressReleaseProps {
  title: string;
  subtitle?: string;
  body: JSX.Element;
  sectionID: string | null;
  date: string;
  backlink?: LinkProps;
}
