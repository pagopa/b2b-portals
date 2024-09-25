import { useEffect, useRef, useState } from 'react';
import { FramedVideoProps } from '@react-components/types';
import { renderVideo, renderTextSection } from './FramedVideo.helpers';
import { BackgroundColorAlternative } from '../common/Common.helpers';

const FramedVideo = ({ video, sectionID, text, theme }: FramedVideoProps) => {
  if (!video) {
    throw new Error('Video is required');
  }

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

      {renderVideo({
        videoRef,
        error,
        setError,
        src: video.src,
        loop: video.loop,
        autoplay: video.autoplay,
        fallback: video.fallback,
        onVideoEnd: () => {},
        isMobileDevice,
      })}
    </section>
  );
};

export default FramedVideo;
