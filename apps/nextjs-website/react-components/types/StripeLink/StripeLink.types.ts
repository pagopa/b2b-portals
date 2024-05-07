import { EIconProps } from "../../components/common/EIcon";
import { CtaButtonProps, Generic } from "../common/Common.types";

export interface StripeLinkProps {
  theme: 'dark' | 'light';
  subtitle: Generic | string;
  icon?: EIconProps;
  readonly buttonText?: ReadonlyArray<CtaButtonProps | Generic>;
}