import React, { useEffect, useRef } from 'react';
import {
  IFrameProps,
  IFrameResizerRef,
  IFrameResizerMessage,
} from '../../types/IFrame/IFrame.types';
import IframeResizer from '@iframe-resizer/react';
import mixpanel from 'mixpanel-browser';

const IFrame = ({ src, sectionID, title }: IFrameProps) => {
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
    const handleChildMessage = (event: MessageEvent) => {
      // Request to scroll to section outside the iFrame
      if (event.data?.type === 'scrollTo' && event.data?.target) {
        const targetSection = document.getElementById(event.data.target);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }

      // Request to track MixPanel event
      if (event.data?.type === 'track' && event.data?.event) {
        const eventName = event.data.event.name;
        const eventProperties = event.data.event.properties ?? undefined; // Turn null into undefined

        if (
          typeof eventName === 'string' &&
          (typeof eventProperties === 'object' || eventProperties === undefined)
        ) {
          try {
            if (!mixpanel.has_opted_out_tracking()) {
              mixpanel.track(
                event.data.event.name,
                event.data.event.properties,
              );
            }
          } catch {
            // Mixpanel is not initialized
          }
        }
      }
    };

    window.addEventListener('message', handleChildMessage);
    return () => window.removeEventListener('message', handleChildMessage);
  }, []);

  return sectionID ? (
    <section id={sectionID}>
      <IframeResizer
        license='GPLv3' // Open Source License
        src={src}
        {...(title && { title })}
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
      {...(title && { title })}
      style={{ width: '100%', height: '100vh', border: 'none' }}
      forwardRef={iframeRef}
      onMessage={handleMessage}
      allow='geolocation; clipboard-write'
    />
  );
};

export default IFrame;
