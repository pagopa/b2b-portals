import { type CommonProps } from '../common/Common.types';

export interface FormProps extends CommonProps {
  readonly title: string;
  readonly subtitle: string;
  readonly privacyText: string;
  readonly privacyLink: string;
  readonly privacyLinkText: string;
  readonly theme: 'light' | 'dark';
  readonly buttonText: string;
  readonly backgroundImage?: string;
}
