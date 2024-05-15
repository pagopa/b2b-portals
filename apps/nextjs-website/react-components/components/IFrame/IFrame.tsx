import React, { useLayoutEffect, useRef } from "react";
import { IFrameProps } from "../../types/IFrame/IFrame.types";
import { calculateIFrameHeight } from "./IFrame.helpers";

const IFrame = (props: IFrameProps) => {
  const { src } = props;

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const timeout = 500;

  const resizeIFrameToFitContent = () => {
    const iFrame = iframeRef.current;
    if (!iFrame) return;

    setTimeout(() => {
      iFrame.style.height = calculateIFrameHeight(iFrame);
    }, timeout);
  };

  useLayoutEffect(() => {
    window.addEventListener("resize", resizeIFrameToFitContent);
    resizeIFrameToFitContent();

    return () => {
      window.removeEventListener("resize", resizeIFrameToFitContent);
    };
  }, [src]);

  return (
    <iframe
      ref={iframeRef}
      src={src}
      onLoad={resizeIFrameToFitContent}
      style={{ width: "100%", border: "none", height: "100vh" }}
    />
  );
};

export default IFrame;