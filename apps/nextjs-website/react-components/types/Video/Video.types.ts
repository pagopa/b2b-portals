import { CommonProps, Generic } from '../common/Common.types';

export interface VideoProps extends CommonProps {
  /** Video url */
  src?: string | {
    alternativeText: string | null;
    url: string;
    width: number;
    height: number;
    mime: string;
  };
  /** Video starts automatically as soon is visible */
  autoplay?: boolean;
  loop?: boolean;
  title?: string;
  subtitle?: string;
  /** When true the full layout is used. Default: false */
  full?: boolean;
  /** when the full layout is not used, this props change the layout alignment.
   * Default: false (left aligned layout)
   */
  reverse?: boolean;
  /** String or a custome element to be shown when something goes wrong */
  fallback?: string | Generic;
  /** Play button text */
  playButtonLabel?: string;
}

export interface VideoTextProps extends CommonProps {
  title?: string | undefined;
  subtitle?: string | undefined;
}
