import { EIconProps } from "../../components/common/EIcon";
import { Generic } from "../common/Common.types";

export interface StripeLinkProps {
  theme: 'dark' | 'light';
  subtitle: Generic | string;
  icon?: EIconProps;
  buttonText?: string;
}