import { useEffect, useRef, useState } from 'react';
import { Typography } from '@mui/material';
import {
  isJSX,
  useIsVisible,
} from '@react-components/types/common/Common.types';
import {
  VideoProps,
  VideoTextProps,
} from '@react-components/types/Video/Video.types';
import { TextColor } from '../common/Common.helpers';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Video = (props: VideoProps) => {
  const {
    title,
    subtitle,
    src,
    autoplay = false,
    loop = false,
    full = false,
    theme = 'dark',
    fallback = 'Ops! Qualcosa è andato storto... Riprova in un secondo momento.',
    playButtonLabel = 'Riproduci Video',
  } = props;
  const videoRef = useRef<HTMLVideoElement>(null);
  const isVisible = useIsVisible(videoRef);
  const [error, setError] = useState(false);

  const textColor = TextColor(theme);

  useEffect(() => {
    if (!isVisible) return;
    const startVideoWhenVisible = async () => {
      if (autoplay && isVisible) await play();
    };
    startVideoWhenVisible().catch(console.error);
  }, [isVisible]);

  const play = async (e?: React.MouseEvent) => {
    try {
      e?.preventDefault();
      await videoRef.current?.play();
    } catch (error) {
      console.warn(error);
    }
  };

  // Determine the type based on the structure of src
  const type =
    typeof src === 'string'
      ? src.split('.').pop() ?? 'mp4'
      : src?.mime.split('/').pop() ?? 'mp4';

  const renderVideo = () => {
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
          height: '100%', // Ensure video covers the container
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

  return (
    <div
      style={{ maxHeight: '600px', position: 'relative', overflow: 'hidden' }}
    >
      {!full && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '20px',
            background: 'rgba(0, 0, 0, 0.60)', // Adjusted for full cover and darker for better readability
            color: textColor,
          }}
        >
          <div style={{ marginLeft: '6em', zIndex: 50 }}>
            <VideoText title={title} subtitle={subtitle} theme={theme} />
            <div
              onClick={play}
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: 'fit-content',
                gap: '0.5em',
                alignItems: 'center',
              }}
            >
              <p
                style={{
                  display: 'flex',
                  fontWeight: 700,
                  fontSize: '24px',
                  textDecoration: 'none',
                  color: textColor,
                  cursor: 'pointer',
                  alignSelf: 'flex-start',
                }}
              >
                {playButtonLabel}
              </p>
              <PlayArrowIcon sx={{ height: '2em', cursor:'pointer' }} />
            </div>
          </div>
        </div>
      )}
      {renderVideo()}
    </div>
  );
};

const VideoText = ({ title, subtitle, theme = 'dark' }: VideoTextProps) => {
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

export default Video;
