import React, { useLayoutEffect, useRef } from "react";
import { IFrameProps } from "../../types/IFrame/IFrame.types";

const IFrame = (props: IFrameProps) => {
  const { src } = props;
  const iFrameRef = useRef<HTMLIFrameElement>(null);

  const resizeIFrameToFitContent = () => {

    setTimeout(() => {
    const iFrame = iFrameRef.current;
    if (!iFrame) return;
      // Resize adding a 16px margin to avoid awkward 1-pixel scrollbars on resize.
      // A better solution would be to have the body inside the iFrame have overflow-y: hidden, but that's out of our control.
      // @ts-ignore
      iFrame.height = (iFrame.contentWindow?.document.body.scrollHeight ?? 0) + 16;
    }, 500);
  };

  useLayoutEffect(() => {
    window.addEventListener("resize", resizeIFrameToFitContent);
    resizeIFrameToFitContent(); // For Chrome-based browsers, since the iFrame's onLoad function doesn't trigger for them
  }, [src]);

  return (
    <iframe
      ref={iFrameRef}
      src={src}
      onLoad={resizeIFrameToFitContent}
      style={{ width: "100%", border: "none" }}
    />
  );
};

export default IFrame;