import { SectionProps } from '../common/Common.types';

export interface MediaResourcesItem {
  title: string;
  thumbnailURL: string;
  resourceURL: string;
  label: string;
  fileName?: string;
}

export interface MediaResourcesProps extends SectionProps {
  items: MediaResourcesItem[];
  title?: string;
  labels: {
    ariaLabelDownload: (filename: string, title: string) => string;
  };
}
