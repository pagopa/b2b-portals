import { CommonProps, CtaButtonProps } from "../common/Common.types";

export type ImgProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

export interface BannerLinkSectionProps {
  title: string;
  normalText: string;
  boldText: string;
  link: string;
  extraNormalText?: string;
  icon?: React.ReactNode;
  decoration?: ImgProps;
  ctaButtons?: CtaButtonProps[];
}

export interface BannerLinkProps extends CommonProps {
  sections: BannerLinkSectionProps[];
}
