import React, { useEffect, useRef } from 'react';
import {
  IFrameProps,
  IFrameResizerRef,
  IFrameResizerMessage,
} from '../../types/IFrame/IFrame.types';
import IframeResizer from '@iframe-resizer/react';

const IFrame = ({ src, sectionID }: IFrameProps) => {
  const iframeRef = useRef<IFrameResizerRef>(null);

  const handleMessage = ({
    message: { type, newChildHeight },
  }: IFrameResizerMessage) => {
    if (type === 'resize' && newChildHeight && iframeRef.current) {
      iframeRef.current.getElement().scrollIntoView({
        behavior: 'smooth',
      });
      // Specific message created as a workaround when calling parentIFrame.resize() doesn't work
      iframeRef.current.getElement().style.height = `${newChildHeight}px`;
    }
  };

  useEffect(() => {
    const handleScrollMessage = (event: MessageEvent) => {
      if (event.data?.type === 'scrollTo' && event.data?.target) {
        const targetSection = document.getElementById(event.data.target);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    };

    window.addEventListener('message', handleScrollMessage);
    return () => window.removeEventListener('message', handleScrollMessage);
  }, []);

  return sectionID ? (
    <section id={sectionID}>
      <IframeResizer
        license='GPLv3' // Open Source License
        src={src}
        style={{ width: '100%', height: '100vh', border: 'none' }}
        forwardRef={iframeRef}
        onMessage={handleMessage}
        allow='geolocation; clipboard-write'
      />
    </section>
  ) : (
    <IframeResizer
      license='GPLv3' // Open Source License
      src={src}
      style={{ width: '100%', height: '100vh', border: 'none' }}
      forwardRef={iframeRef}
      onMessage={handleMessage}
      allow='geolocation; clipboard-write'
    />
  );
};

export default IFrame;
