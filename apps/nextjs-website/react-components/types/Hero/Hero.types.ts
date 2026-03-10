import { ThemeVariant } from '@/lib/fetch/siteWideSEO';
import {
  type SectionProps,
  type Generic,
  Theme,
  LinkProps,
  CtaButtonProps,
} from '../common/Common.types';

export interface HeroProps extends SectionProps, HeroTextProps {
  readonly image?:
    | JSX.Element
    | {
        src: string;
        srcSet: string;
        alt?: string;
      };
  readonly inverse?: boolean;
  readonly background?:
    | Generic
    | {
        src: string;
        srcSet: string;
      };
  readonly useHoverlay?: boolean;
}

export interface StoreButtonsProps {
  readonly hrefGoogle?: string;
  readonly hrefApple?: string;
  readonly ariaLabelGoogle?: string;
  readonly ariaLabelApple?: string;
}

export interface HeroTextProps {
  readonly title: string;
  readonly titleTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  readonly subtitle?: string | Generic;
  readonly ctaButtons?: ReadonlyArray<CtaButtonProps>;
  readonly storeButtons?: StoreButtonsProps;
  readonly size?: 'medium' | 'big' | 'small';
  readonly link?: LinkProps;
  readonly theme: Theme;
  readonly themeVariant: ThemeVariant;
}
