import React, { useEffect, useRef } from "react";
import { IFrameProps } from "../../types/IFrame/IFrame.types";
import { iframeResizer } from 'iframe-resizer';

const IFrame = (props: IFrameProps) => {
  const { src } = props;
  const iFrameRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iFrameRef.current) {
      iframeResizer({}, iFrameRef.current);
    }
  }, [src]);

  return (
    <iframe
      ref={iFrameRef}
      src={src}
      style={{ width: "1px", minWidth: "100%", border: "none" }}
    />
  );
};

export default IFrame;

