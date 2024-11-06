import { ThemeVariant } from '@/lib/fetch/siteWideSEO';
import { SectionProps, Theme } from '../common/Common.types';

export interface FeatureItem {
  readonly iconURL: string;
  readonly title: string;
  readonly subtitle: string;
  readonly link?: {
    readonly label: string;
    readonly href: string;
  };
}

export interface FeatureStackItemProps {
  readonly item: FeatureItem;
  readonly theme: 'dark' | 'light';
  readonly themeVariant: ThemeVariant;
}

export interface FeatureProps extends SectionProps {
  readonly title: string;
  readonly items: ReadonlyArray<FeatureItem>;
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
  readonly themeVariant: ThemeVariant;
}
