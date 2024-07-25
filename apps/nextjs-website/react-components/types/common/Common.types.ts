import React from 'react';
import { type ButtonProps } from '@mui/material';

export type Theme = Readonly<'dark' | 'light'>;

/** this Generic type is meant to be used
 * fot those components that will accept any JSX to
 * be rendered
 */
export type Generic = JSX.Element;

export interface CommonProps {
  readonly theme: Theme;
}

/**
 * this function utility can be used to verify
 * if component's props is a JSX to render
 */
export const isJSX = <T>(arg: T | Generic): arg is Generic =>
  React.isValidElement(arg);

export interface CtaButtonProps extends Partial<ButtonProps> {
  readonly text: string;
  variant?: 'contained' | 'outlined' | 'text';
  readonly disableRipple?: boolean;
}

export function useIsVisible(ref: React.RefObject<Element>) {
  const [isIntersecting, setIntersecting] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry) {
        setIntersecting(entry.isIntersecting);
      }
    });

    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}
