import { CommonProps, CtaButtonProps, Generic } from "../common/Common.types";

type ImgProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

export interface BannerLinkProps
  extends CommonProps,
    BannerLinkContentProps {
  ctaButtons?: CtaButtonProps[];
  decoration?: ImgProps | Generic;
  icon?: React.ReactNode;
}

export interface BannerLinkContentProps extends CommonProps {
  title: string;
  normalText: string;
  boldText: string;
  link: string;
  icon?: React.ReactNode;  // Add this line
}
