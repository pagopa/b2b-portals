import React, { useRef } from 'react';
import {
  IFrameProps,
  IFrameResizerRef,
  IFrameResizerMessage,
} from '../../types/IFrame/IFrame.types';
import IframeResizer from '@iframe-resizer/react';

const IFrame = ({ src }: IFrameProps) => {
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

  return (
    <IframeResizer
      license='GPLv3' // Open Source License
      src={src}
      style={{ width: '100%', height: '100vh', border: 'none' }}
      forwardRef={iframeRef}
      onMessage={handleMessage}
    />
  );
};

export default IFrame;
