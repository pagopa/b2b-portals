import { Typography } from '@mui/material';
import { isJSX } from '@react-components/types/common/Common.types';
import {
  VideoCaptionProps,
  VideoTextProps,
  RenderVideoProps,
  ImageSrc,
  ImageSrcObject,
  ImageProps,
} from '@react-components/types/VideoImage/VideoImage.types';
import { TextColor } from '../common/Common.helpers';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';

export const renderVideo = ({
  videoRef,
  error,
  setError,
  src,
  loop,
  autoplay,
  fallback,
  onVideoEnd,
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
      onEnded={onVideoEnd}
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

// Type guard function to check if src is an object
function isImageSrcObject(src: ImageSrc): src is ImageSrcObject {
  return typeof src === 'object' && src !== null && 'url' in src;
}

// Refactored renderImage function
export const renderImage = ({ alt = 'image alt', src }: ImageProps) => {
  let imageUrl = isImageSrcObject(src) ? src.url : src;

  if (!imageUrl) {
    return null;
  }

  return (
    <Image
      alt={alt}
      src={imageUrl}
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