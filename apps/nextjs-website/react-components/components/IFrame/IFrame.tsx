import React, { useRef } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { IFrameProps } from '../../types/IFrame/IFrame.types';

const IFrame = (props: IFrameProps) => {
  const { src } = props;
  const iFrameRef = useRef<HTMLIFrameElement>(null);

  const isXs = useMediaQuery('(max-width: 375px)');
  const isSm = useMediaQuery('(min-width: 376px) and (max-width: 425px)');
  const isMd = useMediaQuery('(min-width: 426px) and (max-width: 640px)');
  const isLg = useMediaQuery('(min-width: 641px) and (max-width: 658px)');
  const isXl = useMediaQuery('(min-width: 659px) and (max-width: 768px)');
  const isXxl = useMediaQuery('(min-width: 769px)');

  const iframeHeight = isXs
    ? '4100px'
    : isSm
    ? '3900px'
    : isMd
    ? '3700px'
    : isLg
    ? '3650px'
    : isXl
    ? '3000px'
    : isXxl
    ? '2900px'
    : 'auto';

  return (
    <iframe
      ref={iFrameRef}
      src={src}
      style={{ width: '100%', border: 'none', height: iframeHeight }}
    />
  );
};

export default IFrame;

// import React from 'react';
// import { IFrameProps } from '../../types/IFrame/IFrame.types';
// import IframeResizer from '@iframe-resizer/react';

// const IFrame = ({ src }: IFrameProps) => (
//   <IframeResizer
//     license='GPLv3' // Open Source License
//     src={src}
//     style={{ width: '100%', height: '100vh', border: 'none' }}
//   />
// );

// export default IFrame;


