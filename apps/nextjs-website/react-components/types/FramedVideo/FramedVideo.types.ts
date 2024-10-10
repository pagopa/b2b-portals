import { SectionProps } from '../common/Common.types';

export interface FramedVideoProps extends SectionProps {
  videoURL?: string;
  loop: boolean;
  autoplay: boolean;
  text?: {
    title: string;
    body: string;
    link: {
      href: string;
      label: string;
    };
    textPosition: 'left' | 'right';
  };
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
