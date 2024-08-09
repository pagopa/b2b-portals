import { CommonProps } from '../common/Common.types';

export interface VideoImageProps extends VideoTextProps, VideoCaptionProps {
  sectionID?: string;
  image?: {
    src: string;
    alt: string;
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

export interface VideoTextProps extends CommonProps {
  title?: string;
  subtitle?: string;
}

export interface VideoCaptionProps extends CommonProps {
  caption?: string;
  isCentered: boolean;
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
  isMobileDevice: boolean;
}
