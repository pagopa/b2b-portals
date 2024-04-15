import { type CommonProps, type Generic } from '../common/Common.types';
import { CtaButtonProps } from '../common/Common.types';

{
  /* HERO PROPS */
}

export interface HeroProps extends CommonProps, HeroTextProps {
  readonly image?: string | Generic;
  readonly altText?: string;
  readonly inverse?: boolean;
  readonly background?: string | Generic;
  readonly useHoverlay?: boolean;
}

export interface HeroTextProps extends CommonProps {
  readonly title: string;
  readonly subtitle?: string | Generic;
  readonly ctaButtons?: ReadonlyArray<CtaButtonProps | Generic>;
  readonly size?: 'medium' | 'big' | 'small';
}
