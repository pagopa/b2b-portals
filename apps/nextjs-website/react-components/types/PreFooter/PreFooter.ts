import { CommonProps, Generic } from '../common/Common.types';

type ImgProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

export interface StoreButtonsProps {
  readonly hrefGoogle?: string;
  readonly hrefApple?: string;
}

export interface PreFooterProps extends CommonProps, PreFooterContentProps {
  readonly storeButtons?: StoreButtonsProps;
  decoration?: ImgProps | Generic | { url: string };
}

export interface PreFooterContentProps extends CommonProps {
  title: string;
}
