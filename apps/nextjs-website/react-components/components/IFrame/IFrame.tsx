import React, { useLayoutEffect, useRef } from "react";
import { IFrameProps } from "../../types/IFrame/IFrame.types";

const IFrame: React.FC<IFrameProps> = ({ src }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const timeout = 500;

  const resizeIFrameToFitContent = () => {
    const iFrame = iframeRef.current;
    if (!iFrame) {
      return;
    }

    const scrollHeight = iFrame.contentDocument?.body?.scrollHeight;
    if (scrollHeight) {
      setTimeout(() => {
        iFrame.style.height = `${scrollHeight + 16}px`;
      }, timeout);
    }
  };

  useLayoutEffect(() => {
    const handleResize = () => {
      resizeIFrameToFitContent();
    };
    window.addEventListener("resize", handleResize);
    resizeIFrameToFitContent();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [src]);

  return (
    <iframe
      ref={iframeRef}
      src={src}
      onLoad={resizeIFrameToFitContent}
      style={{ width: "100%", border: "none" }}
    />
  );
};

export default IFrame;
