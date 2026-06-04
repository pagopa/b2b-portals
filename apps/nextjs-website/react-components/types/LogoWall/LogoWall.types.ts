import { SectionProps } from '../common/Common.types';

export interface LogoWallItemProps {
  title: string;
  logoURL: string;
  href?: string;
}

export interface LogoWallProps extends SectionProps {
  firstGroup: LogoWallItemProps[];
  secondGroup: LogoWallItemProps[];
}
