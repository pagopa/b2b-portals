import NotFoundPage from '@react-components/components/NotFoundPage/NotFoundPage';
import { NotFoundPageProps } from '@react-components/types/NotFoundPage/NotFoundPage.types';

export interface StorybookNotFoundPageProps {
  defaultLocale: NotFoundPageProps['defaultLocale'];
}

export const StorybookNotFoundPage = ({
  defaultLocale,
}: StorybookNotFoundPageProps) => {
  return <NotFoundPage defaultLocale={defaultLocale} disableRedirect={true} validLocales={['it', 'en', 'de', 'fr', 'sl']} />;
};
