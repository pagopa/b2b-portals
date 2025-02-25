import { useRef, useState, useEffect } from 'react';
import { useIsVisible } from '@react-components/types/common/Common.types';
import { VideoImageProps } from '@react-components/types';
import { TextColor } from '../common/Common.helpers';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  renderImage,
  renderVideo,
  VideoCaption,
  VideoText,
  ImageText,
} from './VideoImage.helpers';

const VideoImage = ({
  title,
  subtitle,
  caption,
  isCentered,
  theme,
  themeVariant,
  image,
  mobileImage,
  video,
  sectionID,
}: VideoImageProps) => {
  if (!image && !video) {
    throw new Error();
  }

  const videoRef = useRef<HTMLVideoElement>(null);
  const isVisible = useIsVisible(videoRef);
  const [error, setError] = useState(false);
  const [mediaState, setMediaState] = useState<
    'play' | 'pause' | 'stop' | 'image'
  >(video ? 'stop' : 'image');

  const textColor = TextColor(theme);
  const themeMUI = useTheme();
  const isMobileDevice = useMediaQuery(themeMUI.breakpoints.down('md'));

  useEffect(() => {
    if (mediaState === 'image') return;
    if (!isVisible) return;
    const startVideoWhenVisible = async () => {
      if (video?.autoplay && isVisible) play();
    };
    startVideoWhenVisible().catch();
  }, [isVisible]);

  const play = (e?: React.MouseEvent) => {
    e?.preventDefault();
    if (mediaState === 'image') return;
    if (videoRef.current) {
      videoRef.current
        .play()
        .then(() => setMediaState('play'))
        .catch(() => {});
    }
  };

  const handleVideoEnd = () => {
    setMediaState('stop');
  };

  const pause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setMediaState('pause');
    }
  };

  return (
    <>
      <Box
        component='section'
        sx={{
          maxHeight: { xs: 'none', md: '600px' },
          position: 'relative',
          overflow: 'hidden',
          lineHeight: 0,
        }}
        {...(sectionID && { id: sectionID })}
      >
        {video?.showControls &&
          (mediaState === 'stop' || mediaState === 'pause') && (
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: { xs: '20px', md: '0' },
                background: 'rgba(0, 0, 0, 0.60)',
                alignItems: isCentered ? 'center' : 'flex-start',
                textAlign: isCentered ? 'center' : 'left',
              }}
            >
              <Box
                sx={{
                  marginLeft: { xs: '0', md: isCentered ? 'auto' : '7em' },
                  marginRight: { xs: '0', md: isCentered ? 'auto' : '0' },
                  zIndex: 50,
                }}
              >
                {mediaState === 'stop' && (title || subtitle) && (
                  <VideoText
                    theme={theme}
                    themeVariant={themeVariant}
                    {...(title && { title })}
                    {...(subtitle && { subtitle })}
                  />
                )}
                <Box
                  onClick={play}
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: 'fit-content',
                    gap: '0.5em',
                    alignItems: 'center',
                    justifyContent: isCentered ? 'center' : 'flex-start',
                    color: textColor,
                    margin: isCentered ? '0 auto' : '0',
                  }}
                >
                  <Box
                    component='p'
                    sx={{
                      display: 'flex',
                      fontWeight: 700,
                      fontSize: '24px',
                      textDecoration: 'none',
                      color: textColor,
                      cursor: 'pointer',
                      alignSelf: 'flex-start',
                      fontFamily: '"Titillium Web", sans-serif',
                    }}
                  >
                    {mediaState === 'pause'
                      ? video.pausedPlayButtonLabel
                      : video.playButtonLabel}
                  </Box>
                  <PlayArrowIcon
                    sx={{ height: '2em', cursor: 'pointer', color: textColor }}
                  />
                </Box>
              </Box>
            </Box>
          )}
        {mediaState === 'image' ? (
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: { xs: 'auto', md: '600px' },
            }}
          >
            {renderImage({
              src: image!.src,
              alt: image!.alt,
              srcSet: image!.srcSet,
              mobileSrc: mobileImage!.src,
              mobileAlt: mobileImage!.alt,
              mobileSrcSet: mobileImage!.srcSet,
              isMobileDevice,
            })}

            {(title || subtitle) && (
              <>
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.60)',
                    zIndex: 10,
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: isCentered ? 'center' : 'flex-start',
                    zIndex: 20,
                    padding: '20px',
                    marginLeft: { xs: '0', md: isCentered ? '0' : '6em' },
                    textAlign: isCentered ? 'center' : 'left',
                  }}
                >
                  <ImageText
                    theme={theme}
                    themeVariant={themeVariant}
                    title={title ?? ''}
                    {...(subtitle && { subtitle })}
                  />
                </Box>
              </>
            )}
          </Box>
        ) : (
          renderVideo({
            videoRef,
            error,
            setError,
            src: video!.src,
            loop: video!.loop,
            autoplay: video!.autoplay,
            fallback: video!.fallback,
            onVideoEnd: handleVideoEnd,
            onClick: pause,
            isMobileDevice,
          })
        )}
      </Box>
      {caption && <VideoCaption caption={caption} isCentered={isCentered} />}
    </>
  );
};

export default VideoImage;
