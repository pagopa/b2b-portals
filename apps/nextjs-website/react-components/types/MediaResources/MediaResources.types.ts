import { SectionProps } from '../common/Common.types';

export interface MediaResourcesItem {
  title: string;
  thumbnailURL: string;
  resourceURL: string;
  label: string;
}

export interface MediaResourcesProps extends SectionProps {
  items: MediaResourcesItem[];
  title: string;
}
