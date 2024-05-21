import { CtaButtonProps } from "@react-components/types/common/Common.types";

export interface CtaButtonsProps {
  readonly ctaButtons: ReadonlyArray<CtaButtonProps | JSX.Element>;
  readonly theme?: 'dark' | 'light';
  readonly disableRipple?: boolean;
}