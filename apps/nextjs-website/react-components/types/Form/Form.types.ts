import { type CommonProps } from '../common/Common.types';
import { ReactNode } from 'react';

export interface FormProps extends CommonProps {
  readonly title: string;
  readonly subtitle: string;
  readonly privacyText: string | ReactNode;
  readonly privacyLink: string;
  readonly privacyLinkText: string;
  readonly theme: Readonly<'light' | 'dark'>;
  readonly buttonText: string;
  readonly backgroundImage?: string;
}
