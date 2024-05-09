import { EIconProps } from "../../components/common/EIcon";
import { Theme } from "../common/Common.types";

export interface FeatureItem {
  readonly stackIcon?: EIconProps;
  readonly title: string;
  readonly subtitle: string;
  readonly link?: {
    readonly text: string;
    readonly url: string;
  };
}

export interface FeatureStackItemProps {
  readonly item: FeatureItem;
  readonly theme: 'dark' | 'light';
}

export interface FeatureProps {
  readonly title: string;
  readonly items: ReadonlyArray<FeatureItem>;
  readonly theme: 'dark' | 'light';
  readonly showCarouselMobile?: boolean;
  readonly background?: string;
}

export interface SubtitleProps {
  subtitle: string;
  textLink?: string;
  url?: string;
  theme: 'dark' | 'light';
}

export interface FeatureCarouselProps {
  items: readonly FeatureItem[];
  activeStep: number;
  handleStepChange: (step: number) => void;
  theme: Theme;
  themeComponentDirection: 'rtl' | 'ltr';
}