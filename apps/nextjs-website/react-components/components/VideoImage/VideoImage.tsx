// Disable rule below since we'll be determining whether image or video exist based on mediaState
/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { useEffect, useRef, useState } from 'react';
import { useIsVisible } from '@react-components/types/common/Common.types';
import { VideoImageProps } from '@react-components/types';
import { TextColor } from '../common/Common.helpers';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import {
  renderImage,
  renderVideo,
  VideoCaption,
  VideoText,
} from './VideoImage.helpers';

const VideoImage = ({
  title,
  subtitle,
  caption,
  isCentered,
  theme,
  image,
  video,
  sectionID,
}: VideoImageProps) => {
  if (!image && !video) {
    // Disable lint for this case because we want the build to fail if user input nothing
    // eslint-disable-next-line
    throw new Error();
  }

  const videoRef = useRef<HTMLVideoElement>(null);
  const isVisible = useIsVisible(videoRef);
  const [error, setError] = useState(false);
  const [mediaState, setMediaState] = useState<
    'play' | 'pause' | 'stop' | 'image'
  >(video ? 'stop' : 'image');
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  const textColor = TextColor(theme);

  useEffect(() => {
    setIsMobileDevice(window.innerWidth <= 768);

    const handleResize = () => {
      setIsMobileDevice(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
        .then(() => {
          setMediaState('play');
        })
        .catch(() => {
          // Handle play error
        });
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
      <section
        style={{
          maxHeight: isMobileDevice ? '100vh' : '600px',
          position: 'relative',
          overflow: 'hidden',
        }}
        {...sectionID && { id: sectionID }}
      >
        {video?.showControls &&
          (mediaState === 'stop' || mediaState === 'pause') && (
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
                background: 'rgba(0, 0, 0, 0.60)',
                alignItems: isCentered ? 'center' : 'left',
              }}
            >
              <div
                style={{
                  marginLeft: title || subtitle ? '6em' : '0',
                  zIndex: 50,
                }}
              >
                {mediaState === 'stop' && (title || subtitle) && (
                  <VideoText
                    theme={theme}
                    {...(title && { title })}
                    {...(subtitle && { subtitle })}
                  />
                )}
                <div
                  onClick={play}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: 'fit-content',
                    gap: '0.5em',
                    alignItems: 'center',
                    justifyContent: isCentered ? 'center' : 'left',
                    color: textColor,
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
                    {mediaState === 'pause'
                      ? video.pausedPlayButtonLabel
                      : video.playButtonLabel}
                  </p>
                  <PlayArrowIcon
                    sx={{
                      height: '2em',
                      cursor: 'pointer',
                      color: textColor,
                    }}
                  />
                </div>
              </div>
            </div>
          )}

        {mediaState === 'image'
          ? renderImage({
              src: image!.src,
              alt: image!.alt,
              isMobileDevice,
            })
          : renderVideo({
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
            })}
      </section>
      {caption && (
        <VideoCaption caption={caption} isCentered={isCentered} />
      )}
    </>
  );
};

export default VideoImage;
