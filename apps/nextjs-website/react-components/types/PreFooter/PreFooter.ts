import { CommonProps } from '../common/Common.types';

export interface StoreButtonsProps {
  readonly hrefGoogle?: string;
  readonly hrefApple?: string;
}

export interface PreFooterProps extends CommonProps, PreFooterContentProps {
  readonly storeButtons?: StoreButtonsProps;
  decoration?: { url: string };
}

export interface PreFooterContentProps extends CommonProps {
  title: string;
}
