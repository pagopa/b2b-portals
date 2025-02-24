import { useEffect, useRef, useState } from 'react';
import { FramedVideoProps } from '@react-components/types';
import { renderVideo, renderTextSection } from './FramedVideo.helpers';
import { IoBackgroundColorAlternativeBlue } from '../common/Common.helpers';

const FramedVideo = ({
  videoURL,
  sectionID,
  text,
  theme,
  themeVariant,
  loop,
  autoplay,
}: FramedVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [error, setError] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileDevice(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const layout = text ? text.textPosition : null;
  const flexDirection = isMobileDevice
    ? 'column-reverse'
    : layout === 'left'
    ? 'row'
    : 'row-reverse';

  const videoFlexBasis = text ? (isMobileDevice ? '100%' : '50%') : '80%';
  const justifyContent = text
    ? isMobileDevice
      ? 'center'
      : 'space-between'
    : 'center';

  const backgroundColor = IoBackgroundColorAlternativeBlue(theme);

  if (!videoURL) {
    return (
      <section
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '600px',
          backgroundColor: backgroundColor,
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
        justifyContent: justifyContent,
        alignItems: 'center',
        backgroundColor: backgroundColor,
        padding: isMobileDevice ? '2em' : '4em 8em',
        gap: '2em',
        overflow: 'hidden',
      }}
      {...(sectionID && { id: sectionID })}
    >
      {text && (
        <div style={{ flexBasis: isMobileDevice ? '100%' : '50%' }}>
          {renderTextSection({
            title: text.title,
            body: text.body,
            link: text.link,
            theme,
            themeVariant,
          })}
        </div>
      )}

      <div
        style={{
          flexBasis: videoFlexBasis,
        }}
      >
        {renderVideo({
          videoRef,
          error,
          setError,
          src: videoURL,
          loop,
          autoplay,
          fallback: 'Video failed to load',
          onVideoEnd: () => {},
          isMobileDevice,
        })}
      </div>
    </section>
  );
};

export default FramedVideo;
