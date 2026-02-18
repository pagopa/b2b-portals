export interface IFrameProps {
  src: string;
  sectionID?: string;
  title?: string;
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
