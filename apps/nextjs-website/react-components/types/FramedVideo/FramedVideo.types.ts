import { SectionProps } from '../common/Common.types';

export interface FramedVideoProps extends SectionProps {
  theme: 'light' | 'dark';
  videoURL?: string | null;
  video?:
    | {
        srcURL: string | null;
        autoplay: boolean;
        loop: boolean;
        showControls: boolean;
        fallback: string;
        playButtonLabel: string;
        pausedPlayButtonLabel: string;
      }
    | undefined;
  text?: {
    title: string;
    body: string;
    link: {
      href: string;
      label: string;
    };
    textPosition: 'left' | 'right';
  } | null;
}

export interface RenderVideoProps {
  videoRef: React.RefObject<HTMLVideoElement>;
  error: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  src: string;
  loop: boolean;
  autoplay: boolean;
  fallback: string;
  onClick?: () => void;
  onVideoEnd: () => void;
  isMobileDevice: boolean;
}
