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

const VideoImage = (props: VideoImageProps) => {
  const {
    title,
    subtitle,
    caption,
    src,
    alt,
    autoplay = false,
    loop = false,
    full = false,
    theme,
    fallback,
    playButtonLabel,
    pausedplayButtonLabel,
    isCentered = false,
  } = props;
  const videoRef = useRef<HTMLVideoElement>(null);
  const isVisible = useIsVisible(videoRef);
  const [error, setError] = useState(false);
  const [videoState, setVideoState] = useState<'playing' | 'paused' | 'stopped'>('stopped');

  const textColor = TextColor(theme);

  useEffect(() => {
    if (!isVisible) return;
    const startVideoWhenVisible = async () => {
      if (autoplay && isVisible) play();
    };
    startVideoWhenVisible().catch();
  }, [isVisible]);

  const play = (e?: React.MouseEvent) => {
    e?.preventDefault();
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setVideoState('playing');
      }).catch(() => {
        // Handle play error
      });
    }
  };

  const handleVideoEnd = () => {
    setVideoState('stopped');
  };

  const pause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setVideoState('paused');
    }
  };

  const isImage = (src: string) => {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp'];
    return imageExtensions.some((extension) => src.endsWith(extension));
  };

  const isVideo = (src: string) => {
    const videoExtensions = ['.mp4', '.webm', '.ogg'];
    return videoExtensions.some((extension) => src.endsWith(extension));
  };

  return (
    <>
      <div
        style={{ maxHeight: '600px', position: 'relative', overflow: 'hidden' }}
      >
        {!full && videoState !== 'playing' && (
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
              background: `rgba(0, 0, 0, ${
                typeof src === 'string'
                  ? isImage(src)
                    ? '0.20'
                    : '0.60'
                  : isImage(src.url)
                    ? '0.20'
                    : '0.60'
              })`,
              alignItems: isCentered ? 'center' : 'left',
            }}
          >
            <div
              style={{
                marginLeft: title || subtitle ? '6em' : '0',
                zIndex: 50,
              }}
            >
              {videoState === 'stopped' && (
                <VideoText title={title} subtitle={subtitle} theme={theme} />
              )}
              {typeof src === 'string'
                ? !isImage(src) &&
                  isVideo(src) && (
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
                        {videoState === 'paused' ? pausedplayButtonLabel : playButtonLabel}
                      </p>
                      <PlayArrowIcon
                        sx={{
                          height: '2em',
                          cursor: 'pointer',
                          color: textColor,
                        }}
                      />
                    </div>
                  )
                : !isImage(src.url) &&
                  isVideo(src.url) && (
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
                        {videoState === 'paused' ? pausedplayButtonLabel : playButtonLabel}
                      </p>
                      <PlayArrowIcon
                        sx={{
                          height: '2em',
                          cursor: 'pointer',
                          color: textColor,
                        }}
                      />
                    </div>
                  )}
            </div>
          </div>
        )}
        {typeof src === 'string'
          ? isImage(src)
            ? renderImage({
                src,
                alt,
              })
            : renderVideo({
                videoRef,
                error,
                setError,
                src,
                loop,
                autoplay,
                fallback,
                onVideoEnd: handleVideoEnd,
                onPause: pause,
                onClick: stop,
              })
          : isImage(src.url)
            ? renderImage({
                src: src.url,
                alt,
              })
            : renderVideo({
                videoRef,
                error,
                setError,
                src: src.url,
                loop,
                autoplay,
                fallback,
                onVideoEnd: handleVideoEnd,
                onPause: pause,
                onClick: stop,
              })}
      </div>
      {caption && (
        <VideoCaption
          caption={caption}
          theme={theme}
          toBeCentered={isCentered}
        />
      )}
    </>
  );
};

export default VideoImage;