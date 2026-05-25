import { Locale } from '../common/Common.types';

export interface FeedbackFormProps {
  readonly sectionID: string | null;
  readonly locale: Locale;
  readonly feedbackToken: string;
  readonly strapiApiBaseUrl: string;
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
    error: string;
  };
}

export interface FeedbackFormType {
  useful: string;
  slug: string;
  notUsefulReason?: string;
  suggestions?: string;
}

export interface FeedbackFormResponseType {
  data: {
    id: number;
    documentId: string;
  };
}
