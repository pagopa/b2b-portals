import { type CommonProps } from '../common/Common.types';

export interface HeroCounterProps extends CommonProps, HeroCounterTextProps {
  readonly background?: string;
  readonly counterNumber: number;
  readonly counterText: string;
}

export interface HeroCounterTextProps extends CommonProps {
  readonly title: string;
  readonly subtitle?: string | JSX.Element;
  readonly linkText?: string;
  readonly linkUrl?: string;
}
