import { Link, Stack, Typography } from '@mui/material';
import { RenderVideoProps } from '@react-components/types/FramedVideo/FramedVideo.types';
import { TextAlternativeColor, TextColor } from '../common/Common.helpers';

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
  const mobileStyle: React.CSSProperties = {
    overflow: 'hidden',
    width: '80vw',
    objectFit: 'cover',
    objectPosition: 'center',
    borderRadius: '25px',
  };

  const nonMobileStyle: React.CSSProperties = {
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    borderRadius: '25px',
  };

  if (error) {
    return (
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
      controls
      onEnded={onVideoEnd}
      onClick={onClick}
      style={isMobileDevice ? mobileStyle : nonMobileStyle}
    >
      <source src={src} onError={() => setError(true)} />
    </video>
  );
};

export const renderTextSection = ({
  title,
  body,
  link,
  theme,
}: {
  title: string;
  body: string;
  link: { href: string; label: string };
  theme: 'light' | 'dark';
}) => {
  const textColor = TextColor(theme);
  const linkTextColor = TextAlternativeColor(theme);

  return (
    <Stack
      style={{
        textAlign: 'left',
        padding: '1.5em',
      }}
    >
      <Typography variant='h4' color={textColor} mb={2}>
        {title}
      </Typography>

      <Typography variant='body1' color={textColor} mb={4}>
        {body}
      </Typography>

      <Typography fontSize={16} fontWeight={700}>
        <Link
          href={link.href}
          style={{
            color: linkTextColor,
            textDecoration: 'none',
            marginBottom: '32px',
          }}
        >
          {link.label}
        </Link>
      </Typography>
    </Stack>
  );
};
