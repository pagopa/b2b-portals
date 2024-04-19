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
}

export interface BannerLinkContentProps extends CommonProps {
  title: string;
  body: string | JSX.Element;
}