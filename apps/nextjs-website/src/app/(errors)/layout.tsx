import { ThemeProvider } from '@mui/material';
import { ReactNode } from 'react';
import { theme } from '../theme';
import { Locale } from '@/lib/fetch/siteWideSEO';
import { getLocalizedSlugs } from '@/lib/localizedSlugs';
import PreHeader from '@/components/PreHeader';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getters } from '@/lib/api';

const { getSiteWideSEO, getPreHeaderProps, getHeaderProps, getFooterProps } =
  getters;

type RootLayoutProps = {
  readonly children: ReactNode;
};

const ErrorsRootLayout = async ({ children }: RootLayoutProps) => {
  const { defaultLocale, locales, themeVariant } = await getSiteWideSEO();

  const preHeaderProps = await getPreHeaderProps(defaultLocale);
  const headerProps = await getHeaderProps(defaultLocale, defaultLocale);
  const footerProps = await getFooterProps(defaultLocale);
  const localesArray = Object.keys(locales).filter(
    (locale) => locales[locale as Locale],
  );

  const localizedLinks = await getLocalizedSlugs({
    currentSlug: [],
    defaultLocale,
    availableLocales: localesArray as Locale[],
  });

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
          {children}
          <Footer
            {...footerProps}
            defaultLocale={defaultLocale}
            localizedLinks={localizedLinks}
          />
        </body>
      </html>
    </ThemeProvider>
  );
};

export default ErrorsRootLayout;
