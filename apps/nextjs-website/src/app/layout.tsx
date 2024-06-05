import { ThemeProvider } from '@mui/material/styles';
import Script from 'next/script';
import { theme } from './theme';
import PreHeader from '@/components/PreHeader';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  getPreHeaderProps,
  getHeaderProps,
  getFooterProps,
  getSiteWideSEO,
  isPreviewMode,
} from '@/lib/api';

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (isPreviewMode()) {
    return (
      <ThemeProvider theme={theme}>
        <html lang='it'>
          <body style={{ margin: 0 }}>
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

  const preHeaderProps = await getPreHeaderProps();
  const headerProps = await getHeaderProps();
  const footerProps = await getFooterProps();
  const { matomoID } = await getSiteWideSEO();

  return (
    <ThemeProvider theme={theme}>
      <html lang='it'>
        <body style={{ margin: 0 }}>
          <PreHeader {...preHeaderProps} />
          <Header {...headerProps} />
          {children}
          <Footer {...footerProps} />
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
