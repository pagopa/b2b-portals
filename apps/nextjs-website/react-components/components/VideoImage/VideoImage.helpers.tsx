import { Typography } from '@mui/material';
import {
  VideoCaptionProps,
  VideoTextProps,
  RenderVideoProps,
  RenderImageProps,
} from '@react-components/types/VideoImage/VideoImage.types';
import { TextColor } from '../common/Common.helpers';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';

interface NextImageProps {
  overflow: 'hidden',
  width: string,
  height: string,
  objectFit: 'cover',
  objectPosition: 'center',
}

export const renderVideo = ({
  videoRef,
  error,
  setError,
  src,
  loop,
  autoplay,
  fallback,
  onClick,
  onVideoEnd,
  isMobileDevice,
}: RenderVideoProps) => {
  const mobileStyle = {
    overflow: 'hidden',
    width: '100vw',
    height: '100vh',
    objectFit: 'cover',
    objectPosition: 'center',
  };

  const nonMobileStyle = {
    overflow: 'hidden',
    width: '100%',
    height: '100%',
  };

  if (error) {
    return (
      <Typography variant="h6" color="background.paper" textAlign="center">
        {fallback}
      </Typography>
    );
  }
  return (
    <video
      onContextMenu={(e) => e.preventDefault()}
      playsInline
      ref={videoRef}
      muted
      loop={loop}
      autoPlay={autoplay}
      onEnded={onVideoEnd}
      onClick={onClick}
      style={isMobileDevice ? mobileStyle : nonMobileStyle}
    >
      <source src={src} onError={() => setError(true)} />
    </video>
  );
};

export const renderImage = ({
  src,
  alt,
  mobileSrc,
  mobileAlt,
  isMobileDevice,
}: RenderImageProps) => {
  const mobileStyle: NextImageProps = {
    overflow: 'hidden',
    width: '100vw',
    height: '100vh',
    objectFit: 'cover',
    objectPosition: 'center',
  };

  const nonMobileStyle: NextImageProps = {
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
  };

  const imageSrc = isMobileDevice && mobileSrc ? mobileSrc : src;
  const imageAlt = isMobileDevice && mobileAlt ? mobileAlt : alt;

  return (
    <Image
      alt={imageAlt}
      src={imageSrc}
      width={0}
      height={0}
      style={isMobileDevice ? mobileStyle : nonMobileStyle}
    />
  );
};

export const VideoText = ({
  title,
  subtitle,
  theme = 'dark',
}: VideoTextProps) => {
  const textColor = TextColor(theme);
  return (
    <>
      {title && (
        <Typography variant="h5" mb={4} color={textColor}>
          {title}
        </Typography>
      )}
      {subtitle && (
        <Typography
          paragraph
          sx={{ fontSize: '16px' }}
          mb={3}
          color={textColor}
        >
          {subtitle}
        </Typography>
      )}
    </>
  );
};

export const ImageText = ({
  title,
  subtitle,
  theme = 'dark',
}: {
  title?: string;
  subtitle?: string;
  theme: 'dark' | 'light';
}) => {
  const textColor = TextColor(theme);
  return (
    <>
      {title && (
        <Typography variant='h5' mb={4} color={textColor}>
          {title}
        </Typography>
      )}
      {subtitle && (
        <Typography
          paragraph
          sx={{ fontSize: '16px' }}
          mb={3}
          color={textColor}
        >
          {subtitle}
        </Typography>
      )}
    </>
  );
};

export const VideoCaption = ({ caption, isCentered }: VideoCaptionProps) => {
  const { palette } = useTheme();
  return (
    <div
      style={{
        height: '116px',
        marginLeft: isCentered ? '0' : '7em',
        marginRight: isCentered ? '0' : '7em',
        marginTop: '1em',
        textAlign: isCentered ? 'center' : 'left',
      }}
    >
      {caption && (
        <Typography
          paragraph
          sx={{ fontSize: '16px', fontWeight: 600 }}
          mb={3}
          color={palette.text.primary}
        >
          {caption}
        </Typography>
      )}
    </div>
  );
};
