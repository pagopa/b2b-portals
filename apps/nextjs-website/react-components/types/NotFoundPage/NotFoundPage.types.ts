import { ReactElement } from 'react';
import { SectionProps } from '@react-components/types/common/Common.types';

export interface NotFoundPageProps extends SectionProps {
  image: ReactElement;
  mobileImage: ReactElement;
  title?: string;
  body?: string;
  redirectIntroText?: string;
  redirectText?: string;
  redirectUrl?: string;
  disableRedirect?: boolean;
}
