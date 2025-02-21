import { Box, Typography } from '@mui/material';
import {
  VideoCaptionProps,
  VideoTextProps,
  RenderVideoProps,
  RenderImageProps,
} from '@react-components/types/VideoImage/VideoImage.types';
import { TextColor } from '../common/Common.helpers';
import { useTheme } from '@mui/material/styles';

interface NextImageProps {
  overflow: 'hidden';
  width: string;
  height: string;
  objectFit: 'cover';
  objectPosition: 'center';
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
      <Typography
        component='div'
        variant='h6'
        color='background.paper'
        textAlign='center'
      >
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
  srcSet,
  mobileSrc,
  mobileAlt,
  mobileSrcSet,
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

  const imageSrc = isMobileDevice ? mobileSrc : src;
  const imageAlt = isMobileDevice ? mobileAlt : alt;
  const imageSrcSet = isMobileDevice ? mobileSrcSet : srcSet;

  return (
    <img
      src={imageSrc}
      alt={imageAlt}
      srcSet={imageSrcSet}
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
  themeVariant,
}: VideoTextProps) => {
  const textColor = TextColor(theme);
  const { palette } = useTheme();
  const linkColor =
    theme === 'dark'
      ? palette.custom.white
      : themeVariant === 'SEND'
        ? palette.primary.main
        : palette.custom.primaryColorDark;

  return (
    <>
      {title && (
        <Typography
          component='div'
          variant='h5'
          mb={4}
          color={textColor}
          sx={{ maxWidth: '500px' }}
        >
          {title}
        </Typography>
      )}
      {subtitle && (
        <Typography
          component='div'
          paragraph
          sx={{
            fontSize: '16px',
            maxWidth: '500px',
            '& a': {
              color: linkColor,
              textDecoration: 'underline',
              fontWeight: 'bold',
              '&:hover': {
                color: linkColor,
                textDecoration: 'underline',
              },
            },
            '& p': {
              color: textColor,
            },
          }}
          mb={3}
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
  themeVariant,
}: {
  title?: string;
  subtitle?: JSX.Element;
  theme: 'dark' | 'light';
  themeVariant: 'SEND' | 'IO';
}) => {
  const { palette } = useTheme();
  const textColor = TextColor(theme);
  const linkColor =
    theme === 'dark'
      ? palette.custom.white
      : themeVariant === 'SEND'
        ? palette.primary.main
        : palette.custom.primaryColorDark;

  return (
    <>
      {title && (
        <Typography
          component='div'
          variant='h5'
          mb={4}
          color={textColor}
          sx={{ maxWidth: '500px' }}
        >
          {title}
        </Typography>
      )}
      {subtitle && (
        <Typography
          component='div'
          paragraph
          sx={{
            fontSize: '16px',
            maxWidth: '500px',
            '& a': {
              color: linkColor,
              textDecoration: 'underline',
              fontWeight: 'bold',
              '&:hover': {
                color: linkColor,
                textDecoration: 'underline',
              },
            },
            '& p': {
              color: textColor,
            },
          }}
          mb={3}
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
    <Box
      sx={{
        height: '116px',
        marginTop: '1em',
        textAlign: isCentered ? 'center' : 'left',
        padding: { xs: '0px 20px', md: '0' },
        marginLeft: { xs: '0', md: isCentered ? '0' : '7em' },
        marginRight: { xs: '0', md: isCentered ? '0' : '7em' },
      }}
    >
      {caption && (
        <Typography
          component='div'
          paragraph
          sx={{ fontSize: '16px', fontWeight: 600 }}
          mb={3}
          color={palette.text.primary}
        >
          {caption}
        </Typography>
      )}
    </Box>
  );
};
