import { SectionProps, CtaButtonProps } from '../common/Common.types';

export interface BannerLinkSectionProps {
  title: string;
  body: JSX.Element;
  iconURL?: string;
  ctaButtons?: CtaButtonProps[];
}

export interface BannerLinkProps extends SectionProps {
  sections: BannerLinkSectionProps[];
}
