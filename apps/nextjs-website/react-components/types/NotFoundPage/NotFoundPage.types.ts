import { SectionProps } from '@react-components/types/common/Common.types';

export interface NotFoundPageProps extends SectionProps {
  redirectUrl: string;
  disableRedirect?: boolean;
  locale: 'it' | 'en' | 'fr' | 'de' | 'sl';
}
