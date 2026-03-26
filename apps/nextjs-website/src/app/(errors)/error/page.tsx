import { isPreviewMode, getters } from '@/lib/api';
import { Locale } from '@/lib/fetch/siteWideSEO';
import ErrorPage from '@react-components/components/ErrorPage/ErrorPage';

const { getSiteWideSEO } = getters;

const Page = async () => {
  if (isPreviewMode()) {
    return null;
  }

  const { defaultLocale, locales } = await getSiteWideSEO();

  const localesArray = Object.keys(locales).filter(
    (locale) => locales[locale as Locale],
  );

  return (
    <ErrorPage
      defaultLocale={defaultLocale}
      validLocales={localesArray as Array<Locale>}
    />
  );
};

export default Page;
