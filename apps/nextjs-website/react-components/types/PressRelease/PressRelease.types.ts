import { CardsItemProps } from '../Cards/Cards.types';
import { LinkProps } from '../common/Common.types';

interface PressReleaseParagraphProps {
  title: string;
  body?: JSX.Element;
  cards?: CardsItemProps[];
}

export interface PressReleaseProps {
  title: string;
  subtitle?: string;
  body: JSX.Element;
  sectionID: string | null;
  date: string;
  backlink?: LinkProps;
  image?: {
    src: string;
    srcSet: string;
    sizes: string;
    alt?: string;
  };
  metadata?: {
    readingTime?: string;
  };
  paragraphs?: PressReleaseParagraphProps[]
}
