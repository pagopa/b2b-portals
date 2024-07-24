import { CommonProps } from '../common/Common.types';

export interface VideoImageProps extends CommonProps {
  src: string | { url: string; mime: string };
  alt: string;
  autoplay?: boolean;
  loop?: boolean;
  title?: string;
  subtitle?: string;
  caption?: string;
  full?: boolean;
  reverse?: boolean;
  fallback?: string;
  playButtonLabel?: string;
  pausedplayButtonLabel?: string;
  isCentered: boolean;
}

export interface VideoTextProps extends CommonProps {
  title?: string | undefined;
  subtitle?: string | undefined;
}

export interface VideoCaptionProps extends CommonProps {
  caption?: string | undefined;
  toBeCentered: boolean;
}

export interface RenderVideoProps {
  videoRef: React.RefObject<HTMLVideoElement>;
  error: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  src: VideoImageProps['src'];
  loop: boolean;
  autoplay: boolean;  
  onVideoEnd: () => void;
  fallback: React.ReactNode;
  onStop?: () => void;
  onClick?: () => void;
}

// Define TypeScript types for ImageProps
export interface ImageSrcObject {
  url: string;
  mime: string;
}

export type ImageSrc = string | ImageSrcObject;

export interface ImageProps {
  alt: string;
  src: ImageSrc;
}