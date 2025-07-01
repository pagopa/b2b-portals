export interface IFrameProps {
  src: string;
  sectionID?: string;
}

export interface IFrameResizerMessage {
  message: {
    type: string;
    newChildHeight: number;
  };
}

export interface IFrameResizerRef {
  getElement: () => HTMLIFrameElement;
}
