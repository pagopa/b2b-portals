"use client";
import { IFrame as IFrameRC } from "@react-components/components";
import { IFrameSectionProps } from "@/lib/fetch/types/PageSection";

const IFrame = (props: IFrameSectionProps) => (
  <IFrameRC {...props} />
);

export default IFrame;