import { type CommonProps, type Generic } from '../common/Common.types';
import { CtaButtonProps } from '../common/Common.types';

export interface HeroProps extends CommonProps, HeroTextProps {
  readonly image?: string | Generic;
  readonly altText?: string;
  readonly inverse?: boolean;
  readonly background?: string | Generic;
  readonly useHoverlay?: boolean;
  readonly displayMode?: 'image' | 'counter'; // New property to select between image or counter
  readonly counterNumber?: number; // New property for counter number
  readonly counterText?: string; // New property for counter text
}

export interface HeroTextProps extends CommonProps {
  readonly title: string;
  readonly subtitle?: string | Generic;
  readonly ctaButtons?: ReadonlyArray<CtaButtonProps | Generic>;
  readonly size?: 'medium' | 'big' | 'small';
}