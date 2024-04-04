/* eslint-disable functional/no-expression-statements */
/* eslint-disable functional/no-return-void */

import React from 'react';
import { type Generic } from '../types/components';

/**
 * this function utility can be used to verify
 * if component's props is a JSX to render
 */
export const isJSX = <T>(arg: T | Generic): arg is Generic =>
  React.isValidElement(arg);

/**
 * a custom hook: it receives a ref as argument
 * and return a boolen with a true value when the ref pointing
 * to a tag element is visible
 */
export function useIsVisible(ref: React.RefObject<Element>) {
  const [isIntersecting, setIntersecting] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry) {
        setIntersecting(entry.isIntersecting);
      }
    });

    const observeCurrentRef = () => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    };

    observeCurrentRef();

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}

export const hrefNoOp = 'javascript:void(0)';
