import { LinkProps, Theme, type SectionProps } from '../common/Common.types';

export interface HeroCounterProps extends SectionProps, HeroCounterTextProps {
  readonly background?: {
    src: string;
    srcSet: string;
    sizes: string;
  };
  readonly counter: {
    readonly number: number;
    readonly text: string;
  };
}

export interface HeroCounterTextProps {
  readonly title: string;
  readonly subtitle?: JSX.Element;
  readonly link?: LinkProps;
  readonly theme: Theme;
}
