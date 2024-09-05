import { SectionProps, Theme } from '../common/Common.types';

export interface StoreButtonsProps {
  readonly hrefGoogle?: string;
  readonly hrefApple?: string;
}

export interface PreFooterProps extends SectionProps, PreFooterContentProps {
  readonly storeButtons?: StoreButtonsProps;
  readonly background?: string;
}

export interface PreFooterContentProps {
  readonly title: string;
  readonly theme: Theme;
}
