import { useEffect, useRef, useState } from 'react';
import { FramedVideoProps } from '@react-components/types';
import { renderVideo, renderTextSection } from './FramedVideo.helpers';
import { BackgroundColorAlternative } from '../common/Common.helpers';

const FramedVideo = ({
  video,
  videoURL,
  sectionID,
  text,
  theme,
}: FramedVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [error, setError] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    setIsMobileDevice(window.innerWidth <= 768);

    const handleResize = () => {
      setIsMobileDevice(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const layout = text ? text.textPosition : null;
  const flexDirection = isMobileDevice
    ? 'column'
    : layout === 'left'
      ? 'row'
      : 'row-reverse';

  const videoSrc = videoURL || (video && video.srcURL);

  if (!videoSrc) {
    return (
      <section
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '600px',
          backgroundColor: BackgroundColorAlternative(theme),
          padding: '2em',
          textAlign: 'center',
        }}
        {...(sectionID && { id: sectionID })}
      >
        <p style={{ color: 'red' }}>
          Componente FramedVideo: Inserire almeno uno tra Video e URL Video.
        </p>
      </section>
    );
  }

  return (
    <section
      style={{
        display: 'flex',
        flexDirection: flexDirection,
        justifyContent: isMobileDevice ? 'center' : 'space-between',
        alignItems: 'center',
        height: isMobileDevice ? 'auto' : '600px',
        backgroundColor: BackgroundColorAlternative(theme),
        padding: isMobileDevice ? '2em' : '4em 8em',
        gap: '2em',
      }}
      {...(sectionID && { id: sectionID })}
    >
      {text &&
        renderTextSection({
          title: text.title,
          body: text.body,
          link: text.link,
          theme,
        })}

      {videoSrc &&
        renderVideo({
          videoRef,
          error,
          setError,
          src: videoSrc,
          loop: video?.loop || false,
          autoplay: video?.autoplay || false,
          fallback: video?.fallback || 'Video failed to load',
          onVideoEnd: () => {},
          isMobileDevice,
        })}
    </section>
  );
};

export default FramedVideo;
