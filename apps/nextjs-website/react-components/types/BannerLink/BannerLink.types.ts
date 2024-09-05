import { EIconProps } from '@react-components/components/common/EIcon';
import { SectionProps, CtaButtonProps } from '../common/Common.types';

export type ImgProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

export interface BannerLinkSectionProps {
  title: string;
  body: JSX.Element;
  icon?: EIconProps;
  decoration?: ImgProps;
  ctaButtons?: CtaButtonProps[];
}

export interface BannerLinkProps extends SectionProps {
  sections: BannerLinkSectionProps[];
}
