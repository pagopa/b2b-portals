import { Theme, ThemeVariant } from '../common/Common.types';
import { CtaButtonProps } from '../common/Common.types';

export interface StoreButtonsProps {
  readonly hrefGoogle?: string;
  readonly hrefApple?: string;
  readonly ariaLabelGoogle?: string;
  readonly ariaLabelApple?: string;
}

export interface PreFooterProps extends PreFooterContentProps {
  readonly storeButtons?: StoreButtonsProps;
  readonly background?: string;
  readonly ctaButtons?: CtaButtonProps[];
  readonly layout: 'left' | 'center';
  readonly excludeSlugs?: string[];
  readonly pressReleasesParentSlug?: string;
  readonly themeVariant: ThemeVariant;
}

export interface PreFooterContentProps {
  readonly title: string;
  readonly theme: Theme;
  readonly themeVariant: ThemeVariant;
}
