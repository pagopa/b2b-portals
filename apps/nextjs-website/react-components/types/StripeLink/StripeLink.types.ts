import { Generic } from "../common/Common.types";

export interface StripeLinkProps {
  theme: 'dark' | 'light';
  subtitle: Generic | string;
  iconURL?: string;
  buttonText?: string;
}