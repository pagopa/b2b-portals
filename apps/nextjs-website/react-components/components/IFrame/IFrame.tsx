import React from 'react';
import { IFrameProps } from '../../types/IFrame/IFrame.types';
import IframeResizer from '@iframe-resizer/react';

const IFrame = ({ src }: IFrameProps) => (
  <IframeResizer
    license='GPLv3' // Open Source License
    src={src}
    style={{ width: '100%', height: '100vh', border: 'none' }}
  />
);

export default IFrame;
