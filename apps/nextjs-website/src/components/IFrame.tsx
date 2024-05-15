"use client";
import { IFrame as IFrameRC } from "@react-components/components";
import { IFrameSection } from "@/lib/fetch/types/PageSection";
import { IFrameProps } from "@react-components/types/IFrame/IFrame.types";

const makeIFrameProps = ({ src }: IFrameSection): IFrameProps => ({
  src,
});

const IFrame = (props: IFrameSection) => (
  <IFrameRC {...makeIFrameProps(props)} />
);

export default IFrame;