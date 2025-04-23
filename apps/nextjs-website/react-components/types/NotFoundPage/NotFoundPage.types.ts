import { ReactElement } from 'react';
import { SectionProps } from '@react-components/types/common/Common.types';

export interface NotFoundPageProps extends SectionProps {
  image: ReactElement;
  mobileImage: ReactElement;
  redirectUrl?: string;
  disableRedirect?: boolean;
  locale?: 'it' | 'en' | 'fr' | 'de' | 'sl';
}
