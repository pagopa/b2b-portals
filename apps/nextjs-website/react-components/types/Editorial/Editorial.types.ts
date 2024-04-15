import { ReactElement } from 'react';
import { CtaButtonProps, type CommonProps } from '../common/Common.types';

export interface EditorialProps
  extends CommonProps,
    EditorialContentProps,
    EditorialCtaProps,
    EditorialImageProps {
  readonly reversed?: boolean;
  readonly width: 'wide' | 'standard' | 'center';
  readonly storeButtons?: StoreButtonsProps;
}

export interface EditorialContentProps extends CommonProps {
  readonly title: string;
  readonly eyelet?: string;
  readonly body: string | JSX.Element;
}

export interface EditorialImageProps extends CommonProps {
  readonly image: ReactElement;
  readonly pattern?: 'dots' | 'solid' | 'none';
}

export type CtaEditorialButton = CtaButtonProps | JSX.Element;

export interface StoreButtonsProps {
  readonly hrefGoogle?: string;
  readonly hrefApple?: string;
}

export interface EditorialCtaProps extends CommonProps {
  readonly ctaButtons?: ReadonlyArray<CtaButtonProps>;
  readonly storeButtons?: StoreButtonsProps;
}
