import { CardsItemProps } from '../Cards/Cards.types';
import { LinkProps, SectionProps } from '../common/Common.types';

interface PressReleaseParagraphProps {
  title: string;
  body?: JSX.Element;
  cards?: CardsItemProps[];
}

export interface PressReleaseProps extends SectionProps {
  title: string;
  subtitle?: string;
  body: JSX.Element;
  date: string;
  backlink?: LinkProps;
  image?: {
    src: string;
    srcSet: string;
    sizes: string;
    alt?: string;
  };
  metadata?: {
    labels: {
      readingTime: string;
      shareLink: string;
      copyLink: string;
      linkCopied: string;
    };
    readingTime?: string;
  };
  paragraphs?: PressReleaseParagraphProps[];
}
