import { CtaButtonProps, type CommonProps } from '../common/Common.types';

export interface FormProps extends CommonProps {
  readonly title: string;
  readonly subtitle: string;
  readonly privacyText: string | JSX.Element;
  readonly privacyLink: string;
  readonly privacyLinkText: string;
  readonly theme: 'light' | 'dark';
  readonly backgroundImage?: string;
  readonly ctaButtons: ReadonlyArray<CtaButtonProps>;
}

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  organization: string;
};