import { EIconProps } from "../../components/common/EIcon";
import { SectionProps } from "../common/Common.types";

export interface StripeLinkProps extends SectionProps {
  subtitle: JSX.Element;
  icon?: EIconProps;
  buttonText?: string;
}