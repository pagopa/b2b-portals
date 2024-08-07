import { type CommonProps } from '../common/Common.types';

export interface HeroCounterProps extends CommonProps, HeroCounterTextProps {
  readonly background?: string;
  readonly counter: {
    readonly number: number;
    readonly text: string;
  };
}

export interface HeroCounterTextProps extends CommonProps {
  readonly title: string;
  readonly subtitle?: JSX.Element;
  readonly link?: {
    readonly label: string;
    readonly href: string;
  }
}
