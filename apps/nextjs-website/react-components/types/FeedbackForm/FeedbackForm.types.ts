import { Locale } from '../common/Common.types';

export interface FeedbackFormProps {
  readonly sectionID: string | null;
  readonly locale: Locale;
  readonly tenant?: string;
  readonly token?: string;
  readonly labels: {
    title: string;
    yes: string;
    no: string;
    send: string;
    sendDetails: string;
    sending: string;
    feedbackSent: string;
    thanksForYourOpinion: string;
    helpUs: string;
    whyNot: string;
    questionDidNotFoundInfo: string;
    questionNotExhaustiveInfo: string;
    questionOther: string;
    howWeDoBetter: string;
    anonymousQuestion: string;
    textPlaceholder: string;
    maximumCharacters: (max: number) => string;
    error: JSX.Element;
  };
}

export interface FeedbackFormType {
  useful: string;
  slug: string;
  notUsefulReason?: string;
  suggestions?: string;
  documentId?: string;
}

export interface FeedbackFormResponseType {
  data: {
    id: number;
    documentId: string;
    useful: boolean;
    slug: string;
    notUsefulReason?: string;
    suggestions?: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: Locale;
  };
}
