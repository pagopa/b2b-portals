import { ThemeVariant } from '@/lib/fetch/siteWideSEO';
import { type SectionProps, type Generic, Theme } from '../common/Common.types';
import { CtaButtonProps } from '../common/Common.types';

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
}

export interface HeroTextProps {
  readonly title: string;
  readonly subtitle?: string | Generic;
  readonly ctaButtons?: ReadonlyArray<CtaButtonProps>;
  readonly storeButtons?: StoreButtonsProps;
  readonly size?: 'medium' | 'big' | 'small';
  readonly link?: {
    readonly label: string;
    readonly href: string;
  };
  readonly theme: Theme;
  readonly themeVariant: ThemeVariant;
}
