import { SectionProps, CtaButtonProps } from '../common/Common.types';

export interface BannerLinkSectionProps {
  title: string;
  body: JSX.Element;
  iconURL?: string;
  ctaButtons?: CtaButtonProps[];
  customBgColor?: string;
}

export interface BannerLinkProps extends SectionProps {
  sections: BannerLinkSectionProps[];
}
