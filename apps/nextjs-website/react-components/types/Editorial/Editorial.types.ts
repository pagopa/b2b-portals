import { ReactElement } from 'react';
import {
  CtaButtonProps,
  Theme,
  ThemeVariant,
  type SectionProps,
} from '../common/Common.types';

export interface EditorialProps
  extends SectionProps,
    EditorialContentProps,
    EditorialCtaProps,
    EditorialImageProps {
  readonly reversed?: boolean;
  readonly width: 'wide' | 'standard' | 'center';
  readonly storeButtons?: StoreButtonsProps;
}

export interface EditorialContentProps {
  readonly title: string;
  readonly titleTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  readonly eyelet?: string;
  readonly ariaLabelSection?: string;
  readonly eyeletId?: string;
  readonly body: string | JSX.Element;
  readonly theme: Theme;
  readonly themeVariant: ThemeVariant;
}

export interface EditorialImageProps {
  readonly image: ReactElement;
  readonly mobileImage: ReactElement;
  readonly breakpoint?: number;
  readonly pattern?: 'dots' | 'solid' | 'none';
  readonly theme: Theme;
}

export type CtaEditorialButton = CtaButtonProps | JSX.Element;

export interface StoreButtonsProps {
  readonly hrefGoogle?: string;
  readonly hrefApple?: string;
  readonly ariaLabelGoogle?: string;
  readonly ariaLabelApple?: string;
}

export interface EditorialCtaProps {
  readonly ctaButtons?: ReadonlyArray<CtaButtonProps>;
  readonly storeButtons?: StoreButtonsProps;
  readonly theme: Theme;
  readonly themeVariant: ThemeVariant;
}
