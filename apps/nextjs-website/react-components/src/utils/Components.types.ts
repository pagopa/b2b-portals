import { ReactElement } from 'react';
import { type ButtonProps } from '@mui/material';
import { type CommonProps, type Generic } from '../types/components';
import { EIconProps } from '../components/EIcon';

{
  /* COMMON PROPS */
}

export interface CtaButtonProps extends Partial<ButtonProps> {
  readonly text: string;
}

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

export interface HeroTextProps extends CommonProps {
  readonly title: string;
  readonly subtitle?: string | Generic;
  readonly ctaButtons?: ReadonlyArray<CtaButtonProps | Generic>;
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

export type CtaEditorialButton = CtaButtonProps | JSX.Element;

export interface StoreButtonsProps {
  readonly hrefGoogle?: string;
  readonly hrefApple?: string;
}

export interface EditorialCtaProps extends CommonProps {
  readonly ctaButtons?: ReadonlyArray<CtaButtonProps>;
  readonly storeButtons?: StoreButtonsProps;
}

{
  /* HOWTO PROPS */
}

export interface Step {
  readonly stepIcon?: EIconProps;
  readonly title: string;
  readonly description: string | JSX.Element;
}

export interface HowToStepProps extends Step {
  readonly index: number;
  readonly theme: 'light' | 'dark';
  readonly isLastStep: boolean;
}

export interface HowToProps {
  readonly title: string;
  readonly steps: ReadonlyArray<Step>;
  readonly theme: 'light' | 'dark';
  readonly link?: {
    readonly href: string;
    readonly label: string;
    readonly target?: React.HTMLAttributeAnchorTarget;
  };
  readonly rowMaxSteps?: number;
  readonly stepsAlignment?: 'right' | 'center' | 'left';
}

{
  /* ACCORDION PROPS */
}

export interface AccordionItemProps {
  header: string;
  content: string | JSX.Element;
}

export interface AccordionProps {
  title: string;
  subtitle?: string;
  description?: string | JSX.Element;
  accordionItems: AccordionItemProps[];
  theme: 'light' | 'dark';
  layout?: 'left' | 'center' | 'right';
}