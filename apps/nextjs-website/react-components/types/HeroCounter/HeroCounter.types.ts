import { type CommonProps, type Generic } from '../common/Common.types';

export interface HeroCounterProps extends CommonProps, HeroCounterTextProps {
  readonly inverse?: boolean;
  readonly background?: string | Generic;
  readonly counterNumber?: number;
  readonly counterText?: string;
}

export interface HeroCounterTextProps extends CommonProps {
  readonly title: string;
  readonly subtitle?: string | Generic;
  readonly size?: 'medium' | 'big' | 'small';
}