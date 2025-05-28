import { ThemeProvider } from '@mui/material';
import NotFoundPage from '@react-components/components/NotFoundPage/NotFoundPage';
import { theme } from './theme';
import {
  getFooterProps,
  getHeaderProps,
  getPreHeaderProps,
  getSiteWideSEO,
  isPreviewMode,
} from '@/lib/api';
import PreHeader from '@/components/PreHeader';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Locale } from '@/lib/fetch/siteWideSEO';

const NotFound = async () => {
  if (isPreviewMode()) {
    return null;
  }

  const isDryBuild = process.env['USE_MOCK'] === 'true';
  if (isDryBuild) {
    return (
      <ThemeProvider theme={theme}>
        <html lang='it'>
          <body style={{ margin: 0 }}>
            <NotFoundPage defaultLocale='it' validLocales={['it']} />
          </body>
        </html>
      </ThemeProvider>
    );
  }

  const { defaultLocale, locales, themeVariant } = await getSiteWideSEO();

  const preHeaderProps = await getPreHeaderProps(defaultLocale);
  const headerProps = await getHeaderProps(defaultLocale, defaultLocale);
  const footerProps = await getFooterProps(defaultLocale);
  const localesArray = Object.keys(locales).filter(
    (locale) => locales[locale as Locale],
  );

  return (
    <ThemeProvider theme={theme}>
      <html lang={defaultLocale}>
        <body style={{ margin: 0 }}>
          {preHeaderProps && (
            <PreHeader
              {...preHeaderProps}
              themeVariant={themeVariant}
              locale={defaultLocale}
              defaultLocale={defaultLocale}
            />
          )}
          <Header
            {...headerProps}
            locale={defaultLocale}
            defaultLocale={defaultLocale}
          />
          <NotFoundPage
            defaultLocale={defaultLocale}
            validLocales={localesArray as Array<Locale>}
          />
          <Footer
            {...footerProps}
            locales={localesArray as Array<Locale>}
            defaultLocale={defaultLocale}
          />
        </body>
      </html>
    </ThemeProvider>
  );
};

export default NotFound;
