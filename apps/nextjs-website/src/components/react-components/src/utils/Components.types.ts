import { ReactElement } from 'react';
import { type ButtonProps } from '@mui/material';
import { type CommonProps, type Generic } from '../types/components';

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

export interface CtaButton extends Partial<ButtonProps> {
  readonly text: string;
}

export interface HeroTextProps extends CommonProps {
  readonly title: string;
  readonly subtitle?: string | Generic;
  readonly ctaButtons?: ReadonlyArray<CtaButton | Generic>;
  readonly size?: 'medium' | 'big' | 'small';
}

{
  /* EDITORIAL PROPS */
}

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

export interface CtaButtonProps extends Partial<ButtonProps> {
  readonly text: string;
}

export type CtaEditorialButton = CtaButtonProps | JSX.Element;

export interface StoreButtonsProps {
  readonly hrefGoogle?: string;
  readonly hrefApple?: string;
}

export interface EditorialCtaProps extends CommonProps {
  readonly ctaButtons?: ReadonlyArray<CtaButton>;
  readonly storeButtons?: StoreButtonsProps;
}
