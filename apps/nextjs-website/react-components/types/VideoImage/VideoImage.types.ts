import { ThemeVariant } from '@/lib/fetch/siteWideSEO';
import { SectionProps, Theme } from '../common/Common.types';

export interface VideoImageProps
  extends SectionProps,
    VideoTextProps,
    VideoCaptionProps {
  image?: {
    src: string;
    alt: string;
    srcSet: string;
  };
  mobileImage?: {
    src: string;
    alt: string;
    srcSet: string;
  };
  video?: {
    src: string;
    autoplay: boolean;
    loop: boolean;
    showControls: boolean;
    fallback: string;
    playButtonLabel: string;
    pausedPlayButtonLabel: string;
  };
}

export interface VideoTextProps {
  readonly title?: string;
  readonly subtitle?: JSX.Element;
  readonly theme: Theme;
  readonly themeVariant: ThemeVariant;
}

export interface VideoCaptionProps {
  readonly caption?: string;
  readonly isCentered: boolean;
}

export interface RenderVideoProps {
  videoRef: React.RefObject<HTMLVideoElement>;
  error: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  src: string;
  loop: boolean;
  autoplay: boolean;
  fallback: string;
  onVideoEnd: () => void;
  onClick?: () => void;
  isMobileDevice: boolean;
}

export interface RenderImageProps {
  src: string;
  alt: string;
  srcSet: string;
  mobileSrc: string;
  mobileAlt: string;
  mobileSrcSet: string;
  isMobileDevice: boolean;
}
