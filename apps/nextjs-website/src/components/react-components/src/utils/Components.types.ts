import { type ButtonProps } from '@mui/material';
import { type CommonProps, type Generic } from '../types/components';
import { EditorialContentProps } from '../components/Editorial/Content';
import {
  EditorialCtaProps,
  StoreButtonsProps,
} from '../components/Editorial/Ctas';
import { EditorialImageProps } from '../components/Editorial/Image';

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
