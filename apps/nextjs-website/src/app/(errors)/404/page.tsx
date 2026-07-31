import NotFoundPage from '@react-components/components/NotFoundPage/NotFoundPage';
import { isPreviewMode, getters } from '@/lib/api';
import { Locale } from '@/lib/fetch/siteWideSEO';

const { getSiteWideSEO } = getters;

const NotFound = async () => {
  if (isPreviewMode()) {
    return null;
  }

  const { defaultLocale, locales, themeVariant, custom404Image } =
    await getSiteWideSEO();

  const localesArray = Object.keys(locales).filter(
    (locale) => locales[locale as Locale],
  );

  return (
    <NotFoundPage
      defaultLocale={defaultLocale}
      validLocales={localesArray as Array<Locale>}
      themeVariant={themeVariant}
      custom404Image={walletCustom404Image}
    />
  );
};

export default NotFound;
