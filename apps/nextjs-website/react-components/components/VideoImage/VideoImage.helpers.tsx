import { Typography } from '@mui/material';
import { isJSX } from '@react-components/types/common/Common.types';
import {
  VideoCaptionProps,
  ImageProps,
  VideoTextProps,
  VideoImageProps,
} from '@react-components/types/VideoImage/VideoImage.types';
import { TextColor } from '../common/Common.helpers';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';

interface RenderVideoProps {
  videoRef: React.RefObject<HTMLVideoElement>;
  error: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  src: VideoImageProps['src'];
  loop: boolean;
  autoplay: boolean;
  fallback: React.ReactNode;
}

export const renderVideo = ({
  videoRef,
  error,
  setError,
  src,
  loop,
  autoplay,
  fallback,
}: RenderVideoProps) => {
  // Determine the type based on the structure of src
  const type =
    typeof src === 'string'
      ? src.split('.').pop() ?? 'mp4'
      : src?.mime.split('/').pop() ?? 'mp4';

  if (error) {
    return isJSX(fallback) ? (
      fallback
    ) : (
      <Typography variant='h6' color='background.paper' textAlign='center'>
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
      style={{
        overflow: 'hidden',
        width: '100%',
        height: '100%',
      }}
    >
      <source
        src={typeof src === 'object' ? src.url : src}
        type={`video/${type}`}
        onError={() => setError(true)}
      />
    </video>
  );
};

export const renderImage = ({ imagealt, imagesrc }: ImageProps) => {
  if (!imagealt || !imagesrc) {
    return null;
  }

  return (
    <Image
      alt={imagealt}
      src={imagesrc}
      width={0}
      height={0}
      style={{
        objectFit: 'contain',
        width: '100%',
        height: '100%',
        userSelect: 'none',
        overflow: 'hidden',
      }}
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

export const VideoCaption = ({ caption, toBeCentered }: VideoCaptionProps) => {
  const { palette } = useTheme();
  return (
    <div
      style={{
        height: '116px',
        marginLeft: toBeCentered ? '0' : '7em',
        marginRight: toBeCentered ? '0' : '7em',
        marginTop: '1em',
        textAlign: toBeCentered ? 'center' : 'left',
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
