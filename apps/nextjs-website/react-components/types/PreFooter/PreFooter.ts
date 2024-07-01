import { CommonProps, Generic } from '../common/Common.types';

export interface StoreButtonsProps {
  readonly hrefGoogle?: string;
  readonly hrefApple?: string;
}

export interface PreFooterProps extends CommonProps, PreFooterContentProps {
  readonly storeButtons?: StoreButtonsProps;
  readonly background?: string | Generic;
}

export interface PreFooterContentProps extends CommonProps {
  title: string;
}
