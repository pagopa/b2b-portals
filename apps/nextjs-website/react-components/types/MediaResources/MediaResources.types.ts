import { SectionProps } from '../common/Common.types';

export interface MediaResourcesItem {
  title: string;
  thumbnail: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
  resource: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
  icon: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
  label: string;
}

export interface MediaResourcesProps extends SectionProps {
  items: MediaResourcesItem[];
  sectionTitle?: string;
}
