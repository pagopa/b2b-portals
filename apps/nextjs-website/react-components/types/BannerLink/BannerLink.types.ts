import { CommonProps, CtaButtonProps, Generic } from "../common/Common.types";

type ImgProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

export interface BannerLinkSectionProps {
  title: string;
  normalText: string;
  boldText: string;
  extraNormalText?: string;
  link: string;
  icon?: React.ReactNode;
  decoration?: ImgProps | Generic;
  ctaButtons?: CtaButtonProps[];
}

export interface BannerLinkProps extends CommonProps {
  sections: BannerLinkSectionProps[];
}
