import { LinkProps, SectionProps } from '../common/Common.types';

export interface StripeLinkProps extends SectionProps {
  subtitle: JSX.Element;
  iconURL?: string;
  link: LinkProps;
}
