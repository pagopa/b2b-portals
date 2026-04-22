import { ThemeProvider } from '@mui/material';
import { ReactNode } from 'react';
import { themeBase, themeExperimental } from '../theme';
import { Locale } from '@/lib/fetch/siteWideSEO';
import { getLocalizedSlugs } from '@/lib/localizedSlugs';
import PreHeader from '@/components/PreHeader';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getters, isPreviewMode } from '@/lib/api';
import EmptyLayout from '@/components/EmptyLayout';

const { getSiteWideSEO, getPreHeaderProps, getHeaderProps, getFooterProps } =
  getters;

type ErrorsLayoutProps = {
  readonly children: ReactNode;
};

const ErrorsRootLayout = async ({ children }: ErrorsLayoutProps) => {
  if (isPreviewMode()) {
    return <EmptyLayout />;
  }

  const { defaultLocale, locales, themeVariant } = await getSiteWideSEO();

  if (themeVariant === 'WALLET') {
    import('../../styles/wallet-font.css');
  }

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
    <ThemeProvider
      theme={themeVariant === 'WALLET' ? themeExperimental : themeBase}
    >
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
