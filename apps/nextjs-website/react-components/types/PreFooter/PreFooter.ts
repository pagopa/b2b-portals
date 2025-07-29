import { Theme } from '../common/Common.types';
import { CtaButtonProps } from '../common/Common.types';

export interface StoreButtonsProps {
  readonly hrefGoogle?: string;
  readonly hrefApple?: string;
}

export interface PreFooterProps extends PreFooterContentProps {
  readonly storeButtons?: StoreButtonsProps;
  readonly background?: string;
  readonly ctaButtons?: CtaButtonProps[];
  readonly layout: 'left' | 'center';
  readonly excludeSlugs?: string[];
  readonly pressReleasesParentSlug?: string;
}

export interface PreFooterContentProps {
  readonly title: string;
  readonly theme: Theme;
}
