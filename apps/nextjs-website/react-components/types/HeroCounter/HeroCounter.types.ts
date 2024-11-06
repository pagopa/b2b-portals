import { Theme, type SectionProps } from '../common/Common.types';

export interface HeroCounterProps extends SectionProps, HeroCounterTextProps {
  readonly background?: string;
  readonly counter: {
    readonly number: number;
    readonly text: string;
  };
}

export interface HeroCounterTextProps {
  readonly title: string;
  readonly subtitle?: JSX.Element;
  readonly link?: {
    readonly label: string;
    readonly href: string;
  };
  readonly theme: Theme;
}
