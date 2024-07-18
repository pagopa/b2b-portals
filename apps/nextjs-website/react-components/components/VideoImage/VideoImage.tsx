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
    autoplay = false,
    loop = false,
    full = false,
    theme,
    fallback,
    playButtonLabel,
    isCentered = false,
    showVideo = true,
    imagealt,
    imagesrc,
  } = props;
  const videoRef = useRef<HTMLVideoElement>(null);
  const isVisible = useIsVisible(videoRef);
  const [error, setError] = useState(false);

  const textColor = TextColor(theme);

  useEffect(() => {
    if (!isVisible) return;
    const startVideoWhenVisible = async () => {
      if (autoplay && isVisible) play();
    };
    startVideoWhenVisible().catch();
  }, [isVisible]);

  const play = (e?: React.MouseEvent) => {
    try {
      e?.preventDefault();
      videoRef.current?.play();
    } catch (error) {}
  };

  return (
    <>
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
              background: `rgba(0, 0, 0, ${showVideo ? '0.60' : '0.20'})`,
              alignItems: isCentered ? 'center' : 'left',
            }}
          >
            <div
              style={{
                marginLeft: title || subtitle ? '6em' : '0',
                zIndex: 50,
              }}
            >
              <VideoText title={title} subtitle={subtitle} theme={theme} />
              {showVideo && (
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
                    {playButtonLabel}
                  </p>
                  <PlayArrowIcon
                    sx={{ height: '2em', cursor: 'pointer', color: textColor }}
                  />
                </div>
              )}
            </div>
          </div>
        )}
        {showVideo
          ? renderVideo({
              videoRef,
              error,
              setError,
              src,
              loop,
              autoplay,
              fallback,
            })
          : imagealt &&
            imagesrc &&
            renderImage({
              imagealt: imagealt,
              imagesrc: imagesrc,
              theme: theme,
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
