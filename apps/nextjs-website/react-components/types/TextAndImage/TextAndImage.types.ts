import { SectionProps } from "../common/Common.types";

export interface TextAndImageProps extends Pick<SectionProps, 'sectionID'> {
  body: string;
  image: {
    src: string;
    href?: string;
    title?: string;
  }
}