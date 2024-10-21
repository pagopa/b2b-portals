import { ThemeProvider } from '@mui/material/styles';
import Script from 'next/script';
import { theme } from '../theme';
import PreHeader from '@/components/PreHeader';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  getPreHeaderProps,
  getHeaderProps,
  getFooterProps,
  getSiteWideSEO,
  isPreviewMode,
  getPreFooterProps,
} from '@/lib/api';
import PreFooter from '@/components/PreFooter';

type LayoutProps = {
  children: React.ReactNode;
  params: { locale: 'it' | 'en' };
};

const MatomoScript = (id: string): string => `
var _paq = (window._paq = window._paq || []);
/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
_paq.push(["trackPageView"]);
_paq.push(["enableLinkTracking"]);
(function () {
  var u = "https://pagopa.matomo.cloud/";
  _paq.push(["setTrackerUrl", u + "matomo.php"]);
  _paq.push(["setSiteId", "${id}"]);
  var d = document,
    g = d.createElement("script"),
    s = d.getElementsByTagName("script")[0];
  g.async = true;
  g.src = "//cdn.matomo.cloud/pagopa.matomo.cloud/matomo.js";
  s.parentNode.insertBefore(g, s);
})();`;

export async function generateStaticParams() {
  const general = await getSiteWideSEO();
  const locales = Object.keys(general.locales).filter(
    (locale) => general.locales[locale as 'it' | 'en']
  );

  return locales.map((locale) => ({ locale: locale === 'it' ? '' : locale }));
}

export default async function Layout({
  children,
  params: { locale },
}: LayoutProps) {
  if (isPreviewMode()) {
    return (
      <ThemeProvider theme={theme}>
        <html lang='it'>
          <body style={{ margin: 0, scrollBehavior: 'smooth' }}>
            {children}
            <Script
              src='/scripts/otnotice-1.0.min.js'
              type='text/javascript'
              id='otprivacy-notice-script'
              strategy='beforeInteractive'
            />
          </body>
        </html>
      </ThemeProvider>
    );
  }

  const preHeaderProps = await getPreHeaderProps(locale);
  const headerProps = await getHeaderProps(locale);
  const footerProps = await getFooterProps(locale);
  const preFooterProps = await getPreFooterProps(locale);
  const { matomoID, locales } = await getSiteWideSEO();
  const localesArray = Object.keys(locales).filter(
    (locale) => locales[locale as 'it' | 'en']
  );

  return (
    <ThemeProvider theme={theme}>
      <html lang={locale}>
        <body style={{ margin: 0 }}>
          {preHeaderProps && <PreHeader {...preHeaderProps} />}
          <Header {...headerProps} />
          {children}
          {preFooterProps && <PreFooter {...preFooterProps} />}
          <Footer
            {...footerProps}
            locales={localesArray as Array<'it' | 'en'>}
          />
          <Script
            src='/scripts/otnotice-1.0.min.js'
            type='text/javascript'
            id='otprivacy-notice-script'
            strategy='beforeInteractive'
          />
          {matomoID !== null && (
            <Script
              id='matomo'
              key='script-matomo'
              dangerouslySetInnerHTML={{ __html: MatomoScript(matomoID) }}
              strategy='lazyOnload'
            />
          )}
        </body>
      </html>
    </ThemeProvider>
  );
}
